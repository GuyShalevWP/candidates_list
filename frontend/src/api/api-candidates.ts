import type { CandidateType } from "../types/Candidates";

const BASE_URL = "http://localhost:4000/candidates";

export const fetchCandidates = async (): Promise<CandidateType[]> => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error(`Error fetching candidates: ${response.statusText}`);
    }
    return response.json();
};