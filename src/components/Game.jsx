import { useState } from 'react'
import Board from './Board'

export default function Game() {

    let [history, setHistory] = useState([{
        squares: Array(9).fill(null),
    }]);
    let [stepNumber, setStepNumber] = useState(0);
    let [xIsNext, setXIsNext] = useState(true);

    let currentBoard = history[stepNumber];
    let winner = calculateWinner(currentBoard.squares);

    function calculateWinner(squares)  {
        let lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            let [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }


 

    function handleClick(i) {
        let newHistory = history.slice(0, stepNumber + 1);
        let newSquares = [...currentBoard.squares];
        if (winner || newSquares[i]) {
            return;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';
        setHistory([...newHistory, { squares: newSquares }]);
        setStepNumber(newHistory.length);
        setXIsNext(!xIsNext);
    };

    function goToMove (step)  {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    };

    let moves = history.map((_, move) => {
        let message = move ?
            `Go to move #${move}` :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => goToMove(move)}>{message}</button>
            </li>
        );
    });

    let status = '';
    if (winner) {
        status = `Player ${winner} has won`;
    } else {
        status = `Player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (

        <div className="board">
              <div className='Player'>{status}</div>
            <Board  squares={currentBoard.squares} onClick={i => handleClick(i)} />
            <div className="game-status">
                <ol>{moves}</ol>
            </div>
        </div>
    );
};