import { describe, it, expect } from 'vitest';
import { PriorityQueue } from '../src/data-structures/PriorityQueue';

describe('PriorityQueue', () => {
  it('should prioritize lower numbers first (min-heap)', () => {
    const pq = new PriorityQueue<number>((a, b) => a < b);
    pq.enqueue(3).enqueue(1).enqueue(2);
    expect(pq.dequeue()).toBe(1);
    expect(pq.dequeue()).toBe(2);
    expect(pq.dequeue()).toBe(3);
  });

  it('should support max-priority with custom comparator', () => {
    const pq = new PriorityQueue<string>((a, b) => a > b);
    pq.enqueue('apple').enqueue('zebra').enqueue('banana');
    expect(pq.dequeue()).toBe('zebra');
    expect(pq.dequeue()).toBe('banana');
    expect(pq.dequeue()).toBe('apple');
  });

  it('should support custom objects with comparator', () => {
    const pq = new PriorityQueue<{ priority: number; task: string }>(
      (a, b) => a.priority < b.priority
    );
    pq.enqueue({ priority: 2, task: 'Code' });
    pq.enqueue({ priority: 1, task: 'Test' });
    pq.enqueue({ priority: 3, task: 'Review' });
    expect(pq.dequeue()).toEqual({ priority: 1, task: 'Test' });
    expect(pq.dequeue()).toEqual({ priority: 2, task: 'Code' });
    expect(pq.dequeue()).toEqual({ priority: 3, task: 'Review' });
  });
});