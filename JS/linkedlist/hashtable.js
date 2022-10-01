class HashTable {
  /* 
    - create a hashTable with size, default 7
    - create an array,dataSet, with the given size in constructure
    - create a function to hash the key of key-value paried to save in array index
        --use certain formula to get the index within the range of array/size
    - set the key-value paired by hashing the key
        -- hash the key and set in the given index of array
        -- if there is an item already create an array and push in it.
    - get the value from array by hashing the key
        -- if value is in inner array then loop through the array and evaluate the match


    */
  constructor(size = 7) {
    this.dataSet = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // 23 is a prime number to give random number, not necessarily need to be 23
      // % size/dataset.length always give the reminder within 0...6
      hash = (hash + key.charCodeAt(i) * 23) % this.dataSet.length;
    }

    return hash;
  }
  set(key, value) {
    // create a hash/get the hashed index from key
    const index = this._hash(key);

    // if array at index is empty then create an array to prevent collision

    if (!this.dataSet[index]) {
      this.dataSet[index] = [];
    }
    // push the key,value pair in array at hashed index
    this.dataSet[index].push([key, value]);
  }

  get(key) {
    /*
    - get the hashed index to search in array/dataset
    - if there is data at hashed index
        -- there must be array so loop that inner array.
        -- compare the key with each item in inner array and return value,  if found

*/

    const index = this._hash(key);
    if (this.dataSet[index]) {
      for (let i = 0; i < this.dataSet[index].length; i++) {
        if (this.dataSet[index][i][0] === key) {
          return this.dataSet[index][i][1];
        }
      }
    }
    return undefined;
  }
}
