import { PlateauSize } from "../types";

export function parsePlateauSize(value: string): PlateauSize {
    if (!value) {
        throw Error(("Warning: empty string"))
    };
    let arrayed = value.trim().split(/\s+/)
    if (arrayed.length !== 2) {
        throw Error("Invalid Plateau Size Input")
    };
    const xDim = Number(arrayed[0]);
    const yDim = Number(arrayed[1]);
    
    const output: PlateauSize = [xDim, yDim]
    if (output.some((element) =>
            Number.isNaN(element)
        || !Number.isInteger(element)
        || element < 0)) {
        throw Error("Invalid Plateau Size Input")
    }
    return output;
}
    