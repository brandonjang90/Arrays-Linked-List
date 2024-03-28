/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode
    }
    else{
    this.tail.next = newNode;
    this.tail = newNode;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.head){
      throw new Error('List is Empty!');
    }
    let prevNode = null;
    let currentNode = this.head;

    while(currentNode.next){
    prevNode = currentNode;
    currentNode = currentNode.next;
    }

    if (prevNode === null){
      this.head = null;
    } else{
      prevNode.next = null;
    }
    return currentNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.head){
      throw new Error('List is Empty!');
    }
    const val = this.head.val;
    this.head = this.head.next;
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx < 0){
      throw new Error('No negative index!');
    }

    let currentNode = this.head;
    let currentIndex = 0;
    while(currentNode !== null && currentIndex < idx){
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentIndex !== idx || currentNode === null){
      throw new Error('Index out of bounds');
    }  
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx < 0 || idx>= this.length()){
      throw new Error('Invalid index!');
    }

    let currentNode = this.head;
    for (let i = 0; i < idx; i++){
      currentNode = currentNode.next;
    }
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length()) {
      throw new Error('Invalid index');
      }

    if (idx === 0) {
      this.unshift(val);
      } else {
      let currentNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
          currentNode = currentNode.next;
      }
      const newNode = new Node(val);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      }
  }


  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
      if (idx < 0 || idx >= this.length()) {
          throw new Error('Invalid index');
      }

      if (idx === 0) {
          return this.shift();
      }

      let currentNode = this.head;
      let prevNode = null;
      for (let i = 0; i < idx; i++) {
          prevNode = currentNode;
          currentNode = currentNode.next;
      }

      prevNode.next = currentNode.next;
      return currentNode.val;
  }

  // Helper method to calculate the length of the linked list
  length() {
      let count = 0;
      let currentNode = this.head;
      while (currentNode) {
          count++;
          currentNode = currentNode.next;
      }
      return count;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return 0;
      }

    let sum = 0;
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      sum += currentNode.val;
      count++;
      currentNode = currentNode.next;
      }

    return sum / count;
  }

}
module.exports = LinkedList;
