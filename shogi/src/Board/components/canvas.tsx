import React from "react";
import "../css/board.css";

const Canvas = () => {
  return (
    <div className="canvas-container">
      <canvas className="canvas-board" width="900" height="900"></canvas>
    </div>
  );
}

export default Canvas;
