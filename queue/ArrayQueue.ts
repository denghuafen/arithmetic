class ArrayQueue {
  head = 0;
  tail = 0;
  items = [];
  length = 0;
  enqueue(item: number) {
    this.items[this.tail++] = item;
    this.length++;
    return item;
  }
  dequeue() {
    if (this.length === 0) return null;
    this.length--;
    const item = this.items[this.head];
    this.head++;
    // 表示出完了
    if (this.head === this.tail) {
      this.head = this.tail = 0;
    }
    return item;
  }

  size() {
    return this.length;
  }

  // 查看队头元素
  peek() {
    return this.items[this.head];
  }
  print() {
    let str = "";
    console.log(this.head);
    for (let i = this.head; i < this.tail; i++) {
      str += this.items[i] + "---";
    }
    console.log(str);
  }
}
