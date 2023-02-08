import Canvas from "./canvas";
import { SelectionTool } from "./canvas/tools/SelectionTool";

export default class StatePatternExample {
  static execute(): void {
    const canvas = new Canvas();
    canvas.currentTool = new SelectionTool();
    canvas.mouseDown();
    canvas.mouseUp();
  }
}
