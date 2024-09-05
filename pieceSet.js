
const King = require('./pieces/king');
const Knight = require('./pieces/knight');
const Pawn = require('./pieces/pawn');
const Queen = require('./pieces/queen');
const Bishop = require('./pieces/bishop');
const Rook = require('./pieces/rook');

const { BLACK, WHITE } = require('./colour');

class PieceSet {
    constructor(color) {
        this.color = color;
        this.pieces = this.initializePieces();
    }
    initializePieces() {
        let pieces = [];

        if (this.color.toLowerCase() === BLACK) {

            for (let i = 0; i < 8; i++) {
                pieces.push(new Pawn(BLACK, 1, i));
            }

            pieces.push(new Rook(BLACK, 0, 0));
            pieces.push(new Knight(BLACK, 0, 1));
            pieces.push(new Bishop(BLACK, 0, 2));
            pieces.push(new Queen(BLACK, 0, 3));
            pieces.push(new King(BLACK, 0, 4));
            pieces.push(new Bishop(BLACK, 0, 5));
            pieces.push(new Knight(BLACK, 0, 6));
            pieces.push(new Rook(BLACK, 0, 7));

        }
        else if (this.color.toLowerCase() === WHITE) {
            for (let i = 0; i < 8; i++) {
                pieces.push(new Pawn(WHITE, 6, i));
            }
            pieces.push(new Rook(WHITE, 7, 0));
            pieces.push(new Knight(WHITE, 7, 1));
            pieces.push(new Bishop(WHITE, 7, 2));
            pieces.push(new Queen(WHITE, 7, 3));
            pieces.push(new King(WHITE, 7, 4));
            pieces.push(new Bishop(WHITE, 7, 5));
            pieces.push(new Knight(WHITE, 7, 6));
            pieces.push(new Rook(WHITE, 7, 7));
        }
        return pieces;
    }
    getPieces() {
        return this.pieces;
    }
};
module.exports = PieceSet;

