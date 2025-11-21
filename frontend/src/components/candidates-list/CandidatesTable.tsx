import "./candidatesTable.styles.css";
import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CandidateList } from "../../types/Candidates";
import { toTitleCase } from "../../utils/filterUtils";

const CandidatesTable: React.FC<{ candidates: CandidateList[] }> = ({
  candidates,
}) => {
  if (!candidates || candidates.length === 0) {
    return (
      <div className="no-candidates-available">No candidates available</div>
    );
  }

  return (
    <TableContainer sx={{ maxHeight: "calc(100vh - 250px)" }} component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="candidates table">
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
            <TableRow key={candidate.id} className="candidate-row">
              <TableCell>{toTitleCase(candidate.name)}</TableCell>
              <TableCell>{candidate.email}</TableCell>
              <TableCell>{toTitleCase(candidate.position)}</TableCell>
              <TableCell>{toTitleCase(candidate.status)}</TableCell>
              <TableCell>{candidate.experienceYears}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CandidatesTable;
