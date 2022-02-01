import React from "react";
import "../css/board.css";

const Canvas = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = React.useState<CanvasRenderingContext2D | null>(null);

  React.useEffect(() => {
    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext('2d');
      if (renderCtx) {
        setCtx(renderCtx);
      }
    }
    if (ctx) {
      ctx.beginPath();
      ctx.lineWidth = 3;

      //Top to Bottom
      ctx.moveTo(100, 0);
      ctx.lineTo(100, 900);

      ctx.moveTo(200, 0);
      ctx.lineTo(200, 900);

      ctx.moveTo(300, 0);
      ctx.lineTo(300, 900)

      ctx.moveTo(400, 0);
      ctx.lineTo(400, 900)

      ctx.moveTo(500, 0);
      ctx.lineTo(500, 900)

      ctx.moveTo(600, 0);
      ctx.lineTo(600, 900)

      ctx.moveTo(700, 0);
      ctx.lineTo(700, 900)

      ctx.moveTo(800, 0);
      ctx.lineTo(800, 900)

      //Side to Side
      ctx.moveTo(0, 100);
      ctx.lineTo(900, 100)

      ctx.moveTo(0, 200);
      ctx.lineTo(900, 200)

      ctx.moveTo(0, 300);
      ctx.lineTo(900, 300)

      ctx.moveTo(0, 400);
      ctx.lineTo(900, 400)

      ctx.moveTo(0, 500);
      ctx.lineTo(900, 500)

      ctx.moveTo(0, 600);
      ctx.lineTo(900, 600)

      ctx.moveTo(0, 700);
      ctx.lineTo(900, 700)

      ctx.moveTo(0, 800);
      ctx.lineTo(900, 800)

      ctx.stroke();
    }

  }, [ctx]);

  return (
    <div className="canvas-container">
      <canvas className="canvas-board" width={900} height={900} ref={canvasRef}></canvas>
    </div>
  );
}

export default Canvas;
