/**
 * An optimized generic Queue implementation using a circular buffer technique.
 * Amortized O(1) for enqueue and dequeue using a front pointer.
 */

export class Queue<T> {
    private items: (T | null)[] = [];
    private frontIndex = 0;
    private count = 0;
  
    constructor(initialItems?: T[]) {
      if (Array.isArray(initialItems)) {
        this.items = [...initialItems];
        this.count = initialItems.length;
      }
    }
  
    /**
     * Adds an element to the end of the queue.
     */
    enqueue(item: T): this {
      this.items[this.frontIndex + this.count] = item;
      this.count++;
      return this;
    }
  
    /**
     * Removes and returns the front element.
     */
    dequeue(): T | null {
      if (this.isEmpty()) return null;
  
      const item = this.items[this.frontIndex];
      this.items[this.frontIndex] = null; // help GC
      this.frontIndex++;
      this.count--;
  
      if (this.isEmpty()) this.clear(); // compact memory
  
      return item!;
    }
  
    /**
     * Returns the front element without removing it.
     */
    front(): T | null {
      return this.isEmpty() ? null : this.items[this.frontIndex]!;
    }
  
    /**
     * Returns the back (last) element without removing it.
     */
    back(): T | null {
      return this.isEmpty()
        ? null
        : this.items[this.frontIndex + this.count - 1]!;
    }
  
    /**
     * Returns true if the queue is empty.
     */
    isEmpty(): boolean {
      return this.count === 0;
    }
  
    /**
     * Returns the number of elements in the queue.
     */
    size(): number {
      return this.count;
    }
  
    /**
     * Clears the queue completely.
     */
    clear(): void {
      this.items = [];
      this.frontIndex = 0;
      this.count = 0;
    }
  
    /**
     * Returns a snapshot array of queue elements.
     */
    toArray(): T[] {
      return this.items.slice(this.frontIndex, this.frontIndex + this.count) as T[];
    }
  
    /**
     * Creates a shallow copy of the queue.
     */
    clone(): Queue<T> {
      return new Queue<T>(this.toArray());
    }
  
    /**
     * Creates a queue from an array.
     */
    static fromArray<U>(items: U[]): Queue<U> {
      return new Queue<U>(items);
    }
  
    /**
     * Makes the queue iterable (FIFO).
     */
    *[Symbol.iterator](): Generator<T> {
      for (let i = this.frontIndex; i < this.frontIndex + this.count; i++) {
        yield this.items[i] as T;
      }
    }
  }
  