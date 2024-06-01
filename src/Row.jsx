import Square from "./Square"

export default function Row({moves, allMoves, row, winner, movesOrder, winningLine}) {
    return (
        <div className="board-row">
            <Square moves={moves} key={row+0} position={row+0}  winningLine={winningLine} winner={winner} movesOrder={movesOrder} allMoves={allMoves} />
            <Square moves={moves} key={row+1} position={row+1}  winningLine={winningLine} winner={winner} movesOrder={movesOrder} allMoves={allMoves} />
            <Square moves={moves} key={row+2} position={row+2}  winningLine={winningLine} winner={winner} movesOrder={movesOrder} allMoves={allMoves} />
        </div>
    )
}