/**
 * Trie (Prefix Tree) implementation for string storage and prefix search.
 */

class TrieNode {
    children: Map<string, TrieNode> = new Map();
    isEndOfWord: boolean = false;
  }
  
  export class Trie {
    private root: TrieNode = new TrieNode();
  
    /**
     * Inserts a word into the trie.
     */
    insert(word: string): void {
      let node = this.root;
      for (const ch of word) {
        if (!node.children.has(ch)) {
          node.children.set(ch, new TrieNode());
        }
        node = node.children.get(ch)!;
      }
      node.isEndOfWord = true;
    }
  
    /**
     * Returns true if the word is in the trie.
     */
    search(word: string): boolean {
      const node = this.traverse(word);
      return !!node && node.isEndOfWord;
    }
  
    /**
     * Returns true if any word in the trie starts with the given prefix.
     */
    startsWith(prefix: string): boolean {
      return !!this.traverse(prefix);
    }
  
    /**
     * Helper to traverse the trie based on a word/prefix.
     */
    private traverse(prefix: string): TrieNode | null {
      let node = this.root;
      for (const ch of prefix) {
        if (!node.children.has(ch)) return null;
        node = node.children.get(ch)!;
      }
      return node;
    }
  
    /**
     * Deletes a word from the trie (if it exists).
     */
    delete(word: string): boolean {
        const node = this.traverse(word);
        if (!node || !node.isEndOfWord) return false;
      
        this._delete(this.root, word, 0);
        return true;
    }
      
    private _delete(node: TrieNode, word: string, index: number): boolean {
        if (index === word.length) {
          if (!node.isEndOfWord) return false;
          node.isEndOfWord = false;
      
          // Only delete if this node has no children (not a prefix of other words)
          return node.children.size === 0;
        }
      
        const ch = word[index];
        const child = node.children.get(ch);
        if (!child) return false;
      
        const shouldDeleteChild = this._delete(child, word, index + 1);
      
        if (shouldDeleteChild) {
          node.children.delete(ch);
      
          // Only delete current node if it's not end of another word and has no children
          return node.children.size === 0 && !node.isEndOfWord;
        }
      
        return false;
    }
      
}
  