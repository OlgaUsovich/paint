import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import "../styles/canvas.scss";
import { Brush } from "../tools/Brush";

export const Canvas = observer(() => {
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>;

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  const mouseDownHandler = () => {
    canvasState.pushToUndo(canvasRef.current.toDataURL())
  }

  return (
    <div className="canvas">
      <canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} width={800} height={500} />
    </div>
  );
});
