import EditorState from "./editor-state";

export default class History {
  private states: EditorState[] = [];
  push(state: EditorState) {
    this.states.push(state);
  }
  pop() {
    const lastIndex = this.states.length - 1;
    const lastState = this.states[lastIndex];
    this.states.splice(lastIndex, 1);
    return lastState;
  }
}
