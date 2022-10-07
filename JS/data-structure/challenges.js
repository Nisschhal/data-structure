// convert the O(n**2) to O(2n) == O(n);

// Coding interview main question is to not sove the problem it is to solve problem with efficieny, or convert the problem into more efficent solution/s.

// in the given two array check if atleast a item is same

// O(n**2) ways
const array1 = [2, 4, 5];
const array2 = [5, 3, 1];

// loop through each item at first array and nest the loop to check each item in second array

function checkMatch(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) return true;
    }
  }
  return false;
}

// to get the O(2n);

function checkMatchWithEfficient(a, b) {
  let aObj = {};
  for (let i = 0; i < a.length; i++) {
    aObj[a[i]] = true;
  }
  for (let i = 0; i < b.length; i++) {
    if (aObj[b[i]]) return true;
  }
  return false;
}
