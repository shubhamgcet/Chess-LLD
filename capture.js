const { BLACK, WHITE } = require('./colour');

class Capture {
    constructor() {
        this.capturedPieces = {
            [BLACK]: [],
            [WHITE]: []
        };
    }

    addCapturedPiece(piece) {
        this.capturedPieces[piece.colour].push(piece);
    }

    getCapturedPieces(colour) {
        return this.capturedPieces[colour];
    }
    checkIfPieceExist(colour) {
        return this.capturedPieces[colour].length;
    }

    displayCapturedPieces(colour) {
        if (this.checkIfPieceExist(colour)) {
            console.log(`Captured ${colour === BLACK ? 'White' : 'Black'} Piece:`);
            this.capturedPieces[colour].forEach(piece => {
                console.log(`${piece.colour} ${piece.type} at position (${piece.position.x}, ${piece.position.y})`);
            });
        } else {
            console.log("No Piece capture till now !!!");
        }

    }
}

module.exports = Capture;
