import { useState } from "react";

export default function Square({moves, allMoves, position, winner, movesOrder, winningLine}) {
    const [square, setSquare] = useState('');
    
    function handleClick() {
        if (square === '' && !winner) {
            const numMoves = moves.reduce((accum, square) => square === null ? accum + 1 : accum, 0)
            const squareSymbol = numMoves % 2 === 0 ? 'O' : 'X'
            allMoves(position, squareSymbol)
            setSquare(squareSymbol)
        }
    }

    if (square !== '') {
        let allKeys = [];
        for (let i = 1; i <= Object.keys(movesOrder).length; i++) {
            allKeys.push(Object.keys(movesOrder[i]))
        }
        allKeys = allKeys.flat();
        if (!allKeys.includes(position.toString())) {
            setSquare('')
        }
    }

    return <button style={{background: winningLine.includes(position) ? "green" : "white"}} className="square" onClick={handleClick}>{square}</button>;
}