import { makeAutoObservable } from "mobx";

class CanvasState {
  canvas: any = null;
  socket: WebSocket | null = null;
  sessionid: string | null | undefined = null;
  undoList: any[] = [];
  redoList: any[] = [];
  username: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setSessionId(id: string | null | undefined) {
    this.sessionid = id;
  }

  setSocket(socket: WebSocket) {
    this.socket = socket;
  }

  setUsername(username: string) {
    this.username = username;
  }

  setCanvas(canvas: any) {
    this.canvas = canvas;
  }

  pushToUndo(data: any) {
    this.undoList.push(data);
  }

  pushToRedo(data: any) {
    this.redoList.push(data);
  }

  undo() {
    let ctx = this.canvas.getContext("2d");
    if (this.undoList.length > 0) {
      let dataUrl = this.undoList.pop();
      this.redoList.push(this.canvas.toDataURL());
      let img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      };
    } else {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  redo() {
    let ctx = this.canvas.getContext("2d");
    if (this.redoList.length > 0) {
      let dataUrl = this.redoList.pop();
      this.undoList.push(this.canvas.toDataURL());
      let img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      };
    }
  }
}

export default new CanvasState();
