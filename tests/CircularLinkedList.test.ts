import { describe, it, expect } from 'vitest';
import { CircularLinkedList } from '../src/data-structures/CircularLinkedList';

describe('CircularLinkedList', () => {
  it('should append and iterate items', () => {
    const list = new CircularLinkedList<number>();
    list.append(1).append(2).append(3);
    expect([...list]).toEqual([1, 2, 3]);
  });

  it('should prepend items correctly', () => {
    const list = new CircularLinkedList<string>();
    list.prepend('C').prepend('B').prepend('A');
    expect(list.toArray()).toEqual(['A', 'B', 'C']);
  });

  it('should get items by index', () => {
    const list = new CircularLinkedList<number>();
    list.append(10).append(20).append(30);
    expect(list.get(0)).toBe(10);
    expect(list.get(1)).toBe(20);
    expect(list.get(2)).toBe(30);
    expect(list.get(3)).toBeNull();
  });

  it('should return index of values', () => {
    const list = new CircularLinkedList<number>();
    list.append(100).append(200).append(300);
    expect(list.indexOf(200)).toBe(1);
    expect(list.indexOf(400)).toBe(-1);
  });

  it('should remove items by value', () => {
    const list = new CircularLinkedList<number>();
    list.append(1).append(2).append(3);
    expect(list.remove(2)).toBe(true);
    expect(list.toArray()).toEqual([1, 3]);
    expect(list.remove(5)).toBe(false);
  });

  it('should handle removal of head and tail correctly', () => {
    const list = new CircularLinkedList<number>();
    list.append(1).append(2).append(3);
    expect(list.remove(1)).toBe(true); // head
    expect(list.remove(3)).toBe(true); // tail
    expect(list.toArray()).toEqual([2]);
  });

  it('should handle single element edge case', () => {
    const list = new CircularLinkedList<string>();
    list.append('solo');
    expect(list.toArray()).toEqual(['solo']);
    expect(list.remove('solo')).toBe(true);
    expect(list.toArray()).toEqual([]);
    expect(list.isEmpty()).toBe(true);
  });

  it('should clear the list', () => {
    const list = new CircularLinkedList<number>();
    list.append(5).append(6);
    list.clear();
    expect(list.toArray()).toEqual([]);
    expect(list.size()).toBe(0);
    expect(list.isEmpty()).toBe(true);
  });
});
