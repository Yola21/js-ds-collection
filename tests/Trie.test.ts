import { describe, it, expect } from 'vitest';
import { Trie } from '../src/data-structures/Trie';

describe('Trie', () => {
  it('should insert and search words correctly', () => {
    const trie = new Trie();
    trie.insert('apple');
    trie.insert('app');
    trie.insert('banana');

    expect(trie.search('apple')).toBe(true);
    expect(trie.search('app')).toBe(true);
    expect(trie.search('banana')).toBe(true);
    expect(trie.search('ban')).toBe(false);
    expect(trie.search('appl')).toBe(false);
  });

  it('should detect prefixes using startsWith', () => {
    const trie = new Trie();
    trie.insert('cat');
    trie.insert('car');

    expect(trie.startsWith('ca')).toBe(true);
    expect(trie.startsWith('c')).toBe(true);
    expect(trie.startsWith('cat')).toBe(true);
    expect(trie.startsWith('dog')).toBe(false);
  });

  it('should delete words correctly', () => {
    const trie = new Trie();
    trie.insert('bat');
    trie.insert('batch');
    trie.insert('batman');

    expect(trie.search('bat')).toBe(true);
    expect(trie.delete('bat')).toBe(true);
    expect(trie.search('bat')).toBe(false);
    expect(trie.search('batch')).toBe(true);
    expect(trie.search('batman')).toBe(true);

    expect(trie.delete('batch')).toBe(true);
    expect(trie.search('batch')).toBe(false);

    expect(trie.delete('batman')).toBe(true);
    expect(trie.search('batman')).toBe(false);

    expect(trie.delete('unknown')).toBe(false);
  });

  it('should handle overlapping prefixes', () => {
    const trie = new Trie();
    trie.insert('a');
    trie.insert('ab');
    trie.insert('abc');

    expect(trie.search('a')).toBe(true);
    expect(trie.search('ab')).toBe(true);
    expect(trie.search('abc')).toBe(true);

    trie.delete('ab');
    expect(trie.search('a')).toBe(true);
    expect(trie.search('ab')).toBe(false);
    expect(trie.search('abc')).toBe(true);
  });
});