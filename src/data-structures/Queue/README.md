# Queue

An efficient **Queue** implementation in TypeScript/JavaScript using a circular buffer technique.  
Supports **FIFO (First-In-First-Out)** operations with **amortized O(1)** time for enqueue and dequeue.  
Perfect for **task queues**, **BFS**, **job scheduling**, and **streaming buffers**.

---

## 📦 Installation

```bash
npm install js-ds-collection
```

---

## 📥 Import

```ts
import { Queue } from 'js-ds-collection';
```

---
## 🚀 Usage

```ts
const q = new Queue();

q.enqueue(1);         // [1]
q.enqueue(2);         // [1, 2]
q.enqueue(3);         // [1, 2, 3]

q.dequeue();          // 1 → [2, 3]
q.front();            // 2
q.back();             // 3

q.size();             // 2
q.isEmpty();          // false

q.toArray();          // [2, 3]
const copy = q.clone();

q.clear();
q.isEmpty();          // true
```

---

## 📘 API Reference

| Method              | Description                                           | Return Type   |
| ------------------- | ----------------------------------------------------- | ------------- |
| `enqueue(value)`    | Adds value to the back of the queue                   | `this`        |
| `dequeue()`         | Removes and returns value from the front              | `T \| null`   |
| `front()`           | Returns the front value without removing it           | `T \| null`   |
| `back()`            | Returns the back (last) value without removing it     | `T \| null`   |
| `size()`            | Returns the number of elements in the queue           | `number`      |
| `isEmpty()`         | Checks whether the queue is empty                     | `boolean`     |
| `clear()`           | Empties the queue                                     | `void`        |
| `toArray()`         | Returns the current elements as a linear array        | `T[]`         |
| `clone()`           | Returns a shallow copy of the current queue           | `Queue<T>`    |
| `fromArray(arr)`    | Creates a queue from an array (static method)         | `Queue<T>`    |
| `[Symbol.iterator]` | Enables iteration using `for...of` or spread operator | `Iterable<T>` |

---

## 🧠 Time & Space Complexity

| Operation   | Time Complexity  | Space Complexity |
| ----------- | ---------------- | ---------------- |
| `enqueue()` | O(1) (amortized) | O(1)             |
| `dequeue()` | O(1) (amortized) | O(1)             |
| `front()`   | O(1)             | O(1)             |
| `back()`    | O(1)             | O(1)             |
| `size()`    | O(1)             | O(1)             |
| `isEmpty()` | O(1)             | O(1)             |
| `clear()`   | O(1)             | O(1)             |
| `toArray()` | O(n)             | O(n)             |
| `clone()`   | O(n)             | O(n)             |
| Iteration   | O(n)             | O(1)             |

> **n** = number of elements in the queue

---

## 🛠️ Example Use Cases
- **Breadth-First Search (BFS):** Queue is used to traverse graph/tree levels.

- **Job Scheduling / Task Queues:** Process tasks in the order they arrive.

- **Message Queues / Streams:** Streamed data can be buffered and processed sequentially.

- **Rate Limiting / Time Windows:** Track events over a sliding time window.

- **Buffering in I/O systems:** Queue up input/output for asynchronous operations.

- **Event Handling:** Maintain event order in UI frameworks or middleware.

- **Producer-Consumer Patterns:** Multiple producers and consumers can safely interact with a shared queue.

---