# Disjoint Set Union (Union Find)

A highly optimized **Union-Find / Disjoint Set Union (DSU)** implementation in TypeScript/JavaScript.  
Efficiently handles dynamic connectivity with **path compression** and **union by rank/size**, making it ideal for **graph components**, **Kruskal’s MST**, and **dynamic grouping**.

---

## 📦 Installation

```bash
npm install js-ds-collection
```

---

## 📥 Import

```ts
import { UnionFind } from 'js-ds-collection';
```

---
## 🚀 Usage

```ts
const uf = new UnionFind(5); // Creates 5 disjoint sets: 0, 1, 2, 3, 4

uf.union(0, 1);    // merges sets containing 0 and 1
uf.union(1, 2);    // merges 2 into the set of 0-1

uf.connected(0, 2); // true
uf.connected(0, 4); // false

uf.size(0);         // 3 → size of the set containing 0
uf.getSetCount();   // 3 → total number of disjoint sets

uf.reset(4);        // resets DSU with 4 elements (0 to 3)
```

---

## 📘 API Reference

| Method                     | Description                                                     | Return Type |
| -------------------------- | --------------------------------------------------------------- | ----------- |
| `constructor(n, useSize?)` | Initializes DSU with `n` elements and optional size-based union | `UnionFind` |
| `find(x)`                  | Finds root of `x` with path compression                         | `number`    |
| `union(x, y)`              | Merges sets of `x` and `y` by rank or size                      | `boolean`   |
| `connected(x, y)`          | Checks if `x` and `y` belong to the same set                    | `boolean`   |
| `size(x)`                  | Returns size of set containing `x`                              | `number`    |
| `getSetCount()`            | Returns total number of disjoint sets                           | `number`    |
| `reset(n)`                 | Resets the structure with `n` elements                          | `void`      |

---

## 🧠 Time & Space Complexity

| Operation     | Time Complexity             | Space Complexity |
| ------------- | --------------------------- | ---------------- |
| `find()`      | O(α(n)) – Inverse Ackermann | O(1)             |
| `union()`     | O(α(n))                     | O(1)             |
| `connected()` | O(α(n))                     | O(1)             |
| `size()`      | O(α(n))                     | O(1)             |
| `reset()`     | O(n)                        | O(n)             |

> **n** = number of elements\
**α(n)** = inverse Ackermann function, practically ≤ 5 for all realistic inputs

---

## 🛠️ Example Use Cases
- **Dynamic Graph Connectivity:** Track which nodes are connected as edges are added.

- **Kruskal’s Minimum Spanning Tree:** Detect cycles and union components efficiently.

- **Connected Component Detection:** Group nodes in the same component.

- **Network Merging:** Combine social/friend groups or devices in the same network.

- **Image Segmentation / Blob Detection:** Group adjacent pixels/regions with same properties.

- **Dynamic Equivalence Queries:** Handle queries like “are these two items equivalent?”

- **Online Communities / Groups:** Track user groups that can dynamically merge over time.

- **Percolation Theory:** Check if there's a connection path from top to bottom in a grid.

---