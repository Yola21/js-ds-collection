# Doubly Linked List

An efficient and flexible **Doubly Linked List** implementation in TypeScript/JavaScript.  
Each node contains both `next` and `prev` pointers, making it ideal for **bidirectional traversal**, **undo-redo stacks**, and **in-place node manipulation**.

---

## 📦 Installation

```bash
npm install js-ds-collection
```

---

## 📥 Import

```ts
import { DoublyLinkedList } from 'js-ds-collection';
```

---
## 🚀 Usage

```ts
const list = new DoublyLinkedList<number>();

list.append(10);       // [10]
list.append(20);       // [10, 20]
list.prepend(5);       // [5, 10, 20]

list.insertAt(1, 7);   // [5, 7, 10, 20]

list.remove(7);        // true → [5, 10, 20]
list.removeAt(0);      // 5 → [10, 20]

list.get(1);           // 20
list.indexOf(10);      // 0

list.size();           // 2
list.isEmpty();        // false

[...list];             // [10, 20]
list.toArray();        // [10, 20]

list.clear();
list.isEmpty();        // true
```

---

## 📘 API Reference

| Method                   | Description                                                   | Return Type   |
| ------------------------ | ------------------------------------------------------------- | ------------- |
| `append(value)`          | Appends a value at the end of the list                        | `this`        |
| `prepend(value)`         | Prepends a value to the beginning of the list                 | `this`        |
| `insertAt(index, value)` | Inserts a value at a specific index                           | `boolean`     |
| `remove(value)`          | Removes the first node containing the value                   | `boolean`     |
| `removeAt(index)`        | Removes the node at the specified index and returns its value | `T \| null`   |
| `get(index)`             | Returns the value at the given index                          | `T \| null`   |
| `indexOf(value)`         | Finds the index of the given value, or -1 if not found        | `number`      |
| `toArray()`              | Converts the linked list to an array                          | `T[]`         |
| `size()`                 | Returns the number of elements in the list                    | `number`      |
| `isEmpty()`              | Returns whether the list is empty                             | `boolean`     |
| `clear()`                | Clears all nodes from the list                                | `void`        |
| `[Symbol.iterator]`      | Enables iteration using `for...of` or spread syntax           | `Iterable<T>` |

---

## 🧠 Time & Space Complexity

| Operation    | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| `append()`   | O(1)            | O(1)             |
| `prepend()`  | O(1)            | O(1)             |
| `insertAt()` | O(n)            | O(1)             |
| `remove()`   | O(n)            | O(1)             |
| `removeAt()` | O(n)            | O(1)             |
| `get()`      | O(n)            | O(1)             |
| `indexOf()`  | O(n)            | O(1)             |
| `size()`     | O(1)            | O(1)             |
| `isEmpty()`  | O(1)            | O(1)             |
| `clear()`    | O(1)            | O(1)             |
| `toArray()`  | O(n)            | O(n)             |
| Iteration    | O(n)            | O(1)             |

> **n** = number of elements in the list

---

## 🛠️ Example Use Cases
- **Undo/Redo Systems:** Bidirectional history tracking of user actions.

- **LRU Cache Implementation:** O(1) insert and delete from both ends.

- **Text Editors:** Represent lines of text with efficient insertion/deletion.

- **Playlist Navigation:** Allow backward/forward traversals easily.

- **Browser History Management:** Move back and forth through pages.

- **Deque-backed Queues:** Easily switch between stack or queue behaviors.

---