import { useState } from "react"
import Row from "./Row"

export default function Board(
    {winningState, winner, movesOrder, moves, allMoves, winningLine}
) {

    return (
        <div className="board-row">
            <Row row={0} key={0} moves={moves} winner={winner} movesOrder={movesOrder} winningLine={winningLine} allMoves={allMoves} />
            <Row row={3} key={3} moves={moves} winner={winner} movesOrder={movesOrder} winningLine={winningLine} allMoves={allMoves} />
            <Row row={6} key={6} moves={moves} winner={winner} movesOrder={movesOrder} winningLine={winningLine} allMoves={allMoves} />
        </div>
    )
}