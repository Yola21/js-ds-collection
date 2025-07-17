import { describe, it, expect } from 'vitest';
import { SegmentTree } from '../src/data-structures/Segment-Tree';

describe('SegmentTree - Sum', () => {
  it('should build and query sum correctly', () => {
    const arr = [1, 2, 3, 4, 5];
    const tree = new SegmentTree(arr, (a, b) => a + b, 0);

    expect(tree.query(0, 2)).toBe(6); // 1+2+3
    expect(tree.query(1, 4)).toBe(14); // 2+3+4+5

    tree.update(2, 10); // arr = [1,2,10,4,5]
    expect(tree.query(0, 2)).toBe(13); // 1+2+10
  });
});

describe('SegmentTree - Min', () => {
  it('should find min in range correctly', () => {
    const arr = [8, 6, 4, 7, 5];
    const tree = new SegmentTree(arr, (a, b) => Math.min(a, b), Infinity);

    expect(tree.query(1, 3)).toBe(4); // min(6,4,7)
    tree.update(2, 10); // arr = [8,6,10,7,5]
    expect(tree.query(1, 3)).toBe(6);
  });
});

describe('SegmentTree - Max', () => {
  it('should find max in range correctly', () => {
    const arr = [3, 1, 5, 9, 2];
    const tree = new SegmentTree(arr, (a, b) => Math.max(a, b), -Infinity);

    expect(tree.query(0, 4)).toBe(9);
    tree.update(3, 0); // arr = [3,1,5,0,2]
    expect(tree.query(0, 4)).toBe(5);
  });
});

describe('SegmentTree - Edge Cases', () => {
  it('should return neutral when querying empty range', () => {
    const arr = [42];
    const tree = new SegmentTree(arr, (a, b) => a + b, 0);
    expect(tree.query(0, 0)).toBe(42);
  });

  it('should handle all updates and queries', () => {
    const arr = [5, 5, 5, 5];
    const tree = new SegmentTree(arr, (a, b) => a + b, 0);

    expect(tree.query(0, 3)).toBe(20);
    tree.update(0, 1);
    tree.update(3, 2);
    expect(tree.query(0, 3)).toBe(13);
    expect(tree.query(1, 2)).toBe(10);
  });
});
