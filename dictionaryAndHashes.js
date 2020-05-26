function Dictionary() {
  var items = {};


  /**
   * Function: Set
   * add new item in  dictionary
   */
  this.set = function(key, value)  {
    items[key] = value;
  }

  /**
   * Function: Delete
   * remove from dictionary
   */
  this.delete = function(key) {
    if(this.has(key)) {
      delete items[key];
      
      return true;
    }
    return false;
  }

  /**
   * Function: Has
   * verify if key exists
   */
  this.has = function(key) {
    return items.hasOwnProperty(key);
  }

  /**
   * Function: Get
   * retrieve dictionary value from key
   */
  this.get = function(key) {
    return this.has(key) ? items[key] : undefined;
  }
  

  /**
   * Function: Clear
   * remove all items in dictionary
   */
  this.clear = function() {
    items = {};
  }

  /**
   * Function: Size
   * return quantity elements in dictionary
   */
  this.size = function() {
    return Object.keys(items).length;
  }

  /**
   * Function: Keys
   * retrieve all keys in dictionary
   */
  this.keys = function() {
    return Object.keys(items);
  }

  /**
   * Function: Values
   * retrieve all values in dictionary
   */
  this.values = function() {
    var values = [],
    keys = Object.keys(items);

    for(let i = 0 ; i < keys.length ; i++) {
      values.push(items[i]);
    }

    return values;
  }

  this.getItems = function() {
    return items;
  }


}



var dic = new Dictionary();
dic.set('key01', 'value01');
dic.set('key02', 'value02');
dic.set('key03', 'value03');
dic.set('key04', 'value04');

console.log(dic.getItems());

dic.delete('key02')

console.log(dic.getItems());


var obj = {
  'key04' : 'value04',
  'key05' : 'value05',
  'key06' : 'value06',
};



console.log(obj['key05']);