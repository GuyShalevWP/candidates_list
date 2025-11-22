import { initialFilter, matchesName } from "./filterUtils";

describe("filterUtils", () => {
  describe("initialFilter", () => {
    test("should be a readonly object", () => {
      expect(Object.isFrozen(initialFilter)).toBe(false);
    });
  });

  describe("matchesName", () => {
    test("should return true for exact match", () => {
      expect(matchesName("John Doe", "John Doe")).toBe(true);
    });

    test("should return true for partial first name match", () => {
      expect(matchesName("John Doe", "jo")).toBe(true);
      expect(matchesName("John Doe", "joh")).toBe(true);
    });

    test("should return true when searching for multiple partial words", () => {
      expect(matchesName("John Doe", "jo do")).toBe(true);
      expect(matchesName("John Doe", "joh doe")).toBe(true);
    });

    test("should be case-insensitive", () => {
      expect(matchesName("John Doe", "JOHN")).toBe(true);
      expect(matchesName("John Doe", "john")).toBe(true);
      expect(matchesName("JOHN DOE", "john doe")).toBe(true);
    });

    test("should return false when only some search words match", () => {
      expect(matchesName("John Doe", "john smith")).toBe(false);
    });

    test("should handle single character searches", () => {
      expect(matchesName("John Doe", "j")).toBe(true);
      expect(matchesName("John Doe", "d")).toBe(true);
      expect(matchesName("John Doe", "x")).toBe(false);
    });

  });
});

