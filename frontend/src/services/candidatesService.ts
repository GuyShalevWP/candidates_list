import { CandidateList } from "../types/Candidates";

const URL = "http://localhost:4000/candidates";

export const getCandidates = async () => {
      let response = await fetch(URL);

      if(!response.ok) {
          throw new Error("Failed to fetch candidates");
      }

      const candidates: CandidateList[] = await response.json();
      return candidates;
}