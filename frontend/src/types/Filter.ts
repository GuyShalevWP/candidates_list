import { CandidateType } from "./Candidates";

export type CandidatesFilterValues = {
  name: string;
  position: string;
  status: string;
  experienceYears: string;
};

export type CandidatesFiltterProps = {
  candidates: CandidateType[];
  filters: CandidatesFilterValues;
  setFilters: React.Dispatch<React.SetStateAction<CandidatesFilterValues>>;
};