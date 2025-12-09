import { Button } from '@mui/material'

const CandidateFormControlBtns = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button variant="contained" type='submit'>Submit</Button>
      <Button variant="contained" color='inherit' onClick={handleClose}>Cancel</Button>
    </div>
  )
}

export default CandidateFormControlBtns
