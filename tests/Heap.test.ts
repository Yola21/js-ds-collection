import { describe, it, expect } from 'vitest';
import { Heap } from '../src/data-structures/Heap';

describe('Heap', () => {
  it('should behave as a MinHeap with numbers', () => {
    const minHeap = new Heap<number>((a, b) => a < b);

    minHeap.insert(5).insert(2).insert(8).insert(1);

    expect(minHeap.peek()).toBe(1);
    expect(minHeap.remove()).toBe(1);
    expect(minHeap.remove()).toBe(2);
    expect(minHeap.remove()).toBe(5);
    expect(minHeap.remove()).toBe(8);
    expect(minHeap.remove()).toBeNull();
    expect(minHeap.isEmpty()).toBe(true);
  });

  it('should behave as a MaxHeap with numbers', () => {
    const maxHeap = new Heap<number>((a, b) => a > b);

    maxHeap.insert(5).insert(2).insert(8).insert(1);

    expect(maxHeap.peek()).toBe(8);
    expect(maxHeap.remove()).toBe(8);
    expect(maxHeap.remove()).toBe(5);
    expect(maxHeap.remove()).toBe(2);
    expect(maxHeap.remove()).toBe(1);
    expect(maxHeap.isEmpty()).toBe(true);
  });

  it('should support tuple comparison by first element', () => {
    const tupleHeap = new Heap<[number, string]>((a, b) => a[0] < b[0]);

    tupleHeap.insert([3, 'apple']);
    tupleHeap.insert([1, 'banana']);
    tupleHeap.insert([2, 'carrot']);

    expect(tupleHeap.remove()).toEqual([1, 'banana']);
    expect(tupleHeap.remove()).toEqual([2, 'carrot']);
    expect(tupleHeap.remove()).toEqual([3, 'apple']);
  });

  it('should support object comparison by selector', () => {
    const taskHeap = new Heap<{ priority: number; task: string }>(
      (a, b) => a.priority < b.priority
    );

    taskHeap.insert({ priority: 3, task: 'email' });
    taskHeap.insert({ priority: 1, task: 'fix bug' });
    taskHeap.insert({ priority: 2, task: 'code review' });

    expect(taskHeap.remove()).toEqual({ priority: 1, task: 'fix bug' });
    expect(taskHeap.remove()).toEqual({ priority: 2, task: 'code review' });
    expect(taskHeap.remove()).toEqual({ priority: 3, task: 'email' });
  });

  it('should build from array using static fromArray', () => {
    const arr = [4, 2, 7, 1];
    const heap = Heap.fromArray(arr, (a, b) => a < b);

    expect(heap.size()).toBe(4);
    expect(heap.remove()).toBe(1);
    expect(heap.remove()).toBe(2);
  });

  it('should support clear, isEmpty, size', () => {
    const h = new Heap<number>((a, b) => a < b);
    h.insert(10).insert(20);

    expect(h.size()).toBe(2);
    expect(h.isEmpty()).toBe(false);
    h.clear();
    expect(h.size()).toBe(0);
    expect(h.isEmpty()).toBe(true);
    expect(h.peek()).toBeNull();
  });

  it('should return a copy of internal array with toArray()', () => {
    const h = new Heap<number>((a, b) => a < b);
    h.insert(1).insert(2).insert(3);

    const snapshot = h.toArray();
    expect(snapshot).toHaveLength(3);
    snapshot.push(99);
    expect(h.size()).toBe(3); // Original heap unaffected
  });
});
