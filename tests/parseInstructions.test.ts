import { test, describe, expect } from "vitest";
import { parseInstructions, isInstruction } from "../src/inputs/parseInstructions";

describe("parseInstructions", () => {
    test("valid string of instructions returns parsed instruction array", () => {
        expect(parseInstructions("MLMRM")).toEqual(["M", "L", "M", "R", "M"]);
    });
    test("invalid string of instructions throws error", () => {
        expect(() => parseInstructions("MLaLJM")).toThrow;
    });
    test("emptry string throws custom error", () => {
        expect(() => parseInstructions("")).toThrow("Warning: empty string");
    });
});


describe("isInstruction", () => {
    test("valid instruction returns true", () => {
        expect(isInstruction("M")).toBe(true);
    });
    test("invalid instruction returns false", () => {
        expect(isInstruction("A")).toBe(false);
    });
})