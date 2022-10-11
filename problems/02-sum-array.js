/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15

MAKE A PLAN
  1.) base case: if(arr.length === 0) return arr[]
  2.) recursive step; stored the variable popped off => let num = arr.pop
  3.) call the function sumArr

***********************************************************************/

function sumArray(arr) {
  let num = arr.pop()
  if(arr.length === 0) return num
  return sumArray(arr) + num

}

console.log(sumArray([1, 2, 3])); //  6
console.log(sumArray([0, 1, -3])); //  -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15

/*
summArr([1, 2, 3]) ==> sumArr([1, 2, 3]) + 3
  sumArr([1, 2]) ==> summArr([1]) + 2
    sumArr([1]) ==>  1
  sumArr([1, 2]) ==> 1 + 2 = 3
sumArr([1, 2, 3]) ==> 3 + 3 = 6
  */

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
