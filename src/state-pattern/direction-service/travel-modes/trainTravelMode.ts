import { TravelMode } from "./travelMode";

export default class TrainTravelMode implements TravelMode {
  getEta(): number {
    console.log("Calculating ETA (Train)");
    return 3;
  }
  getDirection(): string {
    console.log("Calculating Direction (Train)");
    return "Train";
  }
}
