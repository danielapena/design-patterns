export default class DocumentState {
  private content: string;
  private fontName: string;
  private fontSize: number;

  constructor(content: string, fontName: string, fontSize: number) {
    this.content = content;
    this.fontName = fontName;
    this.fontSize = fontSize;
  }

  getContent() {
    return this.content;
  }

  getFontName() {
    return this.fontName;
  }

  getFontSize() {
    return this.fontSize;
  }
}
