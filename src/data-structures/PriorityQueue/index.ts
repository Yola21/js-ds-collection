// src/structures/PriorityQueue.ts
import { Heap } from '../Heap';

/**
 * A flexible PriorityQueue built on top of a heap.
 * Supports custom comparator for any type and logic.
 */
export class PriorityQueue<T> {
  private heap: Heap<T>;

  constructor(comparator: (a: T, b: T) => boolean) {
    this.heap = new Heap(comparator);
  }

  enqueue(item: T): this {
    this.heap.insert(item);
    return this;
  }

  dequeue(): T | null {
    return this.heap.remove();
  }

  peek(): T | null {
    return this.heap.peek();
  }

  size(): number {
    return this.heap.size();
  }

  isEmpty(): boolean {
    return this.heap.isEmpty();
  }

  clear(): void {
    this.heap.clear();
  }

  toArray(): T[] {
    return this.heap.toArray();
  }

  static fromArray<U>(
    items: U[],
    comparator: (a: U, b: U) => boolean
  ): PriorityQueue<U> {
    const pq = new PriorityQueue<U>(comparator);
    for (const item of items) pq.enqueue(item);
    return pq;
  }
}
