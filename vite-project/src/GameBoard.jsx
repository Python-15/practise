import React, { useState, useEffect } from "react";

function GameBoard() {
  const [gameBorad, setGameBoard] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);
  const [winner ,setWinner] =useState('')

  const winerPlace = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];
  const handelchance = (index) => {
    if (gameBorad[index]) {
      return;
    }
    setGameBoard((prev) => {
      const newvalue = [...prev];
      newvalue[index] = isXturn ? "X" : "O";
      return newvalue;
    });

    setIsXturn((pre) => !pre);
  };
    useEffect(()=>{
     for(let i =0;i<winerPlace.length;i++){

        const [a,b,c]=winerPlace[i]
        if(gameBorad[a]&&gameBorad[a]==gameBorad[b]&&gameBorad[a]==gameBorad[c]){

            setWinner(gameBorad[a]);
        }
     }

    },[gameBorad])
    console.log(winner)
  return (
    <div className="game-board">
      GameBoard
      <div className="game-row">
        {gameBorad.map((d, idx) => (
          <div className="game-col" key={idx} onClick={() => handelchance(idx)}>
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
