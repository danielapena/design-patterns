import Iterator from "./iterator";

export default class BrowseHistory {
  private urls: string[] = [];
  private count: number = 0;

  public push(url: string): void {
    this.urls[this.count++] = url;
  }

  public pop(): string {
    const lastIndex = this.urls.length - 1;
    const lastUrl = this.urls[lastIndex];
    this.urls.splice(lastIndex, 1);
    this.count--;
    return lastUrl;
  }

  public createIterator(): Iterator<string> {
    return new this.ArrayIterator(this);
  }

  private ArrayIterator = class implements Iterator<string> {
    private history: BrowseHistory;
    private index: number = 0;

    constructor(urls: BrowseHistory) {
      this.history = urls;
    }

    public hasNext(): boolean {
      return this.index < this.history.count;
    }

    public current(): string {
      return this.history.urls[this.index];
    }

    public next(): void {
      this.index++;
    }
  };
}
