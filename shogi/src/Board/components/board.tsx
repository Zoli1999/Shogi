import React from "react";
import "../css/board.css";

const map = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

const Board = () => {
  let board = [];

  for (let i = 0; i < map.length; i ++) {
    for (let j = 0; j < map[i].length; j++) {
      board.push(<div className="tile"></div>)
    }
  }

  return (
    <div id="board">{board}</div>
  );
}

export default Board;
