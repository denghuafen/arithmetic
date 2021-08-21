import MyNode from "../MyNode";

class LinkCircularQueue {
  head: MyNode | null;
  tail: MyNode | null;
  capacity: number;
  count: number;
  constructor(k: number) {
    this.head = null;
    this.tail = null;
    this.capacity = k;
    this.count = 0;
  }
  createNode(value) {
    return {
      value: value,
      next: null,
    };
  }
  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    const node = this.createNode(value);
    if (this.count === 0) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.count++;
    return true;
  }

  /**
   * @return {boolean}
   */
  deQueue(): boolean {
    if (this.isEmpty()) return false;
    const nextHead = this.head.next;
    this.head = nextHead;
    this.count--;
    return true;
  }

  front(): number {
    if (this.isEmpty()) return -1;
    return this.head.value;
  }

  rear(): number {
    if (this.isEmpty()) return -1;
    return this.tail.value;
  }

  /**
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.count === 0;
  }

  /**
   * @return {boolean}
   */
  isFull(): boolean {
    return this.count === this.capacity;
  }
}
