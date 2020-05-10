function DoublyLinkedList() {
  /**
   * Node with element and pointer
   */
  let Node = function(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }


  let length = 0;
  let head = null;
  let tail = null;

  /**
   * Method Append
   * Add element in linked list
   */
  this.append = function(element) {
    let node = new Node(element);
    let current; 

    if(head === null) {
      head = node;
      tail = node;
    } else {
      current = head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
      tail = node;
    }
    length++;
  }

  /**
   * Method: Insert
   * Add some node in specific position
   */
  this.insert = function (position, element) {
    if( position >= 0 && position <= length ) {
      let node = new Node(element);
      let current = head;
      let previous;
      let index = 0;

      if ( position === 0 ) {
        if ( !head ) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if( position === length ) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while( index++ < position ) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
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
    if( position >= 0 && position < length) {
      let current = head;
      let previous;
      let index = 0;

      if( position === 0 ) {
        head = current.next;

        if( length === 1 ) {
          tail = null; 
        } else {
          head.prev = null;
        }
      } else if( position === length-1 ) {
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while(index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
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
var dll = new DoublyLinkedList();
dll.append('Test 01');
dll.append('Test 02');
dll.append('Test 03');
dll.insert(0, 'New 01')
dll.insert(3, 'New 02')
dll.insert(4, 'New 03')
dll.print();

dll.removeAt(0);
dll.print();
dll.removeAt(4);
dll.print();
dll.removeAt(2);
dll.print();
