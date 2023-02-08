import IteratorPattern from "./iterator-pattern";
import MementoPatternExample from "./memento-pattern";
import StatePatternExample from "./state-pattern";

class Index {
  public static main(): void {
    MementoPatternExample.execute();
    StatePatternExample.execute();
    IteratorPattern.execute();
  }
}

Index.main();
