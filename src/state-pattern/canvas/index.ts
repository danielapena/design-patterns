import { SelectionTool } from "./tools/SelectionTool";
import { Tool } from "./tools/Tool";

export default class Canvas {
  private _currentTool: Tool;

  constructor() {
    this._currentTool = new SelectionTool();
  }

  public get currentTool(): Tool {
    return this._currentTool;
  }

  public set currentTool(value: Tool) {
    this._currentTool = value;
  }

  mouseDown() {
    this._currentTool.mouseDown();
  }

  mouseUp() {
    this._currentTool.mouseUp();
  }
}
