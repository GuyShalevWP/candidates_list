import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CandidateType } from "../types/Candidates";
import { addCandidateToDB, fetchCandidates } from "./api-candidates";

export const getCandidatesList = () => {
	return useQuery<CandidateType[]>({
		queryKey: ["candidates"],
		queryFn: fetchCandidates,
	});
};

export const postNewCandidate = () => {
	const queryClient = useQueryClient();

	return useMutation<CandidateType, Error, CandidateType>({
		mutationKey: ["add-candidate"],
		mutationFn: async (newCandidate: CandidateType) => {
		return addCandidateToDB(newCandidate);
		},
		onSuccess: () => {
		queryClient.invalidateQueries({ queryKey: ["candidates"] });
		},
	});
};
