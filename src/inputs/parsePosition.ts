import { DIRECTION, Direction, Position } from "../types";

export function parsePosition(rawPosition: string): Position {
    if (!rawPosition) {
        throw Error("Warning: empty string")
    };
    let arrayed = rawPosition.trim().split(/\s+/)
        if (arrayed.length !== 3) {
            throw Error("Invalid Position Input")
    };
    if (!isDirection(arrayed[2])) {
        throw Error("Invalid Direction Input")
    };

    const xCoord = Number(arrayed[0]);
    const yCoord = Number(arrayed[1]);

    const coords = [xCoord, yCoord]

    const direc = arrayed[2];

    if (coords.some((element) =>
            Number.isNaN(element)
        || !Number.isInteger(element)
        || Number(element) < 0)) {
        throw Error("Invalid Position Input")
    };

    const position: Position = {x: xCoord, y: yCoord, facing: direc}
    return position
    
}

export function isDirection(value: string): value is Direction {
    const valid = (element: string) => element === value;
        return DIRECTION.some(valid);
}
