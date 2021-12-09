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
        [Location.BOTTOM_RIGHT]: GamePiece.UNSET,
    };

    public setLocation(location: Location, piece: GamePiece) {
        this.grid[location] = piece;
    }

    public isLocationFree(location: Location): boolean {
        return this.grid[location] === GamePiece.UNSET;
    }

    public checkForWin(piece: GamePiece): boolean {
        return (
            this.isVerticalWin(piece) ||
            this.isHorizontalWin(piece) ||
            this.isDiagonalWin(piece)
        );
    }

    public checkForDraw(): boolean {
        return !this.checkForWin(GamePiece.X)
            && !this.checkForWin(GamePiece.O)
            && !this.gridHasUnsetSpaces();
    }

    public toArray(): string[][] {
        return [
            [
                this.grid[Location.TOP_LEFT],
                this.grid[Location.TOP_MIDDLE],
                this.grid[Location.TOP_RIGHT],
            ],
            [
                this.grid[Location.CENTRE_LEFT],
                this.grid[Location.CENTRE_MIDDLE],
                this.grid[Location.CENTRE_RIGHT],
            ],
            [
                this.grid[Location.BOTTOM_LEFT],
                this.grid[Location.BOTTOM_MIDDLE],
                this.grid[Location.BOTTOM_RIGHT],
            ],
        ];
    }

    private isVerticalWin(piece: GamePiece): boolean {
        const leftColumn = [Location.TOP_LEFT, Location.CENTRE_LEFT, Location.BOTTOM_LEFT];
        const middleColumn = [Location.TOP_MIDDLE, Location.CENTRE_MIDDLE, Location.BOTTOM_MIDDLE];
        const rightColumn = [Location.TOP_RIGHT, Location.CENTRE_RIGHT, Location.BOTTOM_RIGHT];

        return [leftColumn, middleColumn, rightColumn].some(column => this.allHavePiece(column, piece)
        )
    }

    private isHorizontalWin(piece: GamePiece): boolean {
        const topRow = [Location.TOP_LEFT, Location.TOP_MIDDLE, Location.TOP_RIGHT];
        const centreRow = [Location.CENTRE_LEFT, Location.CENTRE_MIDDLE, Location.CENTRE_RIGHT];
        const bottomRow = [Location.BOTTOM_LEFT, Location.BOTTOM_MIDDLE, Location.BOTTOM_RIGHT];

        return [topRow, centreRow, bottomRow].some(row => this.allHavePiece(row, piece));
    }

    private isDiagonalWin(piece: GamePiece): boolean {
        const downward = [Location.TOP_LEFT, Location.CENTRE_MIDDLE, Location.BOTTOM_RIGHT];
        const upward = [Location.BOTTOM_LEFT, Location.CENTRE_MIDDLE, Location.TOP_RIGHT];

        return [downward, upward].some(diagonal => this.allHavePiece(diagonal, piece));
    }

    private gridHasUnsetSpaces(): boolean {
        return (Object.keys(this.grid) as Location[]).some(location => this.hasPiece(location, GamePiece.UNSET))
    }

    private allHavePiece(locations: Location[], piece: GamePiece) {
        return locations.every(
            location => this.hasPiece(location, piece)
        );
    }

    private hasPiece(location: Location, piece: GamePiece) {
        return this.grid[location] === piece;
    }


}
