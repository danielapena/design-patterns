import { TravelMode } from "./travelMode";

export default class BicycleTravelMode implements TravelMode {
  getEta(): number {
    console.log("Calculating ETA (Bicycle)");
    return 2;
  }
  getDirection(): string {
    console.log("Calculating Direction (Bicycle)");
    return "Bicycle";
  }
}
