import Tree from "./Tree";
export default class BinaryTree extends Tree {
  public inOrder() {
    this._inOrder(this.root);
  }
  private _inOrder(treeNode: MyNode) {
    if (treeNode !== null) {
      this._inOrder(treeNode.left);
      console.log(treeNode.value);
      this._inOrder(treeNode.right);
    }
  }
}
