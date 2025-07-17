/**
 * A generic Binary Tree with traversal utilities.
 * Each node has up to 2 children.
 * Common in recursive tree problems.
 */

export class BinaryTreeNode<T> {
    constructor(
      public value: T,
      public left: BinaryTreeNode<T> | null = null,
      public right: BinaryTreeNode<T> | null = null
    ) {}
  }
  
  export class BinaryTree<T> {
    constructor(public root: BinaryTreeNode<T> | null = null) {}
  
    /**
     * Returns the height (max depth) of the tree.
     */
    height(node: BinaryTreeNode<T> | null = this.root): number {
      if (!node) return 0;
      return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
  
    /**
     * Returns total number of nodes.
     */
    size(node: BinaryTreeNode<T> | null = this.root): number {
      if (!node) return 0;
      return 1 + this.size(node.left) + this.size(node.right);
    }
  
    /**
     * Preorder DFS: Root -> Left -> Right
     */
    preorder(node: BinaryTreeNode<T> | null = this.root): T[] {
      if (!node) return [];
      return [
        node.value,
        ...this.preorder(node.left),
        ...this.preorder(node.right),
      ];
    }
  
    /**
     * Inorder DFS: Left -> Root -> Right
     */
    inorder(node: BinaryTreeNode<T> | null = this.root): T[] {
      if (!node) return [];
      return [
        ...this.inorder(node.left),
        node.value,
        ...this.inorder(node.right),
      ];
    }
  
    /**
     * Postorder DFS: Left -> Right -> Root
     */
    postorder(node: BinaryTreeNode<T> | null = this.root): T[] {
      if (!node) return [];
      return [
        ...this.postorder(node.left),
        ...this.postorder(node.right),
        node.value,
      ];
    }
  
    /**
     * Level order traversal using BFS.
     */
    levelOrder(): T[] {
      const result: T[] = [];
      if (!this.root) return result;
  
      const queue: BinaryTreeNode<T>[] = [this.root];
      while (queue.length) {
        const node = queue.shift()!;
        result.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
  
      return result;
    }
  
    /**
     * Converts tree to array in level order.
     */
    toArray(): T[] {
      return this.levelOrder();
    }
  }
  