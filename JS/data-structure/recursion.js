class Recursion {
  factorial(num) {
    if (num === 1) return 1;
    return num * this.factorial(num - 1);
  }
}

const myRecur = new Recursion();
const recuVal = myRecur.factorial(3);
console.log(recuVal);
