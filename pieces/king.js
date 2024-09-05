// king.js

const BasePiece = require('../basePiece');
const { KING } = require('../pieceName');

class King extends BasePiece {
    constructor(colour, x, y) {
        super(KING, colour, x, y);
    }
    getPieceDetails() {
        return {
            name: this.type,
            moves: "one square any direction",
            value: 0,
            backMoves: true,
            color: this.colour,
            position: this.getPosition(),
        };
    }
}

module.exports = King;
