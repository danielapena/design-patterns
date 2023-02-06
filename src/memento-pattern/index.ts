import Document from "./document/document";
import History from "./document/history";

export default class MementoPattern {
  public static execute(): void {
    const history = new History();
    const document = new Document();
    document.setContent("Hello World");
    history.push(document.createState());

    document.setContent("Hello World!");
    document.setFontName("Arial");
    history.push(document.createState());

    document.setContent("Hello World!!");
    history.push(document.createState());

    document.restore(history.pop());
    document.restore(history.pop());
    document.restore(history.pop());

    console.log(
      document.getContent(),
      document.getFontName(),
      document.getFontSize()
    );
  }
}
