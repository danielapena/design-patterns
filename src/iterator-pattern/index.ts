import BrowseHistory from "./browseHistory";

export default class IteratorPattern {
  static execute(): void {
    console.log("---Iterator Pattern---");
    const history = new BrowseHistory();
    history.push("a");
    history.push("b");
    history.push("c");
    history.pop();
    const iterator = history.createIterator();
    while (iterator.hasNext()) {
      console.log(iterator.current());

      iterator.next();
    }
  }
}
