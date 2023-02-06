import EditorState from "./editor-state";

export default class Editor {
  private content: string = "";

  setContent(content: string) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  restore(state: EditorState) {
    this.content = state.getContent();
  }

  createState() {
    return new EditorState(this.content);
  }
}
