export const Status = {
  NEW: "New",
  INTERVIEW: "Interview",
  HIRED: "Hired",
} as const;

export type Status = typeof Status[keyof typeof Status];

export interface CandidateType {
  id: string;
  name: string;
  email: string;
  position: string;
  status: Status;
  experienceYears: number;
};