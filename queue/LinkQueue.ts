import MyNode from "../MyNode";

class LinkQueue {
  head = null;
  tail = null;
  length = 0;
  enqueue(item: number) {
    const node = new MyNode(item);
    this.head ? (this.tail.next = node) : (this.head = node);
    this.tail = node;
    this.length++;
  }
  dequeue() {
    if (!this.head) return null;
    let nextHead = this.head.next;
    this.head.next = null;
    this.head = nextHead;
    // 表示出队出完了
    if (this.head === null) {
      this.tail = this.head;
    }
    this.length--;
  }

  size() {
    return this.length;
  }

  // 查看队头元素
  peek() {
    return this.head ? this.head.value : null;
  }
  // 输出队列
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
