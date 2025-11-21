import { CandidateList } from "./Candidates";

export type CandidatesFiltterValues = {
  name: string;
  position: string;
  status: string;
  experienceYears: string;
};

export type CandidatesFiltterProps = {
  candidates: CandidateList[];
  filters: CandidatesFiltterValues;
  setFilters: React.Dispatch<React.SetStateAction<CandidatesFiltterValues>>;
};