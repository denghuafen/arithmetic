import { BinarySearchTree } from "./BinarySearchTree";
import MyNode from "../MyNode";

/**
 * 平衡二叉树
 *  必要条件
 *    1、必须是平衡二叉搜索树
 *    2、每个节点的左右子树高度差<=1
 * 平衡因子：将二叉树上节点的左子树高度减去右子树高度的值称为该节点的平衡因子BF(Balance Factor),取值：[-1,1]
 *  不平衡节点：
 *    插入了某个节点后，导致以这个节点为根节点的树的左右子树的平衡因子的绝对值大于1
 */
export class AVLTree extends BinarySearchTree {
  balance() {}

  // 获取某个节点的平衡因子
  balanceFactorOfNode(node: MyNode): number {
    if (node === null) {
      return 0;
    }
    const diff = this.getTreeHeight(node.left) - this.getTreeHeight(node.right);
    return Math.abs(diff);
  }
  // 获取这棵树的平衡因子
  balanceFactor() {
    this.balanceFactorOfNode(this.root);
  }
  // 获取树的高度
  private getTreeHeight(node: MyNode): number {
    if (node === null) {
      return 0;
    }
    return (
      Math.max(this.getTreeHeight(node.left), this.getTreeHeight(node.right)) +
      1
    );
  }
  // 使用条件：插入的元素在不平衡节点的右侧的右侧
  // 左旋：将某个节点进行左旋，就是将 这个节点 作为这个节点右节点的左子树

  leftRotate(node: MyNode) {
    const rightNode = node.right;
    const leftOfRightNode = rightNode.left;
    // 左旋
    rightNode.left = node;
    node.right = leftOfRightNode;
    return rightNode;
  }
  // 右旋:将某个节点右旋，就是将 这个节点 作为这个节点左节点的右子树
  // 插入的元素在不平衡节点的左侧的左侧
  rightRotate(node: MyNode) {
    const leftNode = node.left;
    //保存leftNode的右子树
    const rightOfLeftNode = leftNode.right;
    // 右旋
    leftNode.right = node;
    node.left = rightOfLeftNode;
    return leftNode;
  }
  // 插入的元素在 不平衡节点 的左侧的右侧（LR）
  // 将不平衡节点左侧节点左旋
  // 在将不平衡节点右旋
  leftRightRotate(node: MyNode) {
    node.left = this.leftRotate(node.left);
    this.rightRotate(node);
  }
  // 插入的元素在不平衡节点的右侧的左侧（RL）
  // 将不平衡节点右侧的节点右旋
  // 在将不平衡节点左旋
  rightLeftRotate(node: MyNode) {
    node.right = this.rightRotate(node.right);
    this.leftRotate(node);
  }
}
