function visualizeBoard(board) {
    const pieceSymbols = {
        pawn: 'P',
        knight: 'Kn',
        bishop: 'B',
        rook: 'R',
        queen: 'Q',
        king: 'K'
    };

    const topBottomBoundary = '.' + '...'.repeat(8) + '.';
    const boardWithBoundary = board.map(row =>
        '.' + row.map(cell => {
            if (cell === null) return ' . ';
            const symbol = pieceSymbols[cell.type];
            const color = cell.colour === 'white' ? 'W' : 'B';
            return ` ${symbol}${color} `;
        }).join('') + '.'
    ).join('\n');

    return topBottomBoundary + '\n' + boardWithBoundary + '\n' + topBottomBoundary;
}

module.exports = visualizeBoard;
