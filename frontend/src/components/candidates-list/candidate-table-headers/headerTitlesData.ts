import type { CandidateType } from "../../../types/Candidates";

type CandidateHeadersType = {
    headerId: keyof CandidateType;
    tableTitles: string;
    isTitleCase: boolean;
}

export const headerTitlesData: CandidateHeadersType[] = [
    { headerId: "name", tableTitles: "Name", isTitleCase: true },
    { headerId: "email", tableTitles: "Email", isTitleCase: false  },
    { headerId: "position", tableTitles: "Position", isTitleCase: true  },
    { headerId: "status", tableTitles: "Status", isTitleCase: true  },
    { headerId: "experienceYears", tableTitles: "Experience (Years)", isTitleCase: false  },
];