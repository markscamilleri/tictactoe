import {TicTacToe} from "../main/ticTacToe";
import {Location} from "../main/types";

describe("TicTacToe", () => {
    describe("When it's X's turn to move", () => {
        it("should return an array representing the board with the new X in 1, 1 place", () => {
            const game: TicTacToe = new TicTacToe();

            expect(game.move(Location.CENTRE_MIDDLE)).toEqual([
                ["", "", ""],
                ["", "X", ""],
                ["", "", ""],
            ]);
        });

        it("should return an array representing the board with the new X in 0, 2 place", () => {
            const game: TicTacToe = new TicTacToe();

            expect(game.move(Location.BOTTOM_LEFT)).toEqual([
                ["", "", ""],
                ["", "", ""],
                ["X", "", ""],
            ]);
        });

        it("should return an array representing the board when three moves are played", () => {
            const game: TicTacToe = new TicTacToe();

            game.move(Location.BOTTOM_LEFT);
            game.move(Location.CENTRE_MIDDLE);

            expect(game.move(Location.TOP_LEFT)).toEqual([
                ["X", "", ""],
                ["", "O", ""],
                ["X", "", ""],
            ]);
        });
    });

    describe("When it's O's turn to move", () => {
        it("should return an array representing the board with the new O in 0, 0 place", () => {
            const game: TicTacToe = new TicTacToe();

            game.move(Location.CENTRE_MIDDLE);

            expect(game.move(Location.TOP_LEFT)).toEqual([
                ["O", "", ""],
                ["", "X", ""],
                ["", "", ""],
            ]);
        });

        it("should return an array representing the board with the new O in 1, 2 place", () => {
            const game: TicTacToe = new TicTacToe();

            game.move(Location.CENTRE_MIDDLE);

            expect(game.move(Location.CENTRE_RIGHT)).toEqual([
                ["", "", ""],
                ["", "X", "O"],
                ["", "", ""],
            ]);
        });

        it("should throw an error if given location is already filled", () => {
            const game: TicTacToe = new TicTacToe();

            game.move(Location.CENTRE_MIDDLE);

            expect(() => game.move(Location.CENTRE_MIDDLE)).toThrowError(
                /That space is taken/
            );
        });
    });

    describe("When a player has won", () => {
        describe("when a player has won vertically", () => {
            describe("when O has won in the left column", () => {
                it("should show a message saying O has won", () => {
                    const game: TicTacToe = new TicTacToe();

                    game.move(Location.TOP_MIDDLE);
                    game.move(Location.CENTRE_LEFT);
                    game.move(Location.TOP_RIGHT);
                    game.move(Location.TOP_LEFT);
                    game.move(Location.CENTRE_RIGHT);

                    expect(game.move(Location.BOTTOM_LEFT)).toEqual(
                        "Congratulations! O has won"
                    );
                });
            });

            describe("when X has won in the middle column", () => {
                it("should show a message saying X has won", () => {
                    const game: TicTacToe = new TicTacToe();

                    game.move(Location.TOP_MIDDLE);
                    game.move(Location.CENTRE_LEFT);
                    game.move(Location.CENTRE_MIDDLE);
                    game.move(Location.BOTTOM_RIGHT);

                    expect(game.move(Location.BOTTOM_MIDDLE)).toEqual(
                        "Congratulations! X has won"
                    );
                });
            });

            describe("when O has won in the right column", () => {
                it("should show a message saying O has won", () => {
                    const game: TicTacToe = new TicTacToe();

                    game.move(Location.TOP_LEFT);
                    game.move(Location.CENTRE_RIGHT);
                    game.move(Location.TOP_MIDDLE);
                    game.move(Location.TOP_RIGHT);
                    game.move(Location.CENTRE_LEFT);

                    expect(game.move(Location.BOTTOM_RIGHT)).toEqual(
                        "Congratulations! O has won"
                    );
                });
            });
        });

        describe("when a player has won horizontally", () => {
            describe("when X has won in the top row", () => {
                it("should show a message saying X has won", () => {
                    const game: TicTacToe = new TicTacToe();

                    game.move(Location.TOP_LEFT);
                    game.move(Location.CENTRE_LEFT);
                    game.move(Location.TOP_MIDDLE);
                    game.move(Location.BOTTOM_RIGHT);

                    expect(game.move(Location.TOP_RIGHT)).toEqual(
                        "Congratulations! X has won"
                    );
                });
            });

            describe("when X has won in the centre row", () => {
                it("should show a message saying X has won", () => {
                    const game: TicTacToe = new TicTacToe();

                    game.move(Location.CENTRE_LEFT);
                    game.move(Location.TOP_LEFT);
                    game.move(Location.CENTRE_MIDDLE);
                    game.move(Location.TOP_MIDDLE);

                    expect(game.move(Location.CENTRE_RIGHT)).toEqual(
                        "Congratulations! X has won"
                    );
                });
            });

            describe("when O has won in the bottom row", () => {
                it("should show a message saying O has won", () => {
                    const game: TicTacToe = new TicTacToe();

                    game.move(Location.TOP_LEFT);
                    game.move(Location.BOTTOM_LEFT);
                    game.move(Location.CENTRE_MIDDLE);
                    game.move(Location.BOTTOM_MIDDLE);
                    game.move(Location.TOP_RIGHT);

                    expect(game.move(Location.BOTTOM_RIGHT)).toEqual("Congratulations! O has won");
                });
            });
        });

        describe("when a player has won diagonally", () => {
            describe("when O has won in the left-to-right downward diagonal", () => {
                it("should show a message saying O has won", () => {
                    const game: TicTacToe = new TicTacToe();

                    game.move(Location.TOP_MIDDLE);
                    game.move(Location.CENTRE_MIDDLE);
                    game.move(Location.CENTRE_RIGHT);
                    game.move(Location.TOP_LEFT);
                    game.move(Location.TOP_RIGHT);

                    expect(game.move(Location.BOTTOM_RIGHT)).toEqual(
                        "Congratulations! O has won"
                    );
                });
            });

            describe("when X has won in the left-to-right upward diagonal", () => {
                it("should show a message saying X has won", () => {
                    const game: TicTacToe = new TicTacToe();

                    game.move(Location.BOTTOM_LEFT);
                    game.move(Location.TOP_LEFT);
                    game.move(Location.CENTRE_MIDDLE);
                    game.move(Location.CENTRE_LEFT);

                    expect(game.move(Location.TOP_RIGHT)).toEqual(
                        "Congratulations! X has won"
                    );
                });
            });
        })
    });
    
    describe("When all the squares have been filled", () => {
        it("should show a message saying the game is a draw", () => {
            const game: TicTacToe = new TicTacToe();

            game.move(Location.CENTRE_MIDDLE);
            game.move(Location.TOP_LEFT);
            game.move(Location.CENTRE_LEFT);
            game.move(Location.CENTRE_RIGHT);
            game.move(Location.BOTTOM_LEFT);
            game.move(Location.TOP_RIGHT);
            game.move(Location.TOP_MIDDLE);
            game.move(Location.BOTTOM_MIDDLE);

            expect(game.move(Location.BOTTOM_RIGHT)).toEqual("The game is a draw")
        })
    })
});
