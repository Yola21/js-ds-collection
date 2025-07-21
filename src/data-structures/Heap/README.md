# Heap (MinHeap / MaxHeap)

A generic, flexible **binary heap** implementation using an array in TypeScript/JavaScript.  
Supports both **MinHeap** and **MaxHeap** behavior via a custom comparator, making it ideal for **priority queues**, **Dijkstra’s shortest path**, **job scheduling**, and more.

---

## 📦 Installation

```bash
npm install js-ds-collection
```

---

## 📥 Import

```ts
import { Heap } from 'js-ds-collection';
```

---
## 🚀 Usage

### MinHeap
```ts
const minHeap = new Heap((a, b) => a < b); // MinHeap

minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);

minHeap.peek();      // 5
minHeap.remove();    // 5
minHeap.toArray();   // Unsorted heap: [10, 20]
```

### MaxHeap
```ts
const maxHeap = new Heap((a, b) => a > b); // MaxHeap

maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);

maxHeap.peek();      // 20
maxHeap.remove();    // 20
```

### Build heap from Array
```ts
const nums = [7, 2, 9, 4, 1];
const minHeap = Heap.fromArray(nums, (a, b) => a < b);
minHeap.peek();      // 1
```

---

## 📘 API Reference

| Method                              | Description                                    | Return Type |
| ----------------------------------- | ---------------------------------------------- | ----------- |
| `insert(value)`                     | Inserts a value into the heap                  | `this`      |
| `remove()`                          | Removes and returns the root element (min/max) | `T \| null` |
| `peek()`                            | Returns the root element without removing it   | `T \| null` |
| `size()`                            | Returns the number of elements in the heap     | `number`    |
| `isEmpty()`                         | Returns whether the heap is empty              | `boolean`   |
| `clear()`                           | Clears all elements from the heap              | `void`      |
| `toArray()`                         | Returns internal array (not sorted order)      | `T[]`       |
| `Heap.fromArray(items, comparator)` | Builds heap from array and comparator          | `Heap<T>`   |

---

## 🧠 Time & Space Complexity

| Operation     | Time Complexity | Space Complexity |
| ------------- | --------------- | ---------------- |
| `insert()`    | O(log n)        | O(1)             |
| `remove()`    | O(log n)        | O(1)             |
| `peek()`      | O(1)            | O(1)             |
| `size()`      | O(1)            | O(1)             |
| `isEmpty()`   | O(1)            | O(1)             |
| `clear()`     | O(1)            | O(1)             |
| `toArray()`   | O(n)            | O(n)             |
| `fromArray()` | O(n log n)      | O(n)             |

> **n** = number of elements in the heap

---

## 🛠️ Example Use Cases
- **Priority Queue:** Used in task schedulers, event dispatchers, and job queues.

- **Dijkstra’s Shortest Path:** MinHeap maintains closest unexplored node.

- **A-Star Pathfinding:** Efficient retrieval of best scoring path.

- **Median Finder:** Maintain two heaps (min & max) for dynamic median.

- **CPU Scheduling:** Prioritize jobs based on execution time or importance.

- **Event Simulation:** Timeline of events sorted by start time.

- **Cache Eviction:** Use max/min priority to determine replacement.

---