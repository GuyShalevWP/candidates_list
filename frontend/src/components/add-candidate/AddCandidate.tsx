import Modal from "@mui/material/Modal";
import { useState } from "react";
import { createNewCandidate } from "../../api/candidates-service";
import { newCandidateData, validateForm } from "../../utils/formUtils";
import type { AddCandidateProps } from "./addCandidate.types";
import CandidateForm from "./candidate-form/CandidateForm";

const AddCandidate = ({ open, onClose }: AddCandidateProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const {
    mutate: addCandidate,
    isPending,
    isSuccess,
    isError,
  } = createNewCandidate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors: Record<string, string> = {};

    validateForm({ formData, newErrors });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const data = Object.fromEntries(formData);
      const newCandidate = newCandidateData(data);

      addCandidate(newCandidate, {
        onSuccess: () => {
          setInterval(() => {
            onClose();
          }, 2000);
        },
        onError: (error) => {
          console.error(error?.message);
          console.error("Failed to add candidate:", error);
        },
      });
    }
  };



  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEscapeKeyDown={isPending || isSuccess}
        disableEnforceFocus={isPending || isSuccess}
      >
        <CandidateForm
          handleClose={onClose}
          handleSubmit={handleSubmit}
          setErrors={setErrors}
          errors={errors}
          isPending={isPending}
          isSuccess={isSuccess}
          isError={isError}
        />
      </Modal>
    </>
  );
};

export default AddCandidate;
