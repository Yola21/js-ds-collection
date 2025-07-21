# Stack

A simple and efficient **Stack (LIFO)** implementation in TypeScript/JavaScript.  
Supports all standard stack operations with optional chaining and iteration.

---

## 📦 Installation

```bash
npm install js-ds-collection
```

---

## 📥 Import

```ts
import { Stack } from 'js-ds-collection';
```

---
## 🚀 Usage

```ts
const stack = new Stack();

stack.push(10);    // [10]
stack.push(20);    // [10, 20]
stack.peek();      // 20
stack.pop();       // 20 → [10]
stack.size();      // 1
stack.isEmpty();   // false

stack.clear();     // []
stack.isEmpty();   // true
```

---

## 📘 API Reference

| Method                   | Description                               | Return Type   |
| ------------------------ | ----------------------------------------- | ------------- |
| `constructor(elements?)` | Creates a stack from optional array       | `Stack<T>`    |
| `push(value)`            | Adds an element to the top                | `this`        |
| `pop()`                  | Removes and returns the top element       | `T \| null`   |
| `peek()`                 | Returns the top element without removing  | `T \| null`   |
| `size()`                 | Returns number of elements                | `number`      |
| `isEmpty()`              | Checks if the stack is empty              | `boolean`     |
| `clear()`                | Removes all elements                      | `void`        |
| `toArray()`              | Returns elements as array (bottom to top) | `T[]`         |
| `clone()`                | Returns a new copy of the stack           | `Stack<T>`    |
| `fromArray(arr)`         | Static method to create stack from array  | `Stack<T>`    |
| `[Symbol.iterator]`      | Makes the stack iterable (top to bottom)  | `Iterable<T>` |

---

## 🧠 Time & Space Complexity

| Operation   | Time Complexity | Space Complexity |
| ----------- | --------------- | ---------------- |
| `push()`    | O(1)            | O(1)             |
| `pop()`     | O(1)            | O(1)             |
| `peek()`    | O(1)            | O(1)             |
| `size()`    | O(1)            | O(1)             |
| `isEmpty()` | O(1)            | O(1)             |
| `clear()`   | O(1)            | O(1)             |
| `toArray()` | O(n)            | O(n)             |
| Iteration   | O(n)            | O(1)             |

> **n** = number of elements in the stack

---

## 🛠️ Example Use Cases

- **Expression Evaluation:** Evaluate postfix, prefix, or infix mathematical expressions.

- **Backtracking Algorithms:** Track states in recursive algorithms like maze solving, N-Queens, etc.

- **Undo Functionality:** Maintain a stack of user actions to implement undo operations.

- **Browser History:** Model back/forward navigation with stack behavior.

- **Balanced Parentheses Checker:** Use stack to validate nested structure.

- **Tree/Graph Traversals:** Implement iterative DFS using a stack.

---