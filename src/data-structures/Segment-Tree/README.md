# Segment Tree

A highly efficient and flexible **Segment Tree** implementation in TypeScript/JavaScript.  
Supports **range queries** and **point updates** in **O(log n)** time, with customizable merge logic like sum, min, max, GCD, etc.

---

## 📦 Installation

```bash
npm install js-ds-collection
```

---

## 📥 Import

```ts
import { SegmentTree } from 'js-ds-collection';
```

---
## 🚀 Usage

### Sum Query Example
```ts
const nums = [1, 3, 5, 7, 9, 11];
const sumTree = new SegmentTree(nums, (a, b) => a + b, 0);

sumTree.query(1, 3);    // 3 + 5 + 7 = 15

sumTree.update(1, 10);  // nums[1] = 10
sumTree.query(1, 3);    // 10 + 5 + 7 = 22
```

### Min Query Example
```ts
const nums = [4, 2, 6, 1, 7];
const minTree = new SegmentTree(nums, Math.min, Infinity);

minTree.query(1, 3);   // min of [2, 6, 1] = 1
minTree.update(2, 0);  // nums[2] = 0
minTree.query(1, 3);   // min of [2, 0, 1] = 0
```

---

## 📘 API Reference

| Method                               | Description                                                                | Return Type      |
| ------------------------------------ | -------------------------------------------------------------------------- | ---------------- |
| `constructor(arr, mergeFn, neutral)` | Initializes the segment tree with array, merge function, and neutral value | `SegmentTree<T>` |
| `query(start, end)`                  | Returns the merged result from index `start` to `end` (inclusive)          | `T`              |
| `update(index, value)`               | Updates the element at a specific index                                    | `void`           |
| `getTree()`                          | Returns a copy of the internal segment tree array                          | `T[]`            |

---

## 🧠 Time & Space Complexity

| Operation   | Time Complexity | Space Complexity |
| ----------- | --------------- | ---------------- |
| `query()`   | O(log n)        | O(1)             |
| `update()`  | O(log n)        | O(1)             |
| `build()`   | O(n)            | O(n)             |
| `getTree()` | O(n)            | O(n)             |

> **n** = number of elements in the input array

---

## 🛠️ Example Use Cases

- **Range Sum Queries:** Efficiently compute sum over subarrays.

- **Range Minimum/Maximum Queries:** Find min/max in dynamic ranges.

- **Stock Price Analytics:** Track max/min prices over a window with real-time updates.

- **GCD/LCM Range Queries:** Use custom merge logic for mathematical operations.

- **Dynamic Histogram Counting:** Maintain prefix sum-like structures with updates.

- **Competitive Programming:** Ideal for interval-based problems where elements change frequently.

- **Game Buff Calculations:** Apply and recalculate combined effects (e.g., attack power buffs) over time intervals.

---