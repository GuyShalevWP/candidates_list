import { TableCell, TableRow } from "@mui/material";
import type { CandidateType } from "../../../types/Candidates";
import { toTitleCase } from "../../../utils/filterUtils";
import { headerTitlesData } from "../candidate-table-headers/headerTitlesData";

const CandidateTableCells: React.FC<{ candidates: CandidateType[] }> = ({
  candidates,
}) => {
  return (
    <>
      {candidates.map((candidate) => (
        <TableRow key={candidate.id} className="candidate-row">
          {headerTitlesData.map((header) => {
            const cellValue = candidate[header.headerId];

            return (
              <TableCell key={header.headerId}>
                {header.isTitleCase && typeof cellValue === "string"
                  ? toTitleCase(cellValue)
                  : cellValue}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </>
  );
};

export default CandidateTableCells;
