/**
 * A generic binary heap implementation using an array.
 * Can act as MinHeap or MaxHeap based on the comparator provided.
 *
 * Time Complexity:
 *   - insert: O(log n)
 *   - remove: O(log n)
 *   - peek: O(1)
 *   - size, isEmpty: O(1)
 */

export class Heap<T> {
    private items: T[] = [];
  
    /**
     * Creates a heap with a comparator function.
     * The comparator defines the heap type (min-heap, max-heap, etc.)
     * Example: (a, b) => a < b for MinHeap, a > b for MaxHeap
     */
    constructor(private comparator: (a: T, b: T) => boolean) {}
  
    /**
     * Inserts a value into the heap.
     */
    insert(value: T): this {
      this.items.push(value);
      this.bubbleUp();
      return this;
    }
  
    /**
     * Removes and returns the root (highest priority) value.
     */
    remove(): T | null {
      if (this.isEmpty()) return null;
  
      const root = this.items[0];
      const end = this.items.pop()!;
      if (!this.isEmpty()) {
        this.items[0] = end;
        this.bubbleDown();
      }
  
      return root;
    }
  
    /**
     * Returns the root value without removing it.
     */
    peek(): T | null {
      return this.isEmpty() ? null : this.items[0];
    }
  
    /**
     * Returns the number of elements in the heap.
     */
    size(): number {
      return this.items.length;
    }
  
    /**
     * Returns true if the heap is empty.
     */
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    /**
     * Removes all elements from the heap.
     */
    clear(): void {
      this.items = [];
    }
  
    /**
     * Returns a shallow copy of the heap's internal array (not sorted).
     */
    toArray(): T[] {
      return [...this.items];
    }
  
    /**
     * Builds a heap from an array and comparator.
     */
    static fromArray<U>(items: U[], comparator: (a: U, b: U) => boolean): Heap<U> {
      const heap = new Heap(comparator);
      for (const item of items) heap.insert(item);
      return heap;
    }
  
    // --- Private helper methods ---
  
    /**
     * Restores heap property by bubbling the last element up.
     */
    private bubbleUp(): void {
      let index = this.items.length - 1;
      const element = this.items[index];
  
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        const parent = this.items[parentIndex];
  
        if (!this.comparator(element, parent)) break;
  
        this.items[index] = parent;
        index = parentIndex;
      }
  
      this.items[index] = element;
    }
  
    /**
     * Restores heap property by bubbling the root element down.
     */
    private bubbleDown(): void {
      const length = this.items.length;
      const element = this.items[0];
      let index = 0;
  
      while (true) {
        const leftIdx = 2 * index + 1;
        const rightIdx = 2 * index + 2;
        let swapIdx = index;
  
        if (
          leftIdx < length &&
          this.comparator(this.items[leftIdx], this.items[swapIdx])
        ) {
          swapIdx = leftIdx;
        }
  
        if (
          rightIdx < length &&
          this.comparator(this.items[rightIdx], this.items[swapIdx])
        ) {
          swapIdx = rightIdx;
        }
  
        if (swapIdx === index) break;
  
        this.items[index] = this.items[swapIdx];
        index = swapIdx;
      }
  
      this.items[index] = element;
    }
  }
  