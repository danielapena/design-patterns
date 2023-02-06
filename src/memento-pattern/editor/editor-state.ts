export default class EditorState {
  private content: string;
  constructor(content: string) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}
