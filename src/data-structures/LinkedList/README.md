# Singly Linked List

An efficient and lightweight **Singly Linked List** implementation in TypeScript/JavaScript.  
Provides fast insertion/removal at head and tail, and supports traversal, search, and mutation. Ideal for **queue operations**, **efficient front/back insertions**, and **ordered traversal**.

---

## 📦 Installation

```bash
npm install js-ds-collection
```

---

## 📥 Import

```ts
import { LinkedList } from 'js-ds-collection';
```

---
## 🚀 Usage

```ts
const list = new LinkedList<number>();

list.append(10);          // [10]
list.append(20);          // [10, 20]
list.prepend(5);          // [5, 10, 20]

list.insertAt(1, 7);      // [5, 7, 10, 20]
list.remove(10);          // true → [5, 7, 20]
list.removeAt(1);         // 7 → [5, 20]

list.get(0);              // 5
list.indexOf(20);         // 1
list.toArray();           // [5, 20]

list.size();              // 2
list.isEmpty();           // false
list.clear();             
list.isEmpty();           // true
```

---

## 📘 API Reference

| Method               | Description                                           | Return Type   |
| -------------------- | ----------------------------------------------------- | ------------- |
| `append(value)`      | Adds a node to the end of the list                    | `this`        |
| `prepend(value)`     | Adds a node to the front of the list                  | `this`        |
| `insertAt(index, v)` | Inserts a value at the given index                    | `boolean`     |
| `remove(value)`      | Removes first occurrence of the value                 | `boolean`     |
| `removeAt(index)`    | Removes the node at the given index                   | `T \| null`   |
| `get(index)`         | Gets the value at a specific index                    | `T \| null`   |
| `indexOf(value)`     | Returns the index of a value, or -1 if not found      | `number`      |
| `size()`             | Returns the number of elements in the list            | `number`      |
| `isEmpty()`          | Checks whether the list is empty                      | `boolean`     |
| `clear()`            | Clears all elements from the list                     | `void`        |
| `toArray()`          | Converts the list to a linear array                   | `T[]`         |
| `[Symbol.iterator]`  | Enables iteration using `for...of` or spread operator | `Iterable<T>` |

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
- **Queue Operations (FIFO):** Append at the end, remove from the front efficiently.

- **Order-preserving Insertion:** Insert elements dynamically at any position.

- **Chaining Hash Tables:** Use linked list to resolve collisions in hash tables.

- **History Stack / Undo Queue:** Maintain a linear undo/redo history.

- **Low-memory environments:** Linked lists use memory only as needed (no resizing).

- **Sorted Data Maintenance:** Maintain sorted insertions without array shuffling.

- **Data Streams:** Process streamed data with flexible size limits.
---