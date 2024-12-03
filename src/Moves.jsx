import { useState, useEffect } from "react"

export default function Moves({movesOrder, updateMoveNumber}) {
    const [movesList, setMovesList] = useState([]);

    function movesHTML(moveNumber) {
        let newMovesList = [];
        const howManyMoves = (moveNumber !== undefined ) ? moveNumber : Object.keys(movesOrder).length
        for (let i = 1; i < howManyMoves + 1; i++) {
            for (let j = 0; j < Object.keys(movesOrder[i]).length; j++) {
                let thisKey = Object.keys(movesOrder[i])[0]
                if (movesOrder[i][thisKey] !== null) {
                    newMovesList.push(<li movenum={i} key={`move-${i}`} onClick={handleClick}>Return to move {i} for {movesOrder[i][thisKey]}</li>)
                }
            }
        }
        setMovesList(prevMovesList => newMovesList)
    }

    function handleClick(e) {
        const moveNumber = +e.target.attributes.movenum.value;
        updateMoveNumber(moveNumber)
        movesHTML(moveNumber)
    }

    useEffect(() => {
        movesHTML()
     },[movesOrder])

    return (
        <ul className="moves-order">
            {movesList}
        </ul>
    )
}
