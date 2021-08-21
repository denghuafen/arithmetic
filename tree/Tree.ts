export default class Tree {
  root: MyNode;
  public preOrder() {
    this._preOrder(this.root);
  }
  private _preOrder(treeNode: MyNode) {
    if (treeNode !== null) {
      console.log(treeNode.value);
      this._preOrder(treeNode.left);
      this._preOrder(treeNode.right);
    }
  }

  public postOrder() {
    this._postOrder(this.root);
  }
  private _postOrder(treeNode: MyNode) {
    if (treeNode !== null) {
      this._postOrder(treeNode.left);
      this._postOrder(treeNode.right);
      console.log(treeNode.value);
    }
  }
}
