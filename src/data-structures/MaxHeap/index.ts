// src/structures/MaxHeap.ts
import { Heap } from '../Heap/index.js';

/**
 * A MaxHeap where the largest value has the highest priority.
 * Optional selector allows comparing by a field (e.g., a[0], a.value).
 */
export class MaxHeap<T> extends Heap<T> {
  constructor(selector: (item: T) => number = (x) => x as unknown as number) {
    super((a, b) => selector(a) > selector(b));
  }
}
