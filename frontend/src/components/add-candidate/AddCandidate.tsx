import Modal from "@mui/material/Modal";
import CandidateForm from "./candidate-form/CandidateForm";

type AddCandidateProps = {
  open: boolean;
  onClose: () => void;
};

const AddCandidate = ({ open, onClose}: AddCandidateProps) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CandidateForm handleClose={onClose} />
      </Modal>
    </>
  );
};

export default AddCandidate;
