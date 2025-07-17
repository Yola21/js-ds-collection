import { describe, it, expect } from 'vitest';
import { Queue } from '../src/data-structures/Queue';

describe('Queue', () => {
  it('should create an empty queue', () => {
    const q = new Queue<number>();
    expect(q.isEmpty()).toBe(true);
    expect(q.size()).toBe(0);
    expect(q.front()).toBeNull();
    expect(q.back()).toBeNull();
  });

  it('should enqueue and dequeue elements in FIFO order', () => {
    const q = new Queue<number>();
    q.enqueue(10).enqueue(20).enqueue(30);

    expect(q.front()).toBe(10);
    expect(q.back()).toBe(30);

    expect(q.dequeue()).toBe(10);
    expect(q.dequeue()).toBe(20);
    expect(q.dequeue()).toBe(30);
    expect(q.dequeue()).toBeNull();

    expect(q.isEmpty()).toBe(true);
  });

  it('should handle mixed enqueue and dequeue operations', () => {
    const q = new Queue<string>();
    q.enqueue('a').enqueue('b');
    expect(q.dequeue()).toBe('a');
    q.enqueue('c');
    expect(q.front()).toBe('b');
    expect(q.back()).toBe('c');
    expect(q.dequeue()).toBe('b');
    expect(q.dequeue()).toBe('c');
    expect(q.isEmpty()).toBe(true);
  });

  it('should return correct size', () => {
    const q = new Queue<number>();
    q.enqueue(1).enqueue(2);
    expect(q.size()).toBe(2);
    q.dequeue();
    expect(q.size()).toBe(1);
    q.clear();
    expect(q.size()).toBe(0);
  });

  it('should clear the queue', () => {
    const q = new Queue<string>(['x', 'y']);
    q.clear();
    expect(q.isEmpty()).toBe(true);
    expect(q.front()).toBeNull();
    expect(q.back()).toBeNull();
  });

  it('should convert to array', () => {
    const q = new Queue<number>([1, 2, 3]);
    expect(q.toArray()).toEqual([1, 2, 3]);
    q.dequeue();
    expect(q.toArray()).toEqual([2, 3]);
  });

  it('should clone correctly', () => {
    const q1 = new Queue<number>([5, 6]);
    const q2 = q1.clone();

    expect(q1.toArray()).toEqual(q2.toArray());
    q2.enqueue(7);
    expect(q1.toArray()).not.toEqual(q2.toArray());
  });

  it('should create queue from array', () => {
    const q = Queue.fromArray(['a', 'b']);
    expect(q.front()).toBe('a');
    expect(q.back()).toBe('b');
    expect(q.toArray()).toEqual(['a', 'b']);
  });

  it('should be iterable (FIFO)', () => {
    const q = Queue.fromArray([10, 20, 30]);
    const values = Array.from(q);
    expect(values).toEqual([10, 20, 30]);
  });
});