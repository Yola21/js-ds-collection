import { describe, it, expect } from 'vitest';
import { UnionFind } from '../src/data-structures/Disjoint-Set-Union';

describe('UnionFind (by rank)', () => {
  it('should correctly find and union sets', () => {
    const uf = new UnionFind(5); // by rank by default

    expect(uf.connected(0, 1)).toBe(false);
    expect(uf.union(0, 1)).toBe(true);
    expect(uf.connected(0, 1)).toBe(true);
    expect(uf.union(0, 1)).toBe(false); // already connected

    expect(uf.union(2, 3)).toBe(true);
    expect(uf.union(1, 3)).toBe(true);
    expect(uf.connected(0, 2)).toBe(true);
    expect(uf.getSetCount()).toBe(2);
  });

  it('should not union already connected elements', () => {
    const uf = new UnionFind(3);
    uf.union(0, 1);
    expect(uf.union(1, 0)).toBe(false);
    expect(uf.getSetCount()).toBe(2);
  });

  it('should support reset()', () => {
    const uf = new UnionFind(3);
    uf.union(0, 1);
    uf.reset(4);
    expect(uf.getSetCount()).toBe(4);
    expect(uf.connected(0, 1)).toBe(false);
  });
});

describe('UnionFind (by size)', () => {
  it('should union smaller set into larger set', () => {
    const uf = new UnionFind(6, true); // by size

    uf.union(0, 1);
    uf.union(2, 3);
    uf.union(4, 5);
    uf.union(0, 2);
    uf.union(0, 4);

    expect(uf.connected(1, 5)).toBe(true);
    expect(uf.getSetCount()).toBe(1);
    expect(uf.size(0)).toBe(6);
    expect(uf.size(3)).toBe(6);
  });

  it('should maintain set sizes correctly', () => {
    const uf = new UnionFind(4, true);
    uf.union(0, 1);
    uf.union(2, 3);
    expect(uf.size(0)).toBe(2);
    expect(uf.size(3)).toBe(2);
    uf.union(1, 3);
    expect(uf.size(2)).toBe(4);
  });
});