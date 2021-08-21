class ArrayStack {
  head = 0;
  tail = 0;
  items = [];
  // 入栈
  push(item: number) {
    this.items[this.tail++] = item;
    return item;
  }
  // 出栈
  pop() {
    if (this.tail === 0) return null;
    return this.items[--this.tail];
  }
  // 查看栈顶元素
  peek() {
    return this.items[this.tail - 1];
  }
  size() {
    return this.tail;
  }
}
