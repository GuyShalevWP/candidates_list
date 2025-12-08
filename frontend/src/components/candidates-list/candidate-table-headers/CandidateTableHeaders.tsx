import { TableCell, TableHead, TableRow } from "@mui/material";
import { headerTitlesData } from "./headerTitlesData";




const CandidateTableHeaders = () => {
  const headersCells = headerTitlesData.map((header) => (
    <TableCell key={header.headerId}>{header.tableTitles}</TableCell>
  ));

  return (
    <TableHead>
      <TableRow>
        {headersCells}
      </TableRow>
    </TableHead>
  );
};

export default CandidateTableHeaders;
