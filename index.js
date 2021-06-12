class Stack {
  constructor() {
    this.items = [];
  }
  // Functions to be implemented
  // push(item)
  // pop()
  // peek()
  // isEmpty()
  // printStack()

  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length == 0) return 'Stack is Underflow';
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  //helper method
  isEmpty() {
    return this.items.length == 0;
  }

}

var st = new Stack();
st.push('1'); //add element at the end
st.push('2');
st.push('3');
console.log(st);

console.log(st.pop()); //removes last element and returns removes element

console.log(st.peek()); //returns last elements

console.log(st.isEmpty()); //returns true is stack is isEmpty
