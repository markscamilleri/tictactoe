import {TicTacToe} from "../main/ticTacToe";
import {Location} from "../main/types";

describe('tictactoe', () => {
    describe("When it's X's turn to move", () => {
        it('should return an array representing the board with the new X in 1, 1 place', () => {
            let game: TicTacToe = new TicTacToe();

            expect(game.move(Location.CENTRE_MIDDLE)).toEqual([['', '', ''], ['', 'X', ''], ['', '', '']])
        });

        it('should return an array representing the board with the new X in 0, 2 place', () => {
            let game: TicTacToe = new TicTacToe();

            expect(game.move(Location.BOTTOM_LEFT)).toEqual([['', '', ''], ['', '', ''], ['X', '', '']])
        });

        it('should return an array representing the board when three moves are played', () => {
            let game: TicTacToe = new TicTacToe();

            game.move(Location.BOTTOM_LEFT)
            game.move(Location.CENTRE_MIDDLE)

            expect(game.move(Location.TOP_LEFT)).toEqual([['X', '', ''], ['', 'O', ''], ['X', '', '']])
        });
    });

    describe("When it's O's turn to move", () => {
        it('should return an array representing the board with the new O in 0, 0 place', () => {
            let game: TicTacToe = new TicTacToe();

            game.move(Location.CENTRE_MIDDLE)

            expect(game.move(Location.TOP_LEFT)).toEqual([['O', '', ''], ['', 'X', ''], ['', '', '']])
        });

        it('should return an array representing the board with the new O in 1, 2 place', () => {
            let game: TicTacToe = new TicTacToe();

            game.move(Location.CENTRE_MIDDLE)

            expect(game.move(Location.CENTRE_RIGHT)).toEqual([['', '', ''], ['', 'X', 'O'], ['', '', '']])
        });

        it('should throw an error if given location is already filled', () => {
            let game: TicTacToe = new TicTacToe();

            game.move(Location.CENTRE_MIDDLE)

            expect(() => game.move(Location.CENTRE_MIDDLE)).toThrowError(/That space is taken/)
        });
    });

    describe("When a player has won", () => {
      it("returns end game message", () => {
          let game: TicTacToe = new TicTacToe();

          game.move(Location.TOP_MIDDLE)
          game.move(Location.CENTRE_LEFT)
          game.move(Location.CENTRE_MIDDLE)
          game.move(Location.BOTTOM_RIGHT)

          expect(game.move(Location.BOTTOM_MIDDLE)).toEqual("Congratulations! X has won")
      })
    })
});