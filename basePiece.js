class BasePiece {
    constructor(type, colour, x, y) {
        this.type = type;
        this.colour = colour;
        this.position = { x, y };
    }

    getPosition() {
        return this.position;
    }
    moveTo(x, y) {
        this.position = { x, y };
    }
}

module.exports = BasePiece;
