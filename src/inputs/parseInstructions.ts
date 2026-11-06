import { Instruction, INSTRUCTIONS } from "../types";

export function parseInstructions(rawInstructions: string): Instruction[] {
    if (!rawInstructions) {
        throw Error("Warning: empty string")
    }
    const rawInstructionArray = rawInstructions.split("")
    const result = rawInstructionArray.every((char) => isInstruction(char))
    if (result) {
        return rawInstructionArray
    } throw Error("Input is not valid Instruction input")
}


export function isInstruction(value: string): value is Instruction {
    const valid = (element: string) => element === value ;
    return INSTRUCTIONS.some(valid)
}