class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    add(element) {
      const node = new Node(element);
      let current;
  
      if (this.head === null) {
        this.head = node;
      } else {
        current = this.head;
  
        while (current.next) {
          current = current.next;
        }
  
        current.next = node;
      }
      this.size++;
    }
  
    insertAt(element, index) {
      if (index < 0 || index > this.size) {
        return false;
      }
  
      const node = new Node(element);
      let current = this.head;
      let previous;
  
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let i = 0;
        while (i < index) {
          previous = current;
          current = current.next;
          i++;
        }
        node.next = current;
        previous.next = node;
      }
      this.size++;
    }
  
    removeFrom(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
  
      let current = this.head;
      let previous;
  
      if (index === 0) {
        this.head = current.next;
      } else {
        let i = 0;
        while (i < index) {
          previous = current;
          current = current.next;
          i++;
        }
        previous.next = current.next;
      }
      this.size--;
      return current.element;
    }
  
    removeElement(element) {
      let current = this.head;
      let previous = null;
  
      while (current !== null) {
        if (current.element === element) {
          if (previous === null) {
            this.head = current.next;
          } else {
            previous.next = current.next;
          }
          this.size--;
          return current.element;
        }
        previous = current;
        current = current.next;
      }
      return null;
    }
  
    indexOf(element) {
      let count = 0;
      let current = this.head;
  
      while (current !== null) {
        if (current.element === element) {
          return count;
        }
        count++;
        current = current.next;
      }
  
      return -1;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    size() {
      return this.size;
    }
  
    printList() {
      let current = this.head;
      let str = "";
      while (current) {
        str += current.element + " ";
        current = current.next;
      }
      console.log(str);
    }
  }

  module.exports =LinkedList;
   