const PieceSet = require('./pieceSet');
const { BLACK, WHITE } = require('./colour')
class Board {
    constructor() {
        this.board = Array.from({ length: 8 }, () => Array(8).fill(null));
        this.createBoard();
    }
    createBoard() {
        const whiteSet = new PieceSet(WHITE).getPieces();
        const blackSet = new PieceSet(BLACK).getPieces();
        blackSet.forEach(piece => {
            this.board[piece.position.x][piece.position.y] = piece;
        });

        whiteSet.forEach(piece => {
            this.board[piece.position.x][piece.position.y] = piece;
        });

    }
    getBoard() {
        return this.board;
    }
};
module.exports = Board;
