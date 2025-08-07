/**
 * @param {character[][]} board
 * @return {boolean}
 */
const checkRow = (board) => {
    for (let i = 0; i < board.length; i++) {
        const map = new Map()
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== ".") {
                if (map.has(board[i][j])) return false;
                map.set(board[i][j], 1)
            }
        }
    }
    return true;
}

const checkColumn = (board) => {
    for (let i = 0; i < board.length; i++) {
        const map = new Map()
        for (let j = 0; j < board[i].length; j++) {
            if (board[j][i] !== ".") {
                if (map.has(board[j][i])) return false;
                map.set(board[j][i], 1)
            }
        }
    }
    return true;
}

const checkGrid = (board, row, col) => {
    const map = new Map()
    for (let i = row; i < row + 3; i++) {
        for (let j = col; j < col + 3; j++) {
            if (board[i][j] !== ".") {
                if (map.has(board[i][j])) return false;
                map.set(board[i][j], 1)
            }
        }
    }
    return true;
}

const checkAllGrids = (board) => {
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            if (!checkGrid(board, i, j)) return false;
        }
    }
    return true;
}

var isValidSudoku = function (board) {
    return checkRow(board) && checkColumn(board) && checkAllGrids(board)
};