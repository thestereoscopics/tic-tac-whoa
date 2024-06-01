import React, { useState } from 'react'
import Board from './Board'
import Moves from './Moves'
import './App.css'

function App() {
  const [winner, setWinner] = useState(false)
  const [moves, setMoves] = useState(Array(9).fill(null))
  const [movesOrder, setMovesOrder] = useState({})
  const [moveNumber, setMoveNumber] = useState(0)
  const [winningLine, setWinningLine] = useState([])

  function winningState(hasWon) {
    setWinner(prevWinner => hasWon)
  }

  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner(updatedMoves) {
    winningLines.map(function(line) {
        if (updatedMoves[line[0]] && 
            updatedMoves[line[0]] === updatedMoves[line[1]] && 
            updatedMoves[line[0]] === updatedMoves[line[2]]) {
            winningState(true);
            setWinningLine(line);
        }
    })
}

  function updateMoveNumber(move) {
    setMoveNumber(prevMoveNumber => move)
    winningState(false);
    setWinningLine([]);
    let updatedMoves = [...moves]
    let movesOrderClone = structuredClone(movesOrder);
    for (const key in movesOrderClone) {
      if (+key > move) {
        for (const subKey in movesOrderClone[key]) {
          updatedMoves[subKey] = null
        }
        delete movesOrderClone[key]
      }
    }
    setMoves(prevMoves => [...updatedMoves])
    setMovesOrder({
      ...movesOrderClone,
    })
    checkWinner(updatedMoves)
  }

  function allMoves(position, squareSymbol) {
    let updatedMoves = [...moves]
    updatedMoves[position] = squareSymbol
    setMoves(prevMoves => [...updatedMoves])
    setMovesOrder({
        ...movesOrder,
        [Object.keys(movesOrder).length + 1] : { [position]: squareSymbol}
    })
    checkWinner(updatedMoves)
  }

  return (
      <section>
        <h1>Tic Tac Whoa!</h1>
        {winner && <h2>Winner Winner Chicken Dinner!</h2>}
        <Board winningLine={winningLine} moves={moves} allMoves={allMoves} updateMoveNumber={updateMoveNumber} moveNumber={moveNumber} movesOrder={movesOrder} setMovesOrder={setMovesOrder} winner={winner} winningState={winningState}/>
        <Moves updateMoveNumber={updateMoveNumber} movesOrder={movesOrder}/>
      </section>
  )
}

export default App
