function LinkedList() {
  /**
   * Node with element and pointer
   */
  let Node = function(element) {
    this.element = element;
    this.next = null;
  }


  let length = 0;
  let head = null;

  /**
   * Method Append
   * Add element in linked list
   */
  this.append = function(element) {
    let node = new Node(element);
    let current; 

    if(head === null) {
      head = node;
    } else {
      current = head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }
    length++;
  }

  /**
   * Method: Insert
   * Add some node in specific position
   */
  this.insert = function (position, element) {
    if(position >= 0 && position <= length) {
      let node = new Node(element);
      let current = head;
      let previous;
      let index = 0;

      if(position === 0) {
        node.next = current;
        head = node;
      } else {
        while(index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    } else {
      return false;
    }

  }

  /**
   * Method: removeAt
   * Remove some element in specific position
   */
  this.removeAt = function(position) {
    if(position > -1 && position < length) {
      let current = head;
      let previous;
      let index = 0;

      if(position === 0) {
        head = current.next;
      } else {
        while(index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;
      return current.element;

    } else {
      return null;
    }
  }

  /**
   * Function: Remove
   * Remove node from element value
   */
  this.remove = function(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  /**
   * FUnction: indexOf
   * Returns specific element value position
   */
  this.indexOf = function(element) {
    let current = head,
    index = 0;

    while(current) {
      if(element === current.element) {
        return index;
      } else {
        index++;
        current = current.next;
      }
    }
    return -1;
  }

  /**
   * Function: isEmpity
   * Return if linked list is empty
   */
  this.isEmpty = function() {
    return length === 0;
  }

  /**
   * Function size
   * Return length of linked list
   */
  this.size = function() {
    return length;
  }

  /**
   * Function: GetHead
   * Return first node
   */
  this.getHead = function() {
    return head;
  }

  /**
   * Function: ToString
   * Return all element in linked list.
   */
  this.toString = function() {
    // converte para a string
    let current = head,
    string = '';

    while(current) {
      string += current.element + ' ';
      current = current.next;
    }

    return string;

  }

  /**
   * Function: Print
   * Print current linked list
   */
  this.print = function() {
    console.log(this.toString());
  }

}

/**
 * Example usage
 */

let ll = new LinkedList();
  ll.append('Test 01');
  ll.append('Test 02');
  ll.append('Test 03');

ll.print();
// ll.removeAt(1);
// ll.print();

ll.insert(2, "Test 04");
ll.print();

console.log(ll.indexOf("Test 04"));
console.log(ll.remove('Test 01'));
ll.print();