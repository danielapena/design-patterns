import Canvas from "./canvas";
import { SelectionTool } from "./canvas/tools/SelectionTool";
import DirectionService from "./direction-service";
import TrainTravelMode from "./direction-service/travelModes/trainTravelMode";

export default class StatePatternExample {
  static execute(): void {
    const canvas = new Canvas();
    canvas.currentTool = new SelectionTool();
    canvas.mouseDown();
    canvas.mouseUp();

    const directionService = new DirectionService(new TrainTravelMode());
    console.log(directionService.getEta());
    console.log(directionService.getDirection());
  }
}
