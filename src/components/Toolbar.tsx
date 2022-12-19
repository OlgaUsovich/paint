import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import "../styles/toolbar.scss";
import { Brush } from "../tools/Brush";
import { Circle } from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";
import { Rect } from "../tools/Rect";

export const ToolBar = () => {
  const changeColor = (e: any) => {
    toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value);
  };

  return (
    <div className="toolbar">
      <button
        className="toolbar__btn brush"
        onClick={() => {
          toolState.setTool(new Brush(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn rect"
        onClick={() => {
          toolState.setTool(new Rect(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn circle"
        onClick={() => {
          toolState.setTool(new Circle(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn eraser"
        onClick={() => {
          toolState.setTool(new Eraser(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn line"
        onClick={() => {
          toolState.setTool(new Line(canvasState.canvas));
        }}
      ></button>
      <input
        type="color"
        className="toolbar__palette"
        onChange={(e) => changeColor(e)}
      />

      <button className="toolbar__btn undo" onClick={() => canvasState.undo()}></button>
      <button className="toolbar__btn redo" onClick={() => canvasState.redo()}></button>
      <button className="toolbar__btn save"></button>
    </div>
  );
};
