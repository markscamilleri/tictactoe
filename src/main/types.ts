export enum GamePiece {
    UNSET = "",
    X = "X",
    O = "O"
}

export enum Location {
    TOP_LEFT = "TOP_LEFT",
    TOP_MIDDLE = "TOP_MIDDLE",
    TOP_RIGHT = "TOP_RIGHT",
    CENTRE_LEFT = "CENTRE_LEFT",
    CENTRE_MIDDLE = "CENTRE_MIDDLE",
    CENTRE_RIGHT = "CENTRE_RIGHT",
    BOTTOM_LEFT = "BOTTOM_LEFT",
    BOTTOM_MIDDLE = "BOTTOM_MIDDLE",
    BOTTOM_RIGHT = "BOTTOM_RIGHT"
}

export type GridBoard = Record<Location, GamePiece>