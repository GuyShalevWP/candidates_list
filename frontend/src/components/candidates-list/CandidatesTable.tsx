import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { CandidateList } from '../../types/Candidates'
import { formatText } from '../../utils/filterUtils'

const CandidatesTable: React.FC<{ candidates: CandidateList[] }> = ({ candidates }) => {
  if (!candidates || candidates.length === 0) {
    return <div>No candidates available</div>
  }  



  return (
    <TableContainer  component={Paper} className='candidates-table-container'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Experience (years)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {candidates.map((candidate) => (
            <TableRow key={candidate.id} className='candidate-row'>
              <TableCell>{formatText(candidate.name)}</TableCell>
              <TableCell>{candidate.email}</TableCell>
              <TableCell>{formatText(candidate.position)}</TableCell>
              <TableCell>{formatText(candidate.status)}</TableCell>
              <TableCell>{candidate.experienceYears}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CandidatesTable
