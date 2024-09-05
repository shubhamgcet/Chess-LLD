const BasePiece = require('../basePiece');
const { QUEEN } = require('../pieceName');

class Queen extends BasePiece {
    constructor(colour, x, y) {
        super(QUEEN, colour, x, y);
    }
    getPieceDetails() {
        return {
            name: this.type,
            moves: "any number of squares any direction",
            value: 9,
            backMoves: true,
            color: this.colour,
            position: this.getPosition(),
        };
    }
}

module.exports = Queen;
