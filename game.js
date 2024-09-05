const Board = require('./board');
const Player = require('./player');
const { BLACK, WHITE } = require('./colour');
const Move = require('./move');
const Capture = require('./capture');
const visualizeBoard = require('./visualizeBoard');


class Game {
    constructor() {
        this.board = new Board();
    }
    setUpGame() {
        this.board.createBoard();
        return this.board.getBoard();
    }
}

const startGame = new Game();
let board = startGame.setUpGame();

const capture = new Capture();


const player1 = new Player('Shubham', BLACK).getPlayerDetails();
const player2 = new Player('Pallavi', WHITE).getPlayerDetails();

new Move(board, 1, 0, 3, 0, capture).makeMove();
new Move(board, 6, 1, 4, 1, capture).makeMove();
new Move(board, 3, 0, 4, 1, capture).makeMove();
console.log(visualizeBoard(board));
console.log(capture.displayCapturedPieces(WHITE));
