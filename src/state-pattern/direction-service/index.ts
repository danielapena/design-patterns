import { TravelMode } from "./travelModes/travelMode";

export default class DirectionService {
  private _travelMode: TravelMode;

  constructor(travelMode: TravelMode) {
    this._travelMode = travelMode;
  }

  get travelMode(): TravelMode {
    return this._travelMode;
  }

  set travelMode(value: TravelMode) {
    this._travelMode = value;
  }

  getEta() {
    return this._travelMode.getEta();
  }

  getDirection() {
    return this._travelMode.getDirection();
  }
}
