import { test, describe, expect } from "vitest";
import { parsePosition } from "../src/inputs/parsePosition";

describe("parsePosition", () => {
    test("valid input parsed into array", () => {
        expect(parsePosition("3 9 S")).toEqual({ x: 3, y: 9, facing: 'S' });
    });
    test("empty input throws custom error", () => {
        expect(() => parsePosition("")).toThrow("Warning: empty string");
    });
    test("input with incorrect no. of characters throws custom error", () => {
        expect(() => parsePosition("2 W")).toThrow("Invalid Position Input");
    });
    test("input with words throws error", () => {
        expect(() => parsePosition("and 5 W")).toThrow("Invalid Position Input");
    });
    test("input with negative throws error", () => {
        expect(() => parsePosition("-1 5 S")).toThrow("Invalid Position Input");
    });
    test("input with decimal throws error", () => {
        expect(() => parsePosition("2 0.3 N")).toThrow("Invalid Position Input");
    });
    test("input with invalid direction throws error", () => {
        expect(() => parsePosition("2 5 b")).toThrow("Invalid Direction Input");
    });
});