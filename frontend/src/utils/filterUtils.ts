import type { CandidateType } from "../types/Candidates";
import type { CandidatesFilterValues } from "../types/Filter";


export const initialFilter: Readonly<CandidatesFilterValues> = {
  name: "",
  position: "",
  status: "",
  experienceYears: "",
};

export const getFilteredCandidates = (candidates: CandidateType[], filters: CandidatesFilterValues) => {
  return candidates.filter((c) => {
    const { name, position, status, experienceYears } = filters;

    const matchName = matchesName(c.name, name);

    const matchExperience =
      !experienceYears || String(c.experienceYears) === experienceYears;

    const matchPosition = !position || c.position === position;

    const matchStatus = !status || c.status.toLowerCase() === status.toLowerCase();    

    return matchName && matchPosition && matchStatus && matchExperience;
  });
}

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