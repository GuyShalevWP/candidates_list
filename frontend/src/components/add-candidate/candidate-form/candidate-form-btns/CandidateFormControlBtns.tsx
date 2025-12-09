import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import type { FormBtnsProps } from "../../addCandidate.types";

const CandidateFormControlBtns = ({
  handleClose,
  loading,
  success,
}: FormBtnsProps) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button
        disabled={loading || success}
        endIcon={<SendIcon />}
        loadingPosition="end"
        variant="contained"
        type="submit"
      >
        Submit
      </Button>
      <Button
        onClick={handleClose}
        disabled={loading || success}
        variant="contained"
        color="inherit"
      >
        Cancel
      </Button>
    </div>
  );
};

export default CandidateFormControlBtns;
