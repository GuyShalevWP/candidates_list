import {
  Alert,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Status, type CandidateType } from "../../../types/Candidates";
import CandidateFormControlBtns from "./candidate-form-btns/CandidateFormControlBtns";
import { useState } from "react";
import { toTitleCase } from "../../../utils/filterUtils";
import { validateForm } from "../../../utils/formUtils";
import { postNewCandidate } from "../../../api/candidates-service";

// temp
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type CandidateFormProps = {
  handleClose: () => void;
};

type FormErrors = {
  [key: string]: string;
};

type FormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  status: Status;
  experience: number;
};

const CandidateForm = ({ handleClose }: CandidateFormProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const {mutate: addCandidate, isPending, isError, error } = postNewCandidate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors: Record<string, string> = {};

    validateForm({ formData, newErrors });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const data = Object.fromEntries(formData);

      const newCandidate: CandidateType = {
        id: crypto.randomUUID(),
        name: toTitleCase(`${data.firstName} ${data.lastName}`),
        email: data.email as string,
        position: toTitleCase(data.position as string),
        status: data.status as Status,
        experienceYears: Number(data.experience),
      };

      addCandidate(newCandidate, {
        onSuccess: () => {
          console.log("Candidate added successfully");
          handleClose(); // Close the modal on success
        },
        onError: (error) => {
          console.error("Failed to add candidate:", error);
        }
      });
    }
  };

  const apiErrorMessage = () => {
    if (isError) console.log(error?.message);
    
    return isError && (
      <Alert severity="error" sx={{ mt: 2 }}>
        {"OH NO! Something fucked up happened."}
      </Alert>
    )
  };

  // Clears the error when the user starts typing
  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <Box
      sx={style}
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
      noValidate
    >
      {apiErrorMessage()}

      <div style={{ display: "flex" }}>
        <TextField
          required
          name="firstName"
          label="First Name"
          error={!!errors.firstName}
          helperText={errors.firstName}
          onChange={() => clearError("firstName")}
        />
        <TextField
          required
          name="lastName"
          label="Last Name"
          error={!!errors.lastName}
          helperText={errors.lastName}
          onChange={() => clearError("lastName")}
        />
      </div>
      <div style={{ display: "flex" }}>
        <TextField
          required
          name="email"
          label="Email"
          error={!!errors.email}
          helperText={errors.email}
          onChange={() => clearError("email")}
        />
        <TextField
          required
          name="position"
          label="Position"
          error={!!errors.position}
          helperText={errors.position}
          onChange={() => clearError("position")}
        />
      </div>

      <div style={{ display: "flex" }}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Status</InputLabel>
          <Select name="status" label="Status" defaultValue={Status.NEW}>
            <MenuItem value={Status.NEW}>{Status.NEW}</MenuItem>
            <MenuItem value={Status.INTERVIEW}>{Status.INTERVIEW}</MenuItem>
            <MenuItem value={Status.HIRED}>{Status.HIRED}</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          name="experience"
          variant="outlined"
          label="Experience"
          error={!!errors.experience}
          helperText={errors.experience}
          onChange={() => clearError("experience")}
        />
      </div>
      <CandidateFormControlBtns handleClose={handleClose} />
    </Box>
  );
};

export default CandidateForm;
