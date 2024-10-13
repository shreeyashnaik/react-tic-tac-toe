import { useState } from 'react';

export default function Board() {
    
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);

    function handleSquareClick(idx) {
        console.log('handleSquareClick: clicked');

        let currentSquares = history[currentMove];

        // If a value is already set, return 
        // so that the existing value is not overwritten
        if (currentSquares[idx] || calculateWinner(currentSquares)) {
            return;
        }

        let newSquares = currentSquares.slice();
        if (currentMove%2 === 0) {
            newSquares[idx] = 'X';
        } else {
            newSquares[idx] = 'O';
        }
        
        setHistory([...history.slice(0, currentMove+1), newSquares]);
        setCurrentMove(currentMove + 1);
    }
    
    // Calculate the winner after current step
    // Since board component will re-render, execution will come here
    const winner = calculateWinner(history[currentMove]);
    let status;
    if (winner) {
        console.log('history', history);
        status = 'Winner: ' + winner;
    } else {
        status = 'Next Player: ' + ((currentMove%2 === 0) ? 'X': 'O');
    }

    function jumpTo(move) {
        setCurrentMove(move);
    }

    const moves = history.map((_, move) => {
        let desc;
        if (move > 0) {
            desc = "Go to move #" + move;
        } else {
            desc = "Go to game start";
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        )
    });


    return <>
    <div className="game">
      <div className="game-board">
        <div className="status">{status}</div>
        
        <div className="board-row">
            <Square value={history[currentMove][0]} onSquareClick={() => handleSquareClick(0)}/>
            <Square value={history[currentMove][1]} onSquareClick={() => handleSquareClick(1)}/>
            <Square value={history[currentMove][2]} onSquareClick={() => handleSquareClick(2)}/>
        </div>
        <div className="board-row">
            <Square value={history[currentMove][3]} onSquareClick={() => handleSquareClick(3)}/>
            <Square value={history[currentMove][4]} onSquareClick={() => handleSquareClick(4)}/>
            <Square value={history[currentMove][5]} onSquareClick={() => handleSquareClick(5)}/>
        </div>
        <div className="board-row">
            <Square value={history[currentMove][6]} onSquareClick={() => handleSquareClick(6)}/>
            <Square value={history[currentMove][7]} onSquareClick={() => handleSquareClick(7)}/>
            <Square value={history[currentMove][8]} onSquareClick={() => handleSquareClick(8)}/>
        </div>
      </div>

      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
    </>
}

function Square({value, onSquareClick}) {

    // const [val, setVal] = useState(null);

    // function handleClick() {
    //     console.log('handleClick: clicked');
    //     setVal('X');
    // }
    // console.log('Square: value', value);
    return (
        <button
          className="square"
          onClick={onSquareClick}
        >
          {value}
        </button>
    );
}

function calculateWinner(squares) {
    
    const lines = [
        [0, 1, 2], // horizontal
        [3, 4, 5], // horizontal
        [6, 7, 8], // horizontal
        [0, 3, 6], // vertical
        [1, 4, 7], // vertical
        [2, 5, 8], // vertical
        [0, 4, 8], // diagonal
        [2, 4, 6], // diagonal
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        // console.log('calculateWinner: a, b, c', a, b, c);
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    
    return null;
}