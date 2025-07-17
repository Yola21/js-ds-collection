import { describe, it, expect } from 'vitest';
import { Deque } from '../src/data-structures/Dequeue';

describe('Deque', () => {
  it('should create an empty deque', () => {
    const dq = new Deque<number>();
    expect(dq.isEmpty()).toBe(true);
    expect(dq.size()).toBe(0);
    expect(dq.front()).toBeNull();
    expect(dq.back()).toBeNull();
  });

  it('should initialize with an empty array', () => {
    const dq = new Deque<string>([]);
    expect(dq.isEmpty()).toBe(true);
    expect(dq.size()).toBe(0);
  });

  it('should initialize with elements', () => {
    const dq = new Deque([1, 2, 3]);
    expect(dq.size()).toBe(3);
    expect(dq.front()).toBe(1);
    expect(dq.back()).toBe(3);
  });

  it('should enqueue and dequeue from both ends', () => {
    const dq = new Deque<number>();
    dq.enqueueBack(2).enqueueBack(3);
    dq.enqueueFront(1);
    expect(dq.toArray()).toEqual([1, 2, 3]);
    expect(dq.dequeueFront()).toBe(1);
    expect(dq.dequeueBack()).toBe(3);
    expect(dq.dequeueFront()).toBe(2);
    expect(dq.dequeueBack()).toBeNull();
    expect(dq.isEmpty()).toBe(true);
  });

  it('should peek correctly with front() and back()', () => {
    const dq = new Deque(['a', 'b', 'c']);
    expect(dq.front()).toBe('a');
    expect(dq.back()).toBe('c');
    dq.dequeueFront();
    expect(dq.front()).toBe('b');
    dq.dequeueBack();
    expect(dq.back()).toBe('b');
  });

  it('should return correct size and isEmpty()', () => {
    const dq = new Deque<number>();
    expect(dq.isEmpty()).toBe(true);
    dq.enqueueBack(10);
    dq.enqueueFront(5);
    expect(dq.size()).toBe(2);
    dq.dequeueBack();
    dq.dequeueFront();
    expect(dq.size()).toBe(0);
    expect(dq.isEmpty()).toBe(true);
  });

  it('should clear all items', () => {
    const dq = new Deque([1, 2, 3]);
    dq.clear();
    expect(dq.toArray()).toEqual([]);
    expect(dq.front()).toBeNull();
    expect(dq.back()).toBeNull();
    expect(dq.isEmpty()).toBe(true);
  });

  it('should convert to array correctly', () => {
    const dq = new Deque<number>();
    dq.enqueueFront(2);
    dq.enqueueBack(3);
    dq.enqueueFront(1);
    expect(dq.toArray()).toEqual([1, 2, 3]);
  });

  it('should clone the deque correctly', () => {
    const dq1 = new Deque(['x', 'y']);
    const dq2 = dq1.clone();
    expect(dq2.toArray()).toEqual(['x', 'y']);
    dq2.enqueueBack('z');
    expect(dq1.toArray()).not.toEqual(dq2.toArray());
  });

  it('should create deque from array', () => {
    const dq = Deque.fromArray([5, 6, 7]);
    expect(dq.front()).toBe(5);
    expect(dq.back()).toBe(7);
    expect(dq.toArray()).toEqual([5, 6, 7]);
  });

  it('should be iterable (front to back)', () => {
    const dq = new Deque(['a', 'b', 'c']);
    const result = Array.from(dq);
    expect(result).toEqual(['a', 'b', 'c']);
  });
});
