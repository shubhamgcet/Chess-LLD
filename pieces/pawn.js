// king.js

const BasePiece = require('../basePiece');
const { PAWN } = require('../pieceName');

class Pawn extends BasePiece {
    constructor(colour, x, y) {
        super(PAWN, colour, x, y);
    }
    getPieceDetails() {
        return {
            name: this.type,
            moves: "forward 1 square (2 on first move)",
            value: 1,
            backMoves: true,
            color: this.colour,
            position: this.getPosition(),
        };
    }
}

module.exports = Pawn;
