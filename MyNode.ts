export default class MyNode {
  value: number;
  left?: MyNode;
  right?: MyNode;
  next?: MyNode;
  children?: Array<MyNode>;
  constructor(value: number) {
    this.value = value;
  }
}
