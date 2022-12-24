import { makeAutoObservable } from "mobx";
import { Tool } from "../tools/Tool";

class ToolState {
  tool: Tool | null = null;
  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool: any) {
    this.tool = tool;
  }

  setFillColor(color: any) {
    if (this.tool) {
      this.tool.fillColor = color;
    }
  }

  setStrokeColor(color: any) {
    if (this.tool) {
      this.tool.strokeColor = color;
    }
  }

  setLineWIdth(width: any) {
    if (this.tool) {
      this.tool.lineWidth = width;
    }
  }
}

export default new ToolState();
