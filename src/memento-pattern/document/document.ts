import DocumentState from "./document-state";

export default class Document {
  private content: string = "";
  private fontName: string = "Arial";
  private fontSize: number = 12;

  setContent(content: string) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  setFontName(fontName: string) {
    this.fontName = fontName;
  }

  getFontName() {
    return this.fontName;
  }

  setFontSize(fontSize: number) {
    this.fontSize = fontSize;
  }

  getFontSize() {
    return this.fontSize;
  }

  restore(state: DocumentState) {
    this.content = state.getContent();
    this.fontName = state.getFontName();
    this.fontSize = state.getFontSize();
  }

  createState() {
    return new DocumentState(this.content, this.fontName, this.fontSize);
  }
}
