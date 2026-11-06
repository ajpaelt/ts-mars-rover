export const INSTRUCTIONS = ["L", "R", "M"] as const;
export const DIRECTION = ["N", "E", "S", "W"] as const;

export type Instruction = (typeof INSTRUCTIONS)[number]; // "L" | "R" | "M"
export type Direction = (typeof DIRECTION)[number]; // "N" | "E" | "S" | "W"
export type PlateauSize = [number, number];

export interface Position { // this should not be changed once created, 
    readonly x: number;     // we will create a new instance for final position of each rover
    readonly y: number;
    readonly facing: Direction;
}
