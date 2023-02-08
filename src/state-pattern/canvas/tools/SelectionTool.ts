import { Tool } from "./Tool";

export class SelectionTool implements Tool {
  mouseUp(): void {
    console.log("Select a rectangle");
  }
  mouseDown() {
    console.log("Selection icon");
  }
}
