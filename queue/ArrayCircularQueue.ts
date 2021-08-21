class ArrayCircularQueue {
  capacity: number;
  queue: number[];
  head: number;
  tail: number;
  count: number;
  constructor(k: number) {
    this.capacity = k;
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }
  // 入队
  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    this.queue[this.tail] = value;
    this.tail = (this.tail + 1) % this.capacity;
    this.count++;
    return true;
  }

  deQueue(): boolean {
    // 队空
    if (this.isEmpty()) return false;
    this.count--;
    this.head = (this.head + 1) % this.capacity;
    return true;
  }

  front(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[this.head];
  }

  rear(): number {
    if (this.isEmpty()) return -1;
    if (this.count !== 0 && this.tail === 0)
      return this.queue[this.capacity - 1];
    return this.queue[this.tail - 1];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  isFull(): boolean {
    return this.count === this.capacity;
  }
}
