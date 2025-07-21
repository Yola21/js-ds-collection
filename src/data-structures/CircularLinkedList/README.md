# Circular Linked List

A lightweight and efficient **Circular Singly Linked List** implementation in TypeScript/JavaScript. The tail node points back to the head, making it ideal for **round-robin scheduling**, **playlist loops**, or **game player rotation** systems.

---

## 📦 Installation

```bash
npm install js-ds-collection
```

---

## 📥 Import

```ts
import { CircularLinkedList } from 'js-ds-collection';
```

---
## 🚀 Usage

### ✅ Create a Circular Linked List

```ts
const list = new CircularLinkedList();

list.append("A");
list.append("B");
list.prepend("Start");
```

### Tree Info
```ts
[...list];             // ['Start', 'A', 'B']
list.toArray();        // ['Start', 'A', 'B']

list.get(1);           // 'A'
list.indexOf("B");     // 2
list.remove("A");      // true
list.toArray();        // ['Start', 'B']

list.size();           // 2
list.isEmpty();        // false

list.clear();
list.isEmpty();        // true
```

---

## 📘 API Reference

| Method              | Description                                           | Return Type   |
|---------------------|-------------------------------------------------------|---------------|
| `append(value)`     | Adds value to the end of the list                     | `this`        |
| `prepend(value)`    | Adds value to the front of the list                   | `this`        |
| `remove(value)`     | Removes the first occurrence of a value               | `boolean`     |
| `get(index)`        | Retrieves the value at a specific index               | `T \| null`   |
| `indexOf(value)`    | Returns the index of a value, or -1 if not found      | `number`      |
| `size()`            | Returns the number of elements in the list            | `number`      |
| `isEmpty()`         | Checks whether the list is empty                      | `boolean`     |
| `clear()`           | Clears all elements from the list                     | `void`        |
| `toArray()`         | Converts the list to a linear array                   | `T[]`         |
| `[Symbol.iterator]` | Enables iteration using `for...of` or `[...list]`     | `Iterable<T>` |

---

## 🧠 Time & Space Complexity

| Operation       | Time Complexity | Space Complexity |
|-----------------|------------------|------------------|
| `append()`      | O(1)             | O(1)             |
| `prepend()`     | O(1)             | O(1)             |
| `remove()`      | O(n)             | O(1)             |
| `get()`         | O(n)             | O(1)             |
| `indexOf()`     | O(n)             | O(1)             |
| `size()`        | O(1)             | O(1)             |
| `isEmpty()`     | O(1)             | O(1)             |
| `clear()`       | O(1)             | O(1)             |
| `toArray()`     | O(n)             | O(n)             |
| Iteration       | O(n)             | O(1)             |

> **n** = number of nodes in the circular linked list

---

## 🛠️ Example Use Cases

- Round-robin task scheduling (e.g., CPU threads, ticket rotation)
- Music or video playlist looping
- Turn-based game player rotation
- Circular buffering in memory-constrained environments
- Token passing in distributed systems or simulations
- Carousel sliders or infinite scrollers in UI

---
