/**
 * A generic doubly linked list implementation.
 * Each node has both next and prev pointers.
 * Time Complexity:
 *  - prepend, append: O(1)
 *  - insertAt, removeAt, get, indexOf: O(n)
 */

class DoublyNode<T> {
    constructor(
      public value: T,
      public next: DoublyNode<T> | null = null,
      public prev: DoublyNode<T> | null = null
    ) {}
  }
  
  export class DoublyLinkedList<T> {
    private head: DoublyNode<T> | null = null;
    private tail: DoublyNode<T> | null = null;
    private length = 0;
  
    append(value: T): this {
      const node = new DoublyNode(value);
      if (!this.head) {
        this.head = this.tail = node;
      } else {
        node.prev = this.tail;
        this.tail!.next = node;
        this.tail = node;
      }
      this.length++;
      return this;
    }
  
    prepend(value: T): this {
      const node = new DoublyNode(value, this.head);
      if (this.head) this.head.prev = node;
      this.head = node;
      if (!this.tail) this.tail = node;
      this.length++;
      return this;
    }
  
    insertAt(index: number, value: T): boolean {
      if (index < 0 || index > this.length) return false;
      if (index === 0) return !!this.prepend(value);
      if (index === this.length) return !!this.append(value);
  
      const next = this.getNode(index);
      if (!next) return false;
      const prev = next.prev;
      const node = new DoublyNode(value, next, prev);
      if (prev) prev.next = node;
      next.prev = node;
      this.length++;
      return true;
    }
  
    remove(value: T): boolean {
      let current = this.head;
  
      while (current) {
        if (current.value === value) {
          this.unlink(current);
          return true;
        }
        current = current.next;
      }
  
      return false;
    }
  
    removeAt(index: number): T | null {
      const node = this.getNode(index);
      if (!node) return null;
      this.unlink(node);
      return node.value;
    }
  
    get(index: number): T | null {
      const node = this.getNode(index);
      return node?.value ?? null;
    }
  
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
  
    toArray(): T[] {
      const arr: T[] = [];
      for (const val of this) arr.push(val);
      return arr;
    }
  
    size(): number {
      return this.length;
    }
  
    isEmpty(): boolean {
      return this.length === 0;
    }
  
    clear(): void {
      this.head = this.tail = null;
      this.length = 0;
    }
  
    *[Symbol.iterator](): Generator<T> {
      let current = this.head;
      while (current) {
        yield current.value;
        current = current.next;
      }
    }
  
    private getNode(index: number): DoublyNode<T> | null {
      if (index < 0 || index >= this.length) return null;
  
      // Start from tail if index is in second half
      let current: DoublyNode<T> | null;
      if (index < this.length / 2) {
        current = this.head;
        for (let i = 0; i < index; i++) current = current!.next;
      } else {
        current = this.tail;
        for (let i = this.length - 1; i > index; i--) current = current!.prev;
      }
      return current;
    }
  
    private unlink(node: DoublyNode<T>): void {
      if (node.prev) node.prev.next = node.next;
      else this.head = node.next;
  
      if (node.next) node.next.prev = node.prev;
      else this.tail = node.prev;
  
      this.length--;
    }
  }
  