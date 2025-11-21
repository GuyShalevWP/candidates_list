import "./candidatesList.styles.css";
import { useEffect, useState } from "react";
import CandidatesFiltter from "../../components/candidates-list/CandidatesFiltter";
import CandidatesTable from "../../components/candidates-list/CandidatesTable";
import { CandidateType } from "../../types/Candidates";
import { getFilteredCandidates, initialFilter, matchesName } from "../../utils/filterUtils";
import { get } from "http";

const BASE_URL = "http://localhost:4000/candidates";

const CandidatesList = () => {
  const [candidates, setCandidates] = useState<CandidateType[]>([]);
  const [filters, setFilters] = useState(initialFilter);

  // Because it's a small project, I'm using fetch directly here.
  // In a larger project I'd make a custom hook that will handle data fetching.
  // Also, error handling and loading states.
  useEffect(() => {
    const getCandidates = async () => {
      await fetch(BASE_URL)
        .then((res) => res.json())
        .then((candidatesList) => setCandidates(candidatesList))
        .catch((err) => console.error(`Error fetching candidates: ${err}`));
    };

    getCandidates();
  }, []);

  // If the data was large, I'd consider to warp it with useMemo for optimization.
  // Because the data search is static, debouncing is not necessary here.
  const filtered = getFilteredCandidates(candidates, filters);

  return (
    <div className="candidates-list-container">
      <CandidatesFiltter
        candidates={candidates}
        filters={filters}
        setFilters={setFilters}
      />
      <CandidatesTable candidates={filtered} />
    </div>
  );
};

export default CandidatesList;
