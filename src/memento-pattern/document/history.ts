import DocumentState from "./document-state";

export default class History {
  private states: DocumentState[] = [];
  push(state: DocumentState) {
    this.states.push(state);
  }
  pop() {
    const lastIndex = this.states.length - 1;
    const lastState = this.states[lastIndex];
    this.states.splice(lastIndex, 1);
    return lastState;
  }
}
