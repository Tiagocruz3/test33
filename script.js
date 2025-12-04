document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('.cell');
    const states = ['X', 'O'];
    let turn = 0;
    const board = [null, null, null, null, null, null, null, null, null];

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
        ];
        for (let combination of winningCombinations) {
            const [title, title2, title3] = combination;
            if (board[title] && board[title2] === board[title3]) {
                alert(${states[turn]} Wins!');
                resetBoard();
                return true;
            }
        }
        return false;
    }

    function resetBoard() {
        board = [null, null, null, null, null, null, null, null, null];
        turn = 0;
        for (let cell of cells) {
            cell.innerHTML = '';
            cell.classList.remove('winner');
        }
    }

    function handleClick(event) {
        const target = event.target;
        const index = Number(target.getAttribute('data-index'));
        if (board[index] || checkWinner()) {
            return;
        }
        board[index] = states[turn];
        target.innerHTML = states[turn];
        target.classList.add('winner');
        turn = (turn + 1) % 2;
    }

    for (let cell of cells) {
        cell.addEventListener('click', handleClick);
    }
    document.getElementById('resetBtn').addEventListener('click', setBoard);
});