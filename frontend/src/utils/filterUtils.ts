import { CandidatesFilterValues } from "../types/Filter";

export const initialFilter: Readonly<CandidatesFilterValues> = {
  name: "",
  position: "",
  status: "",
  experienceYears: "",
};

export const toTitleCase = (text: string) => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

export const matchesName = (fullName: string, search: string) => {
  if (!search.trim()) return true;

  const searchWords = search.toLowerCase().trim().split(/\s+/);
  const nameWords = fullName.toLowerCase().trim().split(/\s+/);

  return searchWords.every((searchWord) =>
    nameWords.some((nameWord) => nameWord.startsWith(searchWord))
  );
};