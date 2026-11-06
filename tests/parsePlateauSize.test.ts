import { test, describe, expect } from "vitest";
import { parsePlateauSize } from "../src/inputs/parsePlateauSize";

describe("parsePlateauSize", () => {
    test("valid input parsed into array", () => {
        expect(parsePlateauSize("1 3")).toEqual([1, 3]);
    });
    test("empty input throws custom error", () => {
        expect(() => parsePlateauSize("")).toThrow("Warning: empty string");
    });
    test("input with incorrect no. of characters throws custom error", () => {
        expect(() => parsePlateauSize("2")).toThrow("Invalid Plateau Size Input");
    });
    test("input with words throws error", () => {
        expect(() => parsePlateauSize("and 5")).toThrow("Invalid Plateau Size Input");
    });
    test("input with negative throws error", () => {
        expect(() => parsePlateauSize("-1 5")).toThrow("Invalid Plateau Size Input");
    });
    test("input with decimal throws error", () => {
        expect(() => parsePlateauSize("2 0.3")).toThrow("Invalid Plateau Size Input");
    });
});