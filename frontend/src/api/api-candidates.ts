import type { CandidateType } from "../types/Candidates";

const BASE_URL = "http://localhost:4000/candidates";

/**
* Fetches the list of candidates from the backend API.
* GET /candidates
*/
export const fetchCandidates = async (): Promise<CandidateType[]> => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error(`Error fetching candidates: ${response.statusText}`);
    }
    return response.json();
};

/**
* Adds a new candidate to the backend API.
* POST /candidates
* @param candidate - The candidate data to add.
*/
export const addCandidateToDB = async (candidate: CandidateType): Promise<CandidateType> => {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(candidate),
    });

    if (!response.ok) {
        throw new Error(`Error adding candidate: ${response.statusText}`);
    }
    return response.json();
};