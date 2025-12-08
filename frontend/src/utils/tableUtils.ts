import { toTitleCase } from "./filterUtils";

export const formatCellValue = (value: unknown, format?: string): string => {
  const strValue = String(value);
  switch (format) {
    case "titleCase":
      return toTitleCase(strValue);
    default:
      return strValue;
  }
};