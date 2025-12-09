import { useState } from "react";
import CandidatesFiltter from "../../components/candidates-list/CandidatesFiltter";
import CandidatesTable from "../../components/candidates-list/CandidatesTable";
import { getFilteredCandidates, initialFilter } from "../../utils/filterUtils";
import { CandidatesListContainerStyle } from "./candidatesList.styles";
import { getCandidatesList } from "../../api/candidates-service";
import Loader from "../../components/layout/loader/Loader";
import NoCandidatesFound from "../../components/layout/no-candidates-found/NoCandidatesFound";
import AddCandidateBtn from "../../components/layout/buttons/add-candidate-btn/AddCandidateBtn";


const CandidatesList = () => {
  const [filters, setFilters] = useState(initialFilter);

  const { data: candidates = [], isLoading, isError } = getCandidatesList();

  if(isError) return <NoCandidatesFound />
  if(isLoading) return <Loader />

  // If the data was large, I'd consider to warp it with useMemo for optimization.
  // Because the data search is static, debouncing is not necessary here.
  const filtered = getFilteredCandidates(candidates, filters);

  return (
    <CandidatesListContainerStyle>
      <AddCandidateBtn />
      <CandidatesFiltter
        candidates={candidates}
        filters={filters}
        setFilters={setFilters}
      />
      <CandidatesTable candidates={filtered} />
    </CandidatesListContainerStyle>
  );
};

export default CandidatesList;
