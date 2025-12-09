import { Button } from "@mui/material"
import { useState } from "react";
import AddCandidate from "../../../add-candidate/AddCandidate";

const AddCandidateBtn = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Add Candidate
      </Button>
      <AddCandidate open={open} onClose={handleClose} />
    </>
  )
}

export default AddCandidateBtn
