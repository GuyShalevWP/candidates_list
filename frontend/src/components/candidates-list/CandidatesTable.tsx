import {
  Paper,
  Table,
  TableBody,
  TableContainer,
} from "@mui/material";
import React from "react";
import type { CandidateType } from "../../types/Candidates";
import CandidateTableHeaders from "./candidate-table-headers/CandidateTableHeaders";
import { NoCandidatesContainer } from "./candidatesTable.styles";
import CandidateTableCells from "./candidate-table-cells/CandidateTableCells";

const CandidatesTable: React.FC<{ candidates: CandidateType[] }> = ({
  candidates,
}) => {
  if (!candidates || candidates.length === 0) {
    return (
      <NoCandidatesContainer>No candidates found</NoCandidatesContainer>
    );
  }

  return (
    <TableContainer sx={{ maxHeight: "calc(100vh - 250px)" }} component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="candidates table">
        <CandidateTableHeaders />
        <TableBody>
          <CandidateTableCells candidates={candidates} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CandidatesTable;
