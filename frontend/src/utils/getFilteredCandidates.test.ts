import { getFilteredCandidates } from "./filterUtils";
import { CandidateType, Status } from "../types/Candidates";
import { CandidatesFilterValues } from "../types/Filter";

describe("getFilteredCandidates", () => {
  const mockCandidates: CandidateType[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      position: "Developer",
      status: Status.NEW,
      experienceYears: 3,
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      position: "Designer",
      status: Status.INTERVIEW,
      experienceYears: 5,
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      position: "Developer",
      status: Status.HIRED,
      experienceYears: 3,
    },
  ];

  test("should return all candidates when no filters applied", () => {
    const filters: CandidatesFilterValues = {
      name: "",
      position: "",
      status: "",
      experienceYears: "",
    };

    const result = getFilteredCandidates(mockCandidates, filters);
    expect(result).toHaveLength(3);
  });

    test("should filter by name", () => {
    const filters: CandidatesFilterValues = {
      name: "jane",
      position: "",
      status: "",
      experienceYears: "",
    };

    const result = getFilteredCandidates(mockCandidates, filters);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Jane Smith");
  });

    test("should return empty array when no matches", () => {
    const filters: CandidatesFilterValues = {
      name: "nonexistent",
      position: "",
      status: "",
      experienceYears: "",
    };

    const result = getFilteredCandidates(mockCandidates, filters);
    expect(result).toHaveLength(0);
  });

  test("should apply multiple filters (AND logic)", () => {
    const filters: CandidatesFilterValues = {
      name: "John Doe",
      position: "Developer",
      status: "New",
      experienceYears: "3",
    };

    const result = getFilteredCandidates(mockCandidates, filters);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("John Doe");
  });

  test("should filter by experience years", () => {
    const filters: CandidatesFilterValues = {
      name: "",
      position: "",
      status: "",
      experienceYears: "5",
    };

    const result = getFilteredCandidates(mockCandidates, filters);
    expect(result).toHaveLength(1);
    expect(result[0].experienceYears).toBe(5);
  });
});