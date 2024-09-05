const { KING, PAWN, KNIGHT, BISHOP, QUEEN, ROOK } = require('./pieceName');
const { BLACK, WHITE } = require('./colour');

class Move {
    constructor(board, currentRow, currentCol, targetRow, targetCol, capture) {
        this.board = board;
        this.currentRow = currentRow;
        this.currentCol = currentCol;
        this.targetRow = targetRow;
        this.targetCol = targetCol;
        this.capture = capture;
        this.piece = null;
    }

    isValidMove() {
        this.piece = this.board[this.currentRow][this.currentCol];
        if (!this.piece) {
            console.log("No piece on this position!");
            return false;
        }

        const type = this.piece.type;
        const colour = this.piece.colour;
        switch (type) {
            case PAWN:
                return this.validatePawnMove(colour);
            case KNIGHT:
                return this.validateKnightMove();
            case KING:
                return this.validateKingMove();
            case QUEEN:
                return this.validateQueenMove();
            case ROOK:
                return this.validateRookMove();
            case BISHOP:
                return this.validateBishopMove();
            default:
                return false;
        }
    }

    checkMoveValidity(newRow, newCol) {
        return newRow >= 0 &&
            newRow < 8 &&
            newCol >= 0 &&
            newCol < 8 &&
            this.targetRow >= 0 &&
            this.targetRow < 8 &&
            this.targetCol >= 0 &&
            this.targetCol < 8;
    }

    validatePawnMove(colour) {
        let validMoves = [];
        let direction = colour === BLACK ? 1 : -1;
        let startRow = colour === BLACK ? 1 : 6;

        let oneStepForwardRow = this.currentRow + direction;
        let twoStepsForwardRow = this.currentRow + 2 * direction;

        if (this.checkMoveValidity(oneStepForwardRow, this.currentCol) && !this.board[oneStepForwardRow][this.currentCol]) {
            validMoves.push({ row: oneStepForwardRow, col: this.currentCol });

            if (this.currentRow === startRow && !this.board[twoStepsForwardRow][this.currentCol]) {
                validMoves.push({ row: twoStepsForwardRow, col: this.currentCol });
            }
        }

        const captureCols = [this.currentCol - 1, this.currentCol + 1];
        for (let col of captureCols) {
            if (this.checkMoveValidity(oneStepForwardRow, col)) {
                const targetPiece = this.board[oneStepForwardRow][col];
                if (targetPiece && targetPiece.colour !== colour) {
                    validMoves.push({ row: oneStepForwardRow, col: col });
                }
            }
        }

        return validMoves.some(move => move.row === this.targetRow && move.col === this.targetCol);
    }

    validateKnightMove(colour) {
        const knightMoves = [
            { rowOffset: 2, colOffset: 1 },
            { rowOffset: 2, colOffset: -1 },
            { rowOffset: -2, colOffset: 1 },
            { rowOffset: -2, colOffset: -1 },
            { rowOffset: 1, colOffset: 2 },
            { rowOffset: 1, colOffset: -2 },
            { rowOffset: -1, colOffset: 2 },
            { rowOffset: -1, colOffset: -2 }
        ];

        for (const move of knightMoves) {
            const newRow = this.currentRow + move.rowOffset;
            const newCol = this.currentCol + move.colOffset;

            if (this.checkMoveValidity(newRow, newCol)) {
                const targetSquare = this.board[newRow][newCol];
                if (targetSquare === null || targetSquare.colour !== colour) {
                    if (newRow === this.targetRow && newCol === this.targetCol) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    validateKingMove(colour) {
        const kingMoves = [
            { rowOffset: -1, colOffset: 0 },  // Up
            { rowOffset: 1, colOffset: 0 },   // Down
            { rowOffset: 0, colOffset: -1 },  // Left
            { rowOffset: 0, colOffset: 1 },   // Right
            { rowOffset: -1, colOffset: -1 }, // Up-Left
            { rowOffset: -1, colOffset: 1 },  // Up-Right
            { rowOffset: 1, colOffset: -1 },  // Down-Left
            { rowOffset: 1, colOffset: 1 }    // Down-Right
        ];

        for (const move of kingMoves) {
            const newRow = this.currentRow + move.rowOffset;
            const newCol = this.currentCol + move.colOffset;

            if (this.checkMoveValidity(newRow, newCol)) {
                const targetSquare = this.board[newRow][newCol];
                if (targetSquare === null || targetSquare.colour !== colour) {
                    if (newRow === this.targetRow && newCol === this.targetCol) {
                        return true;
                    }
                }
            }
        }

        return false;
    }


    validateQueenMove(colour) {
        return this.validateRookMove(colour) || this.validateBishopMove(colour);
    }


    validateRookMove(colour) {

        if (this.checkMoveValidity(this.targetRow, this.targetCol)) {
            let validAreas = [];

            for (let i = this.currentCol + 1; i < 8; i++) {
                if (this.board[this.currentRow][i] !== null) {
                    if (this.board[this.currentRow][i].colour !== colour) {
                        validAreas.push({ row: this.currentRow, col: i });
                    }
                    break;
                }
                validAreas.push({ row: this.currentRow, col: i });
            }

            for (let i = this.currentCol - 1; i >= 0; i--) {
                if (this.board[this.currentRow][i] !== null) {
                    if (this.board[this.currentRow][i].colour !== colour) {
                        validAreas.push({ row: this.currentRow, col: i });
                    }
                    break;
                }
                validAreas.push({ row: this.currentRow, col: i });
            }


            for (let i = this.currentRow + 1; i < 8; i++) {
                if (this.board[i][this.currentCol] !== null) {
                    if (this.board[i][this.currentCol].colour !== colour) {
                        validAreas.push({ row: i, col: this.currentCol });
                    }
                    break;
                }
                validAreas.push({ row: i, col: this.currentCol });
            }

            for (let i = this.currentRow - 1; i >= 0; i--) {
                if (this.board[i][this.currentCol] !== null) {
                    if (this.board[i][this.currentCol].colour !== colour) {
                        validAreas.push({ row: i, col: this.currentCol });
                    }
                    break;
                }
                validAreas.push({ row: i, col: this.currentCol });
            }

            return validAreas.some(area => area.row === this.targetRow && area.col === this.targetCol);
        }
        return false;
    }

    validateBishopMove(colour) {
        let validMoves = [];

        if (!this.checkMoveValidity(this.targetRow, this.targetCol)) {
            return false;
        }

        const directions = [
            { rowOffset: 1, colOffset: 1 },  // Bottom-right
            { rowOffset: 1, colOffset: -1 }, // Bottom-left
            { rowOffset: -1, colOffset: 1 }, // Top-right
            { rowOffset: -1, colOffset: -1 } // Top-left
        ];

        for (const direction of directions) {
            let i = this.currentRow + direction.rowOffset;
            let j = this.currentCol + direction.colOffset;

            while (i >= 0 && i < 8 && j >= 0 && j < 8) {
                if (this.board[i][j] === null) {
                    validMoves.push({ row: i, col: j });
                } else {
                    if (this.board[i][j].colour !== colour) {
                        validMoves.push({ row: i, col: j });
                    }
                    break;
                }

                i += direction.rowOffset;
                j += direction.colOffset;
            }
        }
        return validMoves.some(area => area.row === this.targetRow && area.col === this.targetCol);
    }


    makeMove() {
        if (this.isValidMove()) {
            let targetPiece = this.board[this.targetRow][this.targetCol];
            if (targetPiece) {
                this.capture.addCapturedPiece(targetPiece);
            }
            // Move the piece
            this.board[this.targetRow][this.targetCol] = this.piece;
            this.board[this.currentRow][this.currentCol] = null;
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Move;
