import { Tool } from "./Tool";

export class BrushTool implements Tool {
  mouseUp(): void {
    console.log("Draw a line");
  }
  mouseDown() {
    console.log("Brush icon");
  }
}
