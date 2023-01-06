import { Brush } from "./Brush";

export default class Eraser extends Brush {

  mouseMoveHandler(e: any) {
    if (this.mouseDown) {
      this.socket.send(
        JSON.stringify({
          method: "draw",
          id: this.id,
          figure: {
            type: 'eraser',
            x: e.pageX - e.target.offsetLeft,
            y: e.pageY - e.target.offsetTop,
            color: "white",
            lineWidth: this.ctx.lineWidth,
          },
        })
      );
    }
  }

  static draw(ctx: any, x: number, y: number) {
    ctx.strokeStyle = "white";
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
