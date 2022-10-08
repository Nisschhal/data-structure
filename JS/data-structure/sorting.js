class Sorting {
  /*
    - sorting can be done in numerious ways but the effieciency might differ

    -- bubble sort: // sorting/bubbling each item by comparing adjacent item
        - outerLoop: i = array.length - 1 to 1 // one less then array length
        - innerLoop: j = 0 to j < i // index at 0 so less than i 
            -- compare the the item with index j and j+1
                j > j + 1, switch the place // for ascending order
                j < j + 1, switch the place // for descending order
    
    -- selection sort: // select an item index for min/max
        - let min;
        - outerLoop: i = 0 to < array.length - 1 ; // one less than actual length
          min = i
        - innerLoop: j = i+1 to < array.length
          if (arr[j] < arr[min]) min = j;
        
        if (i != min) switch the value between i and min index


     -- insertion sort: // go one step ahead and compare the item with each item backware and switch backware if item in smaller
        - let temp;
        - outerLoop: i = 1 to < array.length
          - temp = arry[i] // store the item
          - nested loop: j = i-1; temp > array[j]; j-- // backward and check condition 
            array[j+1] = array[j]
          array[j+1] = temp // j+1 because j-- will cause index to go one step back

                */

  //   bubbleSort(array, order) {
  //     for (let i = array.length - 1; i > 0; i--) {
  //       for (let j = 0; j < i; j++) {
  //         if (order === 0) {
  //           if (array[j] < array[j + 1]) {
  //             const temp = array[j];
  //             array[j] = array[j + 1];
  //             array[j + 1] = temp;
  //           }
  //         } else if (order === 1) {
  //           if (array[j] > array[j + 1]) {
  //             const temp = array[j];
  //             array[j] = array[j + 1];
  //             array[j + 1] = temp;
  //           }
  //         }
  //       }
  //     }
  //   }

  bubbleSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (array[j] < array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }

  selectionSort(array) {
    let minIndex;
    for (let i = 0; i < array.length - 1; i++) {
      minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex != i) {
        let temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;
      }
    }
    return array;
  }

  insertionSort(array) {
    let temp;
    for (let i = 1; i < array.length; i++) {
      temp = array[i];
      for (var j = i - 1; array[j] > temp && j > -1; j--) {
        array[j + 1] = array[j];
      }
      array[j + 1] = temp;
    }
  }

  /*

  merget(leftArray, rightArray): // MERGE THE LEFT AND RIGHT ARRAY BY COMPARING
  - create an empty array to combine result
  - create indexes for left and right array
  - loop only with conditions of while i < leftArray.length and j < rightArray.length
    // compare and insert small one to combinedArray/result array
    -- if (leftArrray[i] < rightArray[j]:
      - insert leftArray[i] to combined and increment i
    -- else insert rightArray[j] to combined and increment j

  // last check if item left in the left or right array
  - loop with condition if item left in left array: while i < leftArray.length
      --insert it into combined array and increment i
  - loop with conditin if item left in the right array: while j < rightArray.length
      --insert it into combined array and increment 1
  - return combinedArray/resultArray

  */

  merge(leftArray, rightArray) {
    let combined = [];
    let i = 0;
    let j = 0;
    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] < rightArray[j]) {
        combined.push(leftArray[i]);
        i++;
      } else {
        combined.push(rightArray[j]);
        j++;
      }
    }
    while (i < leftArray.length) {
      combined.push(leftArray[i]);
      i++;
    }
    while (j < rightArray.length) {
      combined.push(rightArray[j]);
      j++;
    }
    return combined;
  }

  /* 
  mergeSort(array): // SORT THE GIVEN ARRAY BY SPLITING INTO SINGLE ITEM AND MERGING THEM ONE BY ONE using recursion
  let mid = Math.floor(array.length/2);
  let leftArray = array.slice(0, mid)
  let rightArray = array.slice(mid)

  return merge(mergeSort(leftArray), mergeSort(rightArray));

  */

  mergeSort(array) {
    if (array.length === 1) return array;
    let mid = Math.floor(array.length / 2);
    let leftArray = array.n(0, mid);
    let rightArray = array.slice(mid);

    return this.merge(this.mergeSort(leftArray), this.mergeSort(rightArray));
  }
}

const mySort = new Sorting();
const arry1 = [21, 11, 99, 1, 4, 0];
const arry = [21, 11, 99, 1, 4, 0];
// mySort.bubbleSort(arry1);
// console.log(arry1);
// console.log(3);
// mySort.selectionSort(arry);

// console.log(arry);

// mySort.insertionSort(arry);
console.log(mySort.mergeSort(arry));
// console.log(arry);
