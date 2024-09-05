class Piece {
    constructor(type, colour, row, col) {
        this.type = type;
        this.colour = colour;
        this.position = { row, col };
    }
    getPieceDetails() {
        return {
            type: this.type,
            colour: this.colour,
            position: this.position
        }
    }
}
module.exports = Piece;
