import React, { useState } from "react";
import { selectPiece } from "../../movement/compoments/movement";
import { movePiece } from "../../movement/compoments/movement";
import { dropPiece } from "../../movement/compoments/movement";
import "../css/board.css";

const Board = () => {
  let board = [];
  let piece: boolean = false;

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      board.push(<div className="tile"></div>);
      if (i === 0) {
        piece = true;
      } else {
        piece = false;
      }
    }
  }

  return (
    <div onMouseUp={(e) => dropPiece(e)} onMouseMove={(e) => movePiece(e)} onMouseDown={e => selectPiece(e)} id="board">
      {board}
    </div>
  );
}

export default Board;
