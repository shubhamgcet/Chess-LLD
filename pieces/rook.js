const BasePiece = require('../basePiece');
const { ROOK } = require('../pieceName');

class Rook extends BasePiece {
    constructor(colour, x, y) {
        super(ROOK, colour, x, y);
    }
    getPieceDetails() {
        return {
            name: this.type,
            moves: "horizontally or vertically",
            value: 5,
            backMoves: true,
            color: this.colour,
            position: this.getPosition(),
        };
    }
}

module.exports = Rook;
