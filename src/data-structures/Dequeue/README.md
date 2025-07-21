# Deque (Double-Ended Queue)

A fast and flexible **Double-Ended Queue (Deque)** implementation in TypeScript/JavaScript.  
Supports insertion and removal of elements from **both ends**, making it ideal for **sliding window problems**, **caching (LRU)**, **palindrome checking**, and more.

---

## 📦 Installation

```bash
npm install js-ds-collection
```

---

## 📥 Import

```ts
import { Dequeue } from 'js-ds-collection';
```

---
## 🚀 Usage

```ts
const dq = new Dequeue();

dq.pushBack(10);     // [10]
dq.pushFront(5);     // [5, 10]
dq.pushBack(15);     // [5, 10, 15]

dq.popFront();       // 5 → [10, 15]
dq.popBack();        // 15 → [10]

dq.front();          // 10
dq.back();           // 10

dq.size();           // 1
dq.isEmpty();        // false

dq.clear();          
dq.isEmpty();        // true
```

---

## 📘 API Reference

| Method              | Description                                             | Return Type   |
|---------------------|---------------------------------------------------------|---------------|
| `pushFront(value)`  | Inserts value at the front                              | `this`        |
| `pushBack(value)`   | Inserts value at the back                               | `this`        |
| `popFront()`        | Removes and returns the value from the front            | `T \| null`   |
| `popBack()`         | Removes and returns the value from the back             | `T \| null`   |
| `front()`           | Returns the front value without removing                | `T \| null`   |
| `back()`            | Returns the back value without removing                 | `T \| null`   |
| `size()`            | Returns the number of elements                          | `number`      |
| `isEmpty()`         | Checks whether the deque is empty                       | `boolean`     |
| `clear()`           | Removes all elements                                    | `void`        |
| `toArray()`         | Returns the elements in array form (front to back)      | `T[]`         |
| `[Symbol.iterator]` | Enables iteration using `for...of` or spread operator   | `Iterable<T>` |

---

## 🧠 Time & Space Complexity

| Operation       | Time Complexity | Space Complexity |
|-----------------|------------------|------------------|
| `pushFront()`   | O(1)             | O(1)             |
| `pushBack()`    | O(1)             | O(1)             |
| `popFront()`    | O(1)             | O(1)             |
| `popBack()`     | O(1)             | O(1)             |
| `front()`       | O(1)             | O(1)             |
| `back()`        | O(1)             | O(1)             |
| `size()`        | O(1)             | O(1)             |
| `isEmpty()`     | O(1)             | O(1)             |
| `clear()`       | O(1)             | O(1)             |
| `toArray()`     | O(n)             | O(n)             |
| Iteration       | O(n)             | O(1)             |

> **n** = number of elements in the dequeue

---

## 🛠️ Example Use Cases

- **Sliding Window Problems**: 
  Efficiently solve problems like "maximum in sliding window" or "minimum in sliding window" using a deque to maintain candidates in order.

- **Palindrome Checker**: 
  Use a deque to compare characters from the front and back simultaneously.

- **Task Scheduling / Round Robin**: 
  Model task queues where tasks can be pushed to or popped from both ends depending on priority or fairness.

- **Undo/Redo Functionality**: 
  Maintain two deques: one for undo actions, one for redo actions, allowing quick push/pop from both ends.

- **Cache Eviction (LRU Cache)**: 
  Track usage order in a deque to quickly evict least recently used entries from either end.

- **BFS (Breadth-First Search)**: 
  When implementing BFS in graphs or grids, a deque can provide O(1) insertion/removal from both ends.

- **Simulation Queues**: 
  Model queue-based real-world systems like printer queues, operating system schedulers, or bank counters.

- **Time-based Data Streams**: 
  Keep track of only the last N seconds/minutes of events using a deque, and discard old ones from the front.

---