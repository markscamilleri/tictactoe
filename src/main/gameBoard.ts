import {GamePiece, GridBoard, Location} from "./types";

export class GameBoard {
    private grid: GridBoard = {
        [Location.TOP_LEFT]: GamePiece.UNSET,
        [Location.TOP_MIDDLE]: GamePiece.UNSET,
        [Location.TOP_RIGHT]: GamePiece.UNSET,
        [Location.CENTRE_LEFT]: GamePiece.UNSET,
        [Location.CENTRE_MIDDLE]: GamePiece.UNSET,
        [Location.CENTRE_RIGHT]: GamePiece.UNSET,
        [Location.BOTTOM_LEFT]: GamePiece.UNSET,
        [Location.BOTTOM_MIDDLE]: GamePiece.UNSET,
        [Location.BOTTOM_RIGHT]: GamePiece.UNSET
    }

    public setLocation(location: Location, piece: GamePiece) {
        this.grid[location] = piece;
        console.log(`Set ${location.toString()} to ${piece}`)
    }

    public isLocationFree(location: Location): boolean {
        return this.grid[location] === GamePiece.UNSET
    }

    public checkForXWin(): boolean {
        return this.grid[Location.TOP_MIDDLE] === GamePiece.X &&
            this.grid[Location.CENTRE_MIDDLE] === GamePiece.X &&
            this.grid[Location.BOTTOM_MIDDLE] === GamePiece.X
    }

    public toArray(): string[][] {
        return [
            [this.grid[Location.TOP_LEFT], this.grid[Location.TOP_MIDDLE], this.grid[Location.TOP_RIGHT]],
            [this.grid[Location.CENTRE_LEFT], this.grid[Location.CENTRE_MIDDLE], this.grid[Location.CENTRE_RIGHT]],
            [this.grid[Location.BOTTOM_LEFT], this.grid[Location.BOTTOM_MIDDLE], this.grid[Location.BOTTOM_RIGHT]],
        ]
    }
}