# Trie (Prefix Tree)

An efficient **Trie (Prefix Tree)** implementation in TypeScript/JavaScript.  
Supports fast string insertion, prefix searching, and deletion. Ideal for **autocomplete**, **dictionary**, and **spell checking** use cases.

---

## 📦 Installation

```bash
npm install js-ds-collection
```

---

## 📥 Import

```ts
import { Trie } from 'js-ds-collection';
```

---
## 🚀 Usage

```ts
const trie = new Trie();

trie.insert("apple");
trie.insert("app");

trie.search("apple");     // true
trie.search("app");       // true
trie.search("appl");      // false

trie.startsWith("ap");    // true
trie.startsWith("bat");   // false

trie.delete("apple");     // true
trie.search("apple");     // false
trie.search("app");       // true
```

---

## 📘 API Reference

| Method               | Description                                         | Return Type |
| -------------------- | --------------------------------------------------- | ----------- |
| `insert(word)`       | Adds a word to the trie                             | `void`      |
| `search(word)`       | Returns `true` if word exists in the trie           | `boolean`   |
| `startsWith(prefix)` | Returns `true` if any word starts with given prefix | `boolean`   |
| `delete(word)`       | Removes a word from the trie if it exists           | `boolean`   |

---

## 🧠 Time & Space Complexity

| Operation      | Time Complexity | Space Complexity |
| -------------- | --------------- | ---------------- |
| `insert(word)` | O(L)            | O(L)             |
| `search(word)` | O(L)            | O(1)             |
| `startsWith()` | O(L)            | O(1)             |
| `delete(word)` | O(L)            | O(1)             |

> **L** = length of the word or prefix

---

## 🛠️ Example Use Cases

- **Autocomplete Suggestions:** Efficiently suggest words that start with a given prefix.

- **Spell Checker:** Validate if a word exists in a dictionary.

- **Search-as-you-type:** Use startsWith() for responsive input matching.

- **IP Routing (longest prefix match):** Store routing paths using trie logic.

- **DNA Sequence Matching:** Store and search biological strings with shared prefixes.

- **Game Solvers (e.g., Boggle, Wordament):** Use trie to validate prefixes and speed up pruning.

---