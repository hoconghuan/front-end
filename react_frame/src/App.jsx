import { useState } from 'react';
import './App.css';

function Square({ value, onSquareClick }) {

  return <button className='square'
    onClick={onSquareClick}
  >{value}</button>
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function Board({ xIsNext, squares, onPlay }) {

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    onPlay(nextSquares)

  }
  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = `Winner:${winner}`
  } else {
    status = `Next player:${(xIsNext ? "X" : "O")}`
  }
  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => { handleClick(0) }}></Square>
        <Square value={squares[1]} onSquareClick={() => { handleClick(1) }}></Square>
        <Square value={squares[2]} onSquareClick={() => { handleClick(2) }}></Square>
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => { handleClick(3) }}></Square>
        <Square value={squares[4]} onSquareClick={() => { handleClick(4) }}></Square>
        <Square value={squares[5]} onSquareClick={() => { handleClick(5) }}>s</Square>
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => { handleClick(6) }}></Square>
        <Square value={squares[7]} onSquareClick={() => { handleClick(7) }}></Square>
        <Square value={squares[8]} onSquareClick={() => { handleClick(8) }}></Square>
      </div>
    </>
  )

}
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setcurrentMove] = useState(0)
  const currentSquares = history[history.length - 1]

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares])
    setXIsNext(!xIsNext)

  }

  function JunpTo(nextMove) {
    setcurrentMove(nextMove)
    setXIsNext(nextMove % 2 === 0)
  }
  const moves = history.map((squares, move) => {
    let description
    if (move > 0) {
      description = `go to #${move}`
    } else {
      description = `go to start game!`
    }
    return (
      <li key={move}>
        <button onClick={() => { JunpTo(moves) }}>
          {description}
        </button>
      </li>
    )
  })
  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          ></Board>
        </div>
        <div className='game-info'>
          <ol>
            {moves}
          </ol>
        </div>
      </div>
    </>
  )
}