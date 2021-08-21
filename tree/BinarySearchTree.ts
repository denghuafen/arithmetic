/**
 * 左子树不为空，左子树的值均<=根节点
 * 右子树不为空，右子树的值均>=根节点
 * 优点：
 *  1、插入、删除高效
 *  2、查询是否包含某个数值
 *
 * 二分法
 * 时间复杂度：跟树的高度有关，O(log2n)
 *
 */

import BinaryTree from "./BinaryTree";
export class BinarySearchTree extends BinaryTree {
  // 插入
  insert(value: number) {
    const treeNode: MyNode = new MyNode(value);
    if (this.root === null) {
      this.root = treeNode;
      return;
    }
    let curNode = this.root;
    // 用于保存叶子结点的父节点
    let parentNode: null | MyNode = null;
    const curNodeVal = curNode.value;
    while (curNode != null) {
      parentNode = curNode;
      if (value <= curNodeVal) {
        curNode = curNode.left;
      } else if (value >= curNodeVal) {
        curNode = curNode.right;
      }
    }
    if (parentNode.value >= curNode.value) {
      parentNode.left = parentNode;
    } else {
      parentNode.right = parentNode;
    }
  }
  // 根据值查找
  search(value: number): MyNode {
    return this._searchByTree(this.root, value);
  }
  private _searchByTree(node: MyNode, value: number) {
    if (node == null) return null;
    if (node.value === value) {
      return node;
    } else if (node.value > value) {
      return this._searchByTree(node.left, value);
    } else {
      return this._searchByTree(node.right, value);
    }
  }
  // 删除结点，并返回被删除的结点
  remove(val: number): MyNode {
    if (this.root === null) return null;
    let current = this.root;
    let parent = this.root;
    // 被删除的节点是父节点的左节点吗？
    let isLeftChild = false;
    while (current !== null && current.value !== val) {
      parent = current;
      if (current.value > val) {
        current = current.left;
        isLeftChild = true;
      } else {
        current = current.right;
        isLeftChild = false;
      }
    }
    // 表示被删除的元素不存在于这个树中，直接返回null
    if (current === null) return null;
    // 1、如果被删除的是叶子节点
    if (current.left === null && current.right === null) {
      isLeftChild ? (parent.left = null) : (parent.right = null);
      return current;
    } else if (
      (current.left !== null && current.right === null) ||
      (current.right !== null && current.left === null)
    ) {
      //2、如果被删除节点有一个子节点
      if (current.left !== null) {
        isLeftChild
          ? (parent.left = current.left)
          : (parent.right = current.left);
        return current;
      }
      if (current.right !== null) {
        isLeftChild
          ? (parent.left = current.right)
          : (parent.right = current.right);
        return current;
      }
    } else {
      // 3、如果被删除的节点有两个子节点
      // 找到删除节点右子树中最小值节点
      let success = this.processer(current);
      isLeftChild ? (parent.left = success) : (parent.right = success);
      success.left = current.left;
      current.left = current.right = null;
      return current;
    }
  }
  // 查找后继节点：找到能够替换delNode的节点
  private processer(delNode: MyNode): MyNode {
    // 后继节点
    let success = delNode;
    let parent = delNode;
    let current = delNode.right;
    while (current !== null) {
      if (current.left !== null) {
        parent = current;
      }
      success = current;
      current = current.left;
    }
    // 如果current为null，表示success所指向的节点为后继节点
    // 1、如果success是delNode的右节点
    if (success === delNode.right) return success;
    // 2、如果success是delNode右子树中的最小值节点
    parent.left = success.right;
    success.right = delNode.right;
    return success;
  }
}
