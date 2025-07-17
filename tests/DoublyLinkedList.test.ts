import { describe, it, expect } from 'vitest';
import { DoublyLinkedList } from '../src/data-structures/DoublyLinkedList';

describe('DoublyLinkedList', () => {
  it('should append and iterate items', () => {
    const list = new DoublyLinkedList<number>();
    list.append(1).append(2).append(3);
    expect([...list]).toEqual([1, 2, 3]);
  });

  it('should prepend items', () => {
    const list = new DoublyLinkedList<string>();
    list.prepend('c').prepend('b').prepend('a');
    expect(list.toArray()).toEqual(['a', 'b', 'c']);
  });

  it('should insert at specific index', () => {
    const list = new DoublyLinkedList<number>();
    list.append(1).append(3);
    list.insertAt(1, 2); // insert 2 between 1 and 3
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  it('should remove item by value', () => {
    const list = new DoublyLinkedList<number>();
    list.append(1).append(2).append(3);
    expect(list.remove(2)).toBe(true);
    expect(list.toArray()).toEqual([1, 3]);
    expect(list.remove(99)).toBe(false);
  });

  it('should remove item by index', () => {
    const list = new DoublyLinkedList<string>();
    list.append('a').append('b').append('c');
    expect(list.removeAt(1)).toBe('b');
    expect(list.toArray()).toEqual(['a', 'c']);
    expect(list.removeAt(5)).toBeNull();
  });

  it('should get item by index', () => {
    const list = new DoublyLinkedList<number>();
    list.append(10).append(20).append(30);
    expect(list.get(0)).toBe(10);
    expect(list.get(1)).toBe(20);
    expect(list.get(2)).toBe(30);
    expect(list.get(3)).toBeNull();
  });

  it('should find index of a value', () => {
    const list = new DoublyLinkedList<number>();
    list.append(5).append(10).append(15);
    expect(list.indexOf(10)).toBe(1);
    expect(list.indexOf(99)).toBe(-1);
  });

  it('should clear the list', () => {
    const list = new DoublyLinkedList<string>();
    list.append('x').append('y');
    list.clear();
    expect(list.isEmpty()).toBe(true);
    expect(list.size()).toBe(0);
    expect(list.toArray()).toEqual([]);
  });

  it('should return size and isEmpty correctly', () => {
    const list = new DoublyLinkedList<number>();
    expect(list.isEmpty()).toBe(true);
    list.append(1);
    expect(list.size()).toBe(1);
    list.removeAt(0);
    expect(list.size()).toBe(0);
    expect(list.isEmpty()).toBe(true);
  });
});
