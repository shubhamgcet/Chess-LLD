const BasePiece = require('../basePiece');
const { BISHOP } = require('../pieceName');

class Bishop extends BasePiece {
    constructor(colour, x, y) {
        super(BISHOP, colour, x, y);
    }
    getPieceDetails() {
        return {
            name: this.type,
            moves: "diagonally",
            value: 3,
            backMoves: true,
            color: this.colour,
            position: this.getPosition(),
        };
    }
}

module.exports = Bishop;
