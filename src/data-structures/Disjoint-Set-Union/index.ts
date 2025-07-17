/**
 * Union Find / Disjoint Set Union (DSU)
 * Optimized with path compression and union by rank/size.
 * Useful for graph components, Kruskal’s MST, dynamic connectivity.
 */

export class UnionFind {
    private parent: number[];
    private rank: number[];
    private sizeArr: number[];
    private count: number; // total number of disjoint sets
    private useSize: boolean;
  
    /**
     * @param n Number of elements (0 to n-1)
     * @param useSize If true, uses union by size; otherwise union by rank
     */
    constructor(n: number, useSize: boolean = false) {
      this.parent = Array.from({ length: n }, (_, i) => i);
      this.rank = Array(n).fill(1); // depth of tree
      this.sizeArr = Array(n).fill(1); // size of set
      this.count = n;
      this.useSize = useSize;
    }
  
    /**
     * Finds the root of element `x` with path compression
     */
    find(x: number): number {
      if (this.parent[x] !== x) {
        this.parent[x] = this.find(this.parent[x]); // path compression
      }
      return this.parent[x];
    }
  
    /**
     * Unions two sets by rank or size
     * @returns true if union occurred, false if already connected
     */
    union(x: number, y: number): boolean {
      const rootX = this.find(x);
      const rootY = this.find(y);
  
      if (rootX === rootY) return false;
  
      if (this.useSize) {
        // Union by size
        if (this.sizeArr[rootX] < this.sizeArr[rootY]) {
          this.parent[rootX] = rootY;
          this.sizeArr[rootY] += this.sizeArr[rootX];
        } else {
          this.parent[rootY] = rootX;
          this.sizeArr[rootX] += this.sizeArr[rootY];
        }
      } else {
        // Union by rank
        if (this.rank[rootX] < this.rank[rootY]) {
          this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
          this.parent[rootY] = rootX;
        } else {
          this.parent[rootY] = rootX;
          this.rank[rootX]++;
        }
      }
  
      this.count--;
      return true;
    }
  
    /**
     * Returns true if x and y are in the same set
     */
    connected(x: number, y: number): boolean {
      return this.find(x) === this.find(y);
    }
  
    /**
     * Returns the size of the set that contains x
     */
    size(x: number): number {
      return this.sizeArr[this.find(x)];
    }
  
    /**
     * Returns total number of disjoint sets
     */
    getSetCount(): number {
      return this.count;
    }
  
    /**
     * Resets the structure with n elements
     */
    reset(n: number): void {
      this.parent = Array.from({ length: n }, (_, i) => i);
      this.rank = Array(n).fill(1);
      this.sizeArr = Array(n).fill(1);
      this.count = n;
    }
  }
  