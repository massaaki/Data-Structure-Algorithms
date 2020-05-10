function Set() {
  var items = {}

  /**
   * Function: Add
   * Add a new item to set
   */
  this.add = function(value) {
    if(!this.has(value)){
      items[value] = value;
      return true;
    }
    return false;
  }


  /**
   * Function: Delete
   * Remove a item form set
   */
  this.delete = function(value) {
    if(this.has(value)) {
      delete items[value];
      return true;
    }
    return false;

  }


  /**
   * Function: Has
   * Retrieve if value exists in set
   */
  this.has = function(value) {
    return items.hasOwnProperty(value); //return bool
  }


  /**
   * Function: Clear
   * Clear set
   */
  this.clear = function() {
    items = {};
  }


  /**
   * Function: Size
   * Return set size
   */
  this.size = function() {
    return Object.keys(items).length;
  }


  /**
   * Function: Values
   * Return array with all values of set
   */
  this.values = function() {
    let values = [];
    let keys = Object.keys(items);

    for(let i = 0 ; i < keys.length ; i++) {
      values.push(items[keys[i]]);
    }
    return values;
  }
}


/**
 * Example usage
 */
let set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);

console.log(set.values());
console.log(set.size());


console.log('deleting value 4');
set.delete(4);
console.log(set.values());
console.log(set.size());
console.log(set.has(2));
console.log(set.has(4));