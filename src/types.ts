const INSTRUCTIONS = ["L", "R", "M"] as const;
const CARDINAL = ["N", "E", "S", "W"] as const;

export type Instruction = (typeof INSTRUCTIONS)[number]; // "L" | "R" | "M"
export type Cardinal = (typeof CARDINAL)[number]; // "N" | "E" | "S" | "W"