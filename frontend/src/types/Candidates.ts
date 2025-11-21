export enum Status {
  NEW = "New",
  INTERVIEW = "Interview",
  HIRED = "Hired",
};

export interface CandidateType {
  id: string;
  name: string;
  email: string;
  position: string;
  status: Status;
  experienceYears: number;
};