/**
 * A generic singly linked list implementation.
 * Supports insertions, deletions, and iteration.
 * Time Complexity:
 *  - append, prepend: O(1)
 *  - insertAt, removeAt, get, indexOf: O(n)
 */

class Node<T> {
    constructor(public value: T, public next: Node<T> | null = null) {}
  }
  
  export class LinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private length = 0;
  
    /**
     * Adds a node to the end.
     */
    append(value: T): this {
      const node = new Node(value);
      if (!this.head) {
        this.head = this.tail = node;
      } else {
        this.tail!.next = node;
        this.tail = node;
      }
      this.length++;
      return this;
    }
  
    /**
     * Adds a node to the beginning.
     */
    prepend(value: T): this {
      const node = new Node(value, this.head);
      this.head = node;
      if (!this.tail) this.tail = node;
      this.length++;
      return this;
    }
  
    /**
     * Inserts at a specific index.
     */
    insertAt(index: number, value: T): boolean {
      if (index < 0 || index > this.length) return false;
      if (index === 0) return !!this.prepend(value);
      if (index === this.length) return !!this.append(value);
  
      const prev = this.getNode(index - 1);
      const node = new Node(value, prev!.next);
      prev!.next = node;
      this.length++;
      return true;
    }
  
    /**
     * Removes a node by value.
     */
    remove(value: T): boolean {
      if (!this.head) return false;
  
      if (this.head.value === value) {
        this.head = this.head.next;
        this.length--;
        if (!this.head) this.tail = null;
        return true;
      }
  
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
  
      if (!prev.next) return false;
  
      prev.next = prev.next.next;
      if (!prev.next) this.tail = prev;
      this.length--;
      return true;
    }
  
    /**
     * Removes a node at the given index.
     */
    removeAt(index: number): T | null {
      if (index < 0 || index >= this.length || !this.head) return null;
  
      if (index === 0) {
        const val = this.head.value;
        this.head = this.head.next;
        this.length--;
        if (!this.head) this.tail = null;
        return val;
      }
  
      const prev = this.getNode(index - 1);
      const removed = prev?.next;
      if (!removed) return null;
  
      prev!.next = removed.next;
      if (!prev!.next) this.tail = prev;
      this.length--;
      return removed.value;
    }
  
    /**
     * Gets the value at a specific index.
     */
    get(index: number): T | null {
      const node = this.getNode(index);
      return node ? node.value : null;
    }
  
    /**
     * Returns the index of a value or -1.
     */
    indexOf(value: T): number {
      let current = this.head;
      let i = 0;
      while (current) {
        if (current.value === value) return i;
        current = current.next;
        i++;
      }
      return -1;
    }
  
    /**
     * Converts the list to an array.
     */
    toArray(): T[] {
      const arr: T[] = [];
      for (const val of this) arr.push(val);
      return arr;
    }
  
    /**
     * Returns the number of nodes.
     */
    size(): number {
      return this.length;
    }
  
    /**
     * Checks if the list is empty.
     */
    isEmpty(): boolean {
      return this.length === 0;
    }
  
    /**
     * Clears the list.
     */
    clear(): void {
      this.head = this.tail = null;
      this.length = 0;
    }
  
    /**
     * Iterates through the list.
     */
    *[Symbol.iterator](): Generator<T> {
      let current = this.head;
      while (current) {
        yield current.value;
        current = current.next;
      }
    }
  
    /**
     * Internal: returns node at index.
     */
    private getNode(index: number): Node<T> | null {
      if (index < 0 || index >= this.length) return null;
      let current = this.head;
      for (let i = 0; i < index && current; i++) {
        current = current.next;
      }
      return current;
    }
  }
  