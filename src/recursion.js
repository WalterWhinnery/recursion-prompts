/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  // i: variable n which should be a number
  // o: factorial result of multiplying that number by one less until 1
  // ec: neg numbers and non-numbers return null
  // handle non-number edge cases
  if (typeof n !== 'number') {
    return null;
  }
  // handle non-positive numbers
  if (n < 0) {
    return null;
  }
  // handle 0
  if (n === 0) {
    return 1;
  }
  // recursive loop: return n * factorial call for n - 1. Limit of zero already established by prior statement
  return (n * factorial(n - 1));

};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  // i: variable-length array of positive and/or negative numbers
  // o: sum of those numbers
  // ec: subtract negative numbers from sum, empty array returns 0
  // edge case of empty arr
  if (array.length === 0) {
    return 0;
  }
  // base case of single item array
  if (array.length === 1) {
    // returns value at index 0, positive or negative
    return array[0];
  }
  if (array.length > 1) {
    // adds value of index 0 to recursive call for array[0] by slicing first number off until length === 1
    return array[0] + sum(array.slice(1));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // i: array of arrays
  // o: sum of all elements in all arrays
  // ec: negative numbers, empty arrays, do NOT mutate array

  // deal with edge case of empty array
  if (array.length === 0) {
    return 0;
  }
  // if: define base case of array.length === 1 && array[0] not an array
  if (array.length === 1) {
    // check if array
    if (Array.isArray(array[0])) {
      // returns sum on inner array
      var sum = 0;
      for (var i = 0; i < array[0].length; i++) {
        var curIndex = parseInt(array[0][i]);
        sum += curIndex;
      }
      return sum;
    // else return array[0]
    }
    return array[0];
  }
  // if: length longer than 1 and array[0] is an array
  if (Array.isArray[array[0]]) {
    // returns sum of inner array
    var sum = 0;
    for (var i = 0; i < array[0].length; i++) {
      var curIndex = parseInt(array[0][i]);
      sum += curIndex;
    }
    return sum + arraySum(array.slice(1));
  }

  // if not array, add array[0] value to sum(array.slice(1))
  return (array[0] + arraySum(array.slice(1)));
};

// 4. Check if a number is even.
var isEven = function(n) {
  // i: single integer value pos or neg
  // o: boolean true if even, false if odd
  // ec: work with negative numbers, use recursion
  // get absolute value of n
  n = Math.abs(n);
  // check if n is greater than 1, call isEven on (n - 2)
  if (n > 1) {
    return isEven(n - 2);
  }
  // if odd, n === 1, return false, if even, n === 0, returns true
  return n === 0;
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // i: number n
  // o: sum of numbers until n
  // ec: take negative numbers
  // base case of reaching zero
  if (n >= -1 && n <= 1) {
    return 0;
  }
  // determine if positive or negative and if at the minimum cutoff for results !== 0
  if (n === 2) {
    // return n - 1
    n = n - 1;
    return n
  // if n > 2
  } else if (n > 2) {
    // subtract one from n
    // return n + sumBelow(n - 1)
    n = n - 1;
    return (n + sumBelow(n));
  // if n equal to -1
  } else if (n === -2) {
    n = n + 1;
    // return n
    return n;
  // if n < -1
  } else {
    // add one to n
    // return n - sumBelow(n + 1)
    n = n + 1
    return (n + sumBelow(n));
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  // i: two number inputs
  // o: array of integers between the two
  // ec: x === y empty array, should work if x > y
  // normal order and has middle numbers
  if ((x < y) && ((y - x) > 1)) {
    // if only one middle number
    if ((y - x) === 2) {
      return [x + 1];
    // if multiple
    } else {
      // recursive call to array built above during the final recursive call
      var arrRange = range(x, (y - 1));
      // push last middle number (reverse order so built inside out)
      arrRange.push(y - 1);
      // return completed array
      return arrRange;
    }
  // if inverted input order and has middle numbers
  }
  if ((x > y) && ((x - y) > 1)) {
    // if only one middle number remaining
    if (x - y === 2) {
      // subtract since all middle numbers are less than x
      return [x - 1];
    } else {
      // recursive call for array built above, shrinking from end
      var reverseRange = range(x, (y + 1));
      // push last number first
      reverseRange.push(y + 1);
      return reverseRange;
    }
  } else {
    // return empty array for care of base case of no middle integers
    return [];
  }
};


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // i: two integers, base number and exponent (number of times you multiply number by itself)
  // o: result of number ^ exp
  // ec: no calls, handle 0, 1, and pos/neg numbers
  // handle base case of exp = 0 and return 1
  if (exp === 0) {
    return 1;
  }
  // handle even cases with recursive division of the exponent
  if ((exp % 2 === 0) && (exp > 0)) {
    if (exp === 2) {
      // return base mult by itself (4)
      return base * base;
    } else {
      // return base multiplied by 2 multiplied by recursive call to function with exponent divided by 2
      return ((base * base) * exponent(base, (exp / 2))); // 16
    }
  // handle odd cases with recursive subtraction from the exponent
  } else if ((exp % 2 === 1) && (exp > 0)) {
    if (exp === 1) {
      return base // 2
    } else {
      return (base * (exponent(base, exp - 1))); // 8
    }
  // handle negative cases using 1 divided by a recursive call to a negative version of the exponent
  } else {
    return (1 / exponent(base, -(exp)));
    console.log((1 / exponent(base, -(exp))))
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // i: integer
  // o: boolean based on if power of 2
  // ec: numbers smaller and larger than 2, no negative numbers
  // base case of 2 power of itself
  // handle numbers smaller and larger than 2
  // base case of n === 2
  if (n === 2) {
    return true
  // if number larger or = than nearest multiple of 2 subtact next power from current
  } else if (n >= 4) {
    return powerOfTwo((n - n / 2));
  // handle nearest lower 1 and fractions that are power of 2, multiply by 2
  } else if ((n <= 1) && (n > 0)) {
    return powerOfTwo(n * 2);
  // else false
  } else {
    return false;
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
