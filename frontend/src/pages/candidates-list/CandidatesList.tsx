import "./candidatesList.styles.css";
import { useEffect, useState } from "react";
import CandidatesFiltter from "../../components/candidates-list/CandidatesFiltter";
import CandidatesTable from "../../components/candidates-list/CandidatesTable";
import { CandidateList } from "../../types/Candidates";
import { initialFilter, matchesName } from "../../utils/filterUtils";

const BASE_URL = "http://localhost:4000/candidates";

const CandidatesList = () => {
  const [candidates, setCandidates] = useState<CandidateList[]>([]);
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

  // Filtering logic
  // If the data was large, I'd consider to warp it with useMemo for optimization.
  // Because the data search is static, debouncing is not necessary here.
  const filtered = candidates.filter((c) => {
    const { name, position, status, experienceYears } = filters;

    const matchName = matchesName(c.name, name);

    const matchExperience =
      !experienceYears || String(c.experienceYears) === experienceYears;

    const matchPosition = !position || c.position === position;

    const matchStatus = !status || c.status === status.toLowerCase();

    return matchName && matchPosition && matchStatus && matchExperience;
  });

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
