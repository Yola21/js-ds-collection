/**
 * A Double-Ended Queue (Deque) supporting efficient
 * insertions and deletions from both front and back.
 */

export class Deque<T> {
    private items: (T | null)[] = [];
    private frontIndex = 0;
    private count = 0;
  
    constructor(initialItems?: T[]) {
      if (initialItems?.length) {
        this.items = [...initialItems];
        this.count = initialItems.length;
      } else {
        this.items = [];
        this.count = 0;
      }
    }
    

    /**
     * Adds an item to the back of the deque.
     */
    enqueueBack(item: T): this {
      this.items[this.frontIndex + this.count] = item;
      this.count++;
      return this;
    }
  
    /**
     * Adds an item to the front of the deque.
     */
    enqueueFront(item: T): this {
      this.frontIndex--;
      this.items[this.frontIndex] = item;
      this.count++;
      return this;
    }
  
    /**
     * Removes and returns the front item.
     */
    dequeueFront(): T | null {
      if (this.isEmpty()) return null;
  
      const item = this.items[this.frontIndex];
      this.items[this.frontIndex] = null;
      this.frontIndex++;
      this.count--;
  
      if (this.isEmpty()) this.clear();
      return item!;
    }
  
    /**
     * Removes and returns the back item.
     */
    dequeueBack(): T | null {
      if (this.isEmpty()) return null;
  
      const backIdx = this.frontIndex + this.count - 1;
      const item = this.items[backIdx];
      this.items[backIdx] = null;
      this.count--;
  
      if (this.isEmpty()) this.clear();
      return item!;
    }
  
    /**
     * Returns the front item without removing it.
     */
    front(): T | null {
      return this.isEmpty() ? null : this.items[this.frontIndex]!;
    }
  
    /**
     * Returns the back item without removing it.
     */
    back(): T | null {
      return this.isEmpty() ? null : this.items[this.frontIndex + this.count - 1]!;
    }
  
    /**
     * Returns the number of items in the deque.
     */
    size(): number {
      return this.count;
    }
  
    /**
     * Returns true if the deque is empty.
     */
    isEmpty(): boolean {
      return this.count === 0;
    }
  
    /**
     * Clears the deque completely.
     */
    clear(): void {
      this.items = [];
      this.frontIndex = 0;
      this.count = 0;
    }
  
    /**
     * Converts the deque to an array (front to back).
     */
    toArray(): T[] {
      const result: T[] = [];
      for (let i = 0; i < this.count; i++) {
        result.push(this.items[this.frontIndex + i]!);
      }
      return result;
    }    
  
    /**
     * Clones the deque.
     */
    clone(): Deque<T> {
      return new Deque(this.toArray());
    }
  
    /**
     * Creates a deque from an array.
     */
    static fromArray<U>(items: U[]): Deque<U> {
      return new Deque<U>(items);
    }
  
    /**
     * Makes the deque iterable (front to back).
     */
    *[Symbol.iterator](): Generator<T> {
      for (let i = this.frontIndex; i < this.frontIndex + this.count; i++) {
        yield this.items[i] as T;
      }
    }
  }
  