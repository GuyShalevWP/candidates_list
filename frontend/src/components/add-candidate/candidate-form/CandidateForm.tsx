import {
  Alert,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Status } from "../../../types/Candidates";
import CandidateFormControlBtns from "./candidate-form-btns/CandidateFormControlBtns";
import type { CandidateFormProps } from "../addCandidate.types";

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

const CandidateForm = ({
  handleClose,
  handleSubmit,
  setErrors,
  errors,
  isPending,
  isSuccess,
  isError,
}: CandidateFormProps) => {

  const apiCallMessages = () => {
    if (isError) {
      return (
        <Alert severity="error" sx={{ mt: 2 }}>
          {"OH NO! Something fucked up happened."}
        </Alert>
      );
    }

    if (isSuccess) return (
        <Alert severity="success" sx={{ mt: 2 }}>
          {"Candidate added successfully!"}
        </Alert>
      );
  };

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
      {apiCallMessages()}

      <div style={{ display: "flex" }}>
        <TextField
          required
          name="firstName"
          label="First Name"
          disabled={isPending || isSuccess}
          error={!!errors.firstName}
          helperText={errors.firstName}
          onChange={() => clearError("firstName")}
        />
        <TextField
          required
          name="lastName"
          label="Last Name"
          disabled={isPending || isSuccess}
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
          disabled={isPending || isSuccess}
          error={!!errors.email}
          helperText={errors.email}
          onChange={() => clearError("email")}
        />
        <TextField
          required
          name="position"
          label="Position"
          disabled={isPending || isSuccess}
          error={!!errors.position}
          helperText={errors.position}
          onChange={() => clearError("position")}
        />
      </div>

      <div style={{ display: "flex" }}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Status</InputLabel>
          <Select
            disabled={isPending || isSuccess}
            name="status"
            label="Status"
            defaultValue={Status.NEW}
          >
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
          disabled={isPending || isSuccess}
          error={!!errors.experience}
          helperText={errors.experience}
          onChange={() => clearError("experience")}
        />
      </div>

      <CandidateFormControlBtns
        handleClose={handleClose}
        loading={isPending}
        success={isSuccess}
      />
    </Box>
  );
};

export default CandidateForm;
