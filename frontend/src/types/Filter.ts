import { CandidateList } from "./Candidates";

export type CandidatesFilterValues = {
  name: string;
  position: string;
  status: string;
  experienceYears: string;
};

export type CandidatesFiltterProps = {
  candidates: CandidateList[];
  filters: CandidatesFilterValues;
  setFilters: React.Dispatch<React.SetStateAction<CandidatesFilterValues>>;
};