import { describe, it, expect } from 'vitest';
import { MinHeap } from '../src/data-structures/MinHeap';

describe('MinHeap', () => {
  it('should maintain min-heap property for numbers', () => {
    const heap = new MinHeap<number>();
    heap.insert(5).insert(1).insert(3);
    expect(heap.remove()).toBe(1);
    expect(heap.remove()).toBe(3);
    expect(heap.remove()).toBe(5);
  });

  it('should support selector-based min-heap', () => {
    const heap = new MinHeap<[number, string]>(x => x[0]);
    heap.insert([10, 'a']).insert([5, 'b']).insert([8, 'c']);
    expect(heap.remove()).toEqual([5, 'b']);
    expect(heap.remove()).toEqual([8, 'c']);
    expect(heap.remove()).toEqual([10, 'a']);
  });
});