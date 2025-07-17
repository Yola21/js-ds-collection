import { describe, it, expect } from 'vitest';
import { Stack } from '../src/data-structures/Stack';

describe('Stack', () => {
  it('should create an empty stack', () => {
    const stack = new Stack<number>();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  it('should push and peek elements', () => {
    const stack = new Stack<string>();
    stack.push('a').push('b');
    expect(stack.peek()).toBe('b');
    expect(stack.size()).toBe(2);
  });

  it('should pop elements in LIFO order', () => {
    const stack = new Stack<number>();
    stack.push(1).push(2).push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();
  });

  it('should clone the stack correctly', () => {
    const original = new Stack<number>();
    original.push(1).push(2);
    const clone = original.clone();

    expect(clone.toArray()).toEqual(original.toArray());
    clone.pop();
    expect(clone.toArray()).not.toEqual(original.toArray());
  });

  it('should clear the stack', () => {
    const stack = new Stack<string>(['a', 'b', 'c']);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
    expect(stack.peek()).toBeNull();
  });

  it('should support fromArray', () => {
    const stack = Stack.fromArray([10, 20, 30]);
    expect(stack.size()).toBe(3);
    expect(stack.peek()).toBe(30);
  });

  it('should be iterable (LIFO)', () => {
    const stack = Stack.fromArray([1, 2, 3]);
    const values = Array.from(stack);
    expect(values).toEqual([3, 2, 1]);
  });
});
