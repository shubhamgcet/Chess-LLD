const BasePiece = require('../basePiece');
const { KNIGHT } = require('../pieceName');


class Knight extends BasePiece {
    constructor(color, x, y) {
        super(KNIGHT, color, x, y);
    }
    getPieceDetails() {
        return {
            name: this.type,
            moves: "L-shape (2.5 squares)",
            value: 3,
            backMoves: true,
            color: this.colour,
            position: this.getPosition(),
        };
    }
}
module.exports = Knight;
