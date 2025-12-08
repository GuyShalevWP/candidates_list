import { useQuery } from "@tanstack/react-query"
import type { CandidateType } from "../types/Candidates"
import { fetchCandidates } from "./api-candidates"

export const getCandidatesList = () => {
    return useQuery<CandidateType[]>({
        queryKey: ['candidates'],
        queryFn: fetchCandidates
    });
}