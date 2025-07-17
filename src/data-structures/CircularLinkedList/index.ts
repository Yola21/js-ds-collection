/**
 * A circular singly linked list where the tail points back to head.
 * Useful for round-robin scheduling, music playlist loops, etc.
 * Time Complexity:
 *   - append, prepend: O(1)
 *   - remove, indexOf, get: O(n)
 */

class Node<T> {
    constructor(public value: T, public next: Node<T> | null = null) {}
  }
  
  export class CircularLinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private length = 0;
  
    /**
     * Adds value at the end of the list.
     */
    append(value: T): this {
      const node = new Node(value);
      if (!this.head) {
        this.head = this.tail = node;
        node.next = node; // Circular
      } else {
        node.next = this.head;
        this.tail!.next = node;
        this.tail = node;
      }
      this.length++;
      return this;
    }
  
    /**
     * Adds value to the front of the list.
     */
    prepend(value: T): this {
      const node = new Node(value);
      if (!this.head) {
        this.head = this.tail = node;
        node.next = node;
      } else {
        node.next = this.head;
        this.tail!.next = node;
        this.head = node;
      }
      this.length++;
      return this;
    }
  
    /**
     * Removes the first node with the given value.
     */
    remove(value: T): boolean {
      if (!this.head) return false;
  
      let current = this.head;
      let prev = this.tail!;
      let i = 0;
  
      while (i < this.length) {
        if (current.value === value) {
          if (current === this.head) this.head = current.next;
          if (current === this.tail) this.tail = prev;
          prev.next = current.next;
  
          // If only one node left
          if (this.length === 1) {
            this.head = this.tail = null;
          }
  
          this.length--;
          return true;
        }
  
        prev = current;
        current = current.next!;
        i++;
      }
  
      return false;
    }
  
    /**
     * Returns value at the given index.
     */
    get(index: number): T | null {
      const node = this.getNode(index);
      return node ? node.value : null;
    }
  
    /**
     * Returns index of the given value, or -1.
     */
    indexOf(value: T): number {
      let current = this.head;
      for (let i = 0; i < this.length && current; i++) {
        if (current.value === value) return i;
        current = current.next!;
      }
      return -1;
    }
  
    /**
     * Clears the list.
     */
    clear(): void {
      this.head = this.tail = null;
      this.length = 0;
    }
  
    /**
     * Returns number of elements.
     */
    size(): number {
      return this.length;
    }
  
    /**
     * True if list is empty.
     */
    isEmpty(): boolean {
      return this.length === 0;
    }
  
    /**
     * Converts the list to an array.
     */
    toArray(): T[] {
      const result: T[] = [];
      for (const val of this) result.push(val);
      return result;
    }
  
    /**
     * Safely iterate over the list once (non-infinite).
     */
    *[Symbol.iterator](): Generator<T> {
      let current = this.head;
      for (let i = 0; i < this.length && current; i++) {
        yield current.value;
        current = current.next!;
      }
    }
  
    /**
     * Internal: get node at index.
     */
    private getNode(index: number): Node<T> | null {
      if (index < 0 || index >= this.length) return null;
  
      let current = this.head;
      for (let i = 0; i < index && current; i++) {
        current = current.next!;
      }
      return current;
    }
  }
  