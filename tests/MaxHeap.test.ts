import { describe, it, expect } from 'vitest';
import { MaxHeap } from '../src/data-structures/MaxHeap';

describe('MaxHeap', () => {
  it('should maintain max-heap property for numbers', () => {
    const heap = new MaxHeap<number>();
    heap.insert(2).insert(9).insert(1);
    expect(heap.remove()).toBe(9);
    expect(heap.remove()).toBe(2);
    expect(heap.remove()).toBe(1);
  });

  it('should support selector-based max-heap', () => {
    const heap = new MaxHeap<{ score: number }>(x => x.score);
    heap.insert({ score: 7 }).insert({ score: 3 }).insert({ score: 5 });
    expect(heap.remove()).toEqual({ score: 7 });
    expect(heap.remove()).toEqual({ score: 5 });
    expect(heap.remove()).toEqual({ score: 3 });
  });
});