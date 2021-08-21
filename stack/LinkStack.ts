class LinkStack {
  head = null;
  tail = null;
  length = 0;
  // 入栈
  push(item: number) {
    const node = new MyNode(item);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }
  // 出栈
  pop() {
    if (!this.tail) return null;
    if (this.tail === this.head) return this.tail.value;
    const tailNode = this.tail;
    let curNode = this.head;
    while (curNode) {
      if (curNode.next === this.tail) {
        this.tail = curNode;
        break;
      } else {
        curNode = curNode.next;
      }
    }
    this.length--;
    this.tail.next = null;
    return tailNode.value;
  }
  // 查看栈顶元素
  peek() {
    // console.log(this.tail)
    return this.tail.value;
  }
  size() {
    return this.length;
  }

  print() {
    let curNode = this.head;
    let str = "";
    while (curNode) {
      // console.log(curNode.value + '--')
      str += `${curNode.value}--`;
      curNode = curNode.next;
    }
    console.log(str, "...");
  }
}
