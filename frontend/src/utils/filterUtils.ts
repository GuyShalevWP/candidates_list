import { CandidatesFiltterValues } from "../types/Filter";

export const initialFilter: CandidatesFiltterValues = {
  name: "",
  position: "",
  status: "",
  experienceYears: "",
};

export const formatText = (text: string) => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

export const matchesName = (fullName: string, search: string) => {
  if (!search.trim()) return true;

  const searchWords = search.toLowerCase().trim().split(/\s+/);
  const nameWords = fullName.toLowerCase().trim().split(/\s+/);

  // every word typed by the user must match the start of
  // at least one word in the candidate's name
  return searchWords.every((searchWord) =>
    nameWords.some((nameWord) => nameWord.startsWith(searchWord))
  );
};