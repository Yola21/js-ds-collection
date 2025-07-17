/**
 * Segment Tree with generic merge function.
 * Supports range queries and point updates in O(log N).
 */

export class SegmentTree<T> {
    private tree: T[];
    private n: number;
    private merge: (a: T, b: T) => T;
    private neutral: T;
  
    /**
     * @param input - initial array
     * @param mergeFn - associative merge function (e.g., sum, min, max)
     * @param neutral - neutral element for merge (e.g., 0 for sum, Infinity for min)
     */
    constructor(
      private input: T[],
      mergeFn: (a: T, b: T) => T,
      neutral: T
    ) {
      this.merge = mergeFn;
      this.neutral = neutral;
      this.n = input.length;
      this.tree = new Array(4 * this.n).fill(this.neutral);
      this.build(0, 0, this.n - 1);
    }
  
    /**
     * Builds the segment tree from input array.
     */
    private build(node: number, start: number, end: number): void {
      if (start === end) {
        this.tree[node] = this.input[start];
      } else {
        const mid = Math.floor((start + end) / 2);
        this.build(2 * node + 1, start, mid);
        this.build(2 * node + 2, mid + 1, end);
        this.tree[node] = this.merge(this.tree[2 * node + 1], this.tree[2 * node + 2]);
      }
    }
  
    /**
     * Queries the merged value in range [l, r]
     */
    query(l: number, r: number): T {
      return this._query(0, 0, this.n - 1, l, r);
    }
  
    private _query(node: number, start: number, end: number, l: number, r: number): T {
      if (r < start || end < l) return this.neutral;
      if (l <= start && end <= r) return this.tree[node];
  
      const mid = Math.floor((start + end) / 2);
      const left = this._query(2 * node + 1, start, mid, l, r);
      const right = this._query(2 * node + 2, mid + 1, end, l, r);
      return this.merge(left, right);
    }
  
    /**
     * Updates a single index in the array
     */
    update(index: number, value: T): void {
      this._update(0, 0, this.n - 1, index, value);
    }
  
    private _update(node: number, start: number, end: number, idx: number, value: T): void {
      if (start === end) {
        this.tree[node] = value;
      } else {
        const mid = Math.floor((start + end) / 2);
        if (idx <= mid) {
          this._update(2 * node + 1, start, mid, idx, value);
        } else {
          this._update(2 * node + 2, mid + 1, end, idx, value);
        }
        this.tree[node] = this.merge(this.tree[2 * node + 1], this.tree[2 * node + 2]);
      }
    }
  
    /**
     * Returns the current tree (for testing/debug)
     */
    getTree(): T[] {
      return this.tree.slice();
    }
  }
  