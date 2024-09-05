const BLACK = "black";
const WHITE = "white";

class Colour {
    constructor(colour) {
        this.colour = colour
    }
    getColor() {
        switch (this.colour) {
            case BLACK:
                return { color: BLACK };
            case WHITE:
                return { colour: WHITE };
            default:
                return { colour: null };
        }
    }
}

module.exports = { BLACK, WHITE, Colour };