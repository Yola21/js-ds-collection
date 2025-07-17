export class Stack<T> {
    private items: T[];
  
    constructor(elements?: T[]) {
      this.items = Array.isArray(elements) ? [...elements] : [];
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    size(): number {
      return this.items.length;
    }
  
    peek(): T | null {
      return this.isEmpty() ? null : this.items[this.items.length - 1];
    }
  
    push(element: T): this {
      this.items.push(element);
      return this; // enable chaining
    }
  
    pop(): T | null {
      return this.isEmpty() ? null : this.items.pop()!;
    }
  
    toArray(): T[] {
      return [...this.items];
    }
  
    clear(): void {
      this.items = [];
    }
  
    clone(): Stack<T> {
      return new Stack(this.items);
    }
  
    static fromArray<U>(elements: U[]): Stack<U> {
      return new Stack<U>(elements);
    }
  
    // Optional: Make stack iterable (e.g., for...of)
    *[Symbol.iterator](): Generator<T> {
      for (let i = this.items.length - 1; i >= 0; i--) {
        yield this.items[i];
      }
    }
  }
  