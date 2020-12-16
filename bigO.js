// const performance = require('perf_hooks').performance;

const con = console.log;

// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

// function findNemo(array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found Nemo')
//     }
//   }
//   let t1 = performance.now();
//   console.log('call to find Nemo took ' + (t1 - t0) + ' milliseconds');
// };

// findNemo(everyone); 

// const boxes = [0, 1, 2, 3, 4, 5];

// const logFirstTwoBoxes = (boxes) => {
//   console.log(boxes[0]); // O(1)
//   console.log(boxes[1]); // O(1)
// }

// logFirstTwoBoxes(boxes); // O(2)



// const addUpTo = (n) => {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }
//   return total
// }

// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time elapsed: ${(t2 - t1 / 1000)} seconds.`);

// const addUpTo = (n) => {
//   return n * (n + 1) / 2; 
// }
// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time elapsed: ${(t2 - t1 / 1000)} seconds.`); // O(1)

// const countUpAndDown = (n) => {
//   console.log("Going up");
//   for (let i = 0; i <= n; i++) {
//     console.log(i);
//   }
//   console.log("At the top! \nGoing down...");
//   for (let j = n - 1; j >= 0; j--) {
//     console.log(j);
//   }
//   console.log("At the bottom.") 
// }

// countUpAndDown(10); // O(n)

// const printAllPairs = (n) => {
//   for (i = 0; i <= n; i++) { 
//     for (j = 0; j <= n; j++) { 
//       console.log(i, j);
//     }
//   }
// }

// printAllPairs(2); // O(n2)

// const logAtLeast5 = (n) => {
//   for (let i = 1; i <= Math.max(5, n); i++) {
//   console.log(i);
//   }
// }

// logAtLeast5(2); // O(n)

// const logAtMost5 = (n) => {
//   for (let i = 1; i <= Math.min(5, n); i++) {
//     console.log(i);
//   }
// }

// logAtMost5(2); // O(1)

// function sum(arr) => {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total =+ arr[i];
//   }
//   return total;
// } // O(1)

// function double(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(2 * arr[i]);
//   }
//   return newArr;
// } // O(n)

// function charCount(str) {
//     // make object to return at end
//     let result = {};
//     // loop over string, for each character
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         // if char is a number/letter AND is a key in object, add one to count
//         if (result[char] > 0) {
//             result[char]++;
//         // if the char is a number/letter AND not in object, add to object and set value to 1
//         } else {
//             result[char] = 1;
//         }
//     }
//         // if character is something else (space, punctuation, etc) don't do anything
//     // return object at end
//     return result;
// }

// console.log(charCount("Hi There tom"));

// const charCount = (str) => {
//     let obj = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             };
//         }
//     }
//     return obj;
// }

// console.log(charCount("Hi There tom"));

// const charCount = (str) => {
//     let obj = {};
//     for (let char of str) {
//         if (isAlphaNumeric(char)) {
//             char = char.toLowerCase();
//             obj[char] = ++obj[char] || 1;
//         }
//     }
//     return obj;
// }

// const isAlphaNumeric = (char) => {
//     let code = char.charCodeAt(0);
//     if (!(code > 47 && code < 58) && // numeric (0-9)
//         !(code > 64 && code < 91) && // upper alpha (A-Z)
//         !(code > 96 && code < 123)) { // lower alpha (a-z)
//         return false;
//     }
//     return true;
// }

// // charCodeAt(0);

// console.log(charCount("Hi There guy1211109"));


/////////////FREQUENCY COUNTER

// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if (correctIndex === -1) {
//             return false;
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex, 1)
//     }
//     return true;
// }

// console.log(same([1,2,3,2], [9,1,4,4]))

// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}
//     for (let val of arr1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//     }
//     for (let val of arr2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//     }
//     for (let key in frequencyCounter1) {
//         if (!(key ** 2 in frequencyCounter2)) {
//             return false;
//         }
//         if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//             return false;
//         }
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);
//     return true;
// }

// console.log(same([1,2,3,4], [1,4,9,16]));


/////////// ANAGRAMS

// const validAnagram = (str1, str2) => {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};
//     for (let val of str1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//     }
//     for (let val of str2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//     }
//     for (let key in frequencyCounter1) {
//         if (!(key in frequencyCounter2)) {
//             return false;
//         }
//         if (frequencyCounter2[key] !== frequencyCounter1[key]) {
//             return false;
//         }
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);
//     return true;
//   }
  
//   console.log(validAnagram("rat", "tar"));

// const validAnagram = (str1, str2) => {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     const lookup = {};
//     for (let i = 0; i < str1.length; i++) {
//         let letter = str1[i];
//         // if letter exists, ncrement, otherwise set to 1
//         lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     for (let i = 0; i < str2.length; i++) {
//         let letter = str2[i];
//         // cant find letter or letter is zero then its not an anagram
//         if (!lookup[letter]) {
//             return false;
//         } else {
//             lookup[letter] -= 1;
//         }
//     }
//     console.log(lookup);
//     return true;
// }

// console.log(validAnagram("cinema", "iceman"));


/////////MULTIPLE POINTERS

// const sumZero = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

// console.log(sumZero([-4,-3,-2,-1,0,1,2,5]));   ///// O(n2), space complexity - O(1)

// const sumZero = (arr) => {
//     let left = 0;
//     let right = arr.length -1;
//     while (left < right) {
//         let sum = arr[left] + arr[right];
//         if (sum === 0) {
//             return [arr[left], arr[right]];
//         } else if (sum > 0) {
//             right--;
//         } else {
//             left++;
//         }
//     }
// }

// console.log(sumZero([-4,-3,-2,-1,0,1,2,3,4]));  /////// time complexity - O(N), space complexity - O(1)


//////// COUNT UNIQUE VALUES

// const countUniqueValues = (arr) => {
//     let i = 0;
//     for (let j = 1; j < arr.length; j++) {
//         if(arr[i] !== arr[j]) {
//             i++;
//             arr[i] = arr[j];
//         }
//         // console.log(i,j);
//     }
//     return i + 1;
// }

// console.log(countUniqueValues([1,2,2,3,4,5,6,6,7,99,9,42,200]));


///////// SLIDING WINDOW

// const maxSubarraySum = (arr, num) => {
//     if (num > arr.length) {
//         return null;
//     }
//     let max = -Infinity;
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         temp = 0;
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j];
//         }
//         if (temp > max) {
//             max = temp;
//         }
//     }
//     return max;
// }

// console.log(maxSubarraySum([2,5,6,7,8,24,100,0,9], 3));

// const maxSubarraySum = (arr, num) => {
//     let maxSum = 0;
//     let tempSum = 0;
//     if (arr.length < num) {
//         return null;
//     }
//     for (let i = 0; i < num; i++) {
//         maxSum += arr[i];
//     }
//     tempSum = maxSum;
//     for (let i = num; i < arr.length; i++) {
//         tempSum = tempSum - arr[i - num] + arr[i];
//         maxSum = Math.max(maxSum, tempSum);
//     }
//     return maxSum;
// }

// console.log(maxSubarraySum([2,5,6,7,8,24,100,0,9], 3));


//////// DIVIDE AND CONQUER

// const search = (arr, val) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === val) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(search([2,4,6,8,10,12], 3)); //// linear search - O(N)

// const search = (arr, val) => {
//     let min = 0;
//     let max = arr.length - 1;

//     while (min <= max) {
//         let middle = Math.floor((min + max) / 2);
//         let currentElement = arr[middle];
//         if (arr[middle] < val) {
//             min = middle + 1;
//         } else if (arr[middle] > val) {
//             max = middle - 1;
//         } else {
//             return middle;
//         }
//     }
//     return -1;
// }

// console.log(search([2,4,6,8,10,12], 10)); /////// Log(N) - Binary Search


/////// RECURSION - a process (a function in this case) that calls itself

// const takeShower = () => {
//     return "Showering!";
// }

// const eatBreakfast = () => {
//     let meal = cookFood();
//     return `Eating ${meal}`;
// }

// const cookFood = () => {
//     let items = ["Oatmeal", "Eggs", "Protein Shake"];
//     return items[Math.floor(Math.random()*items.length)];
// }

// const wakeUp = () => {
//     takeShower();
//     eatBreakfast();
//     console.log("Ok ready for work!");
// }

// wakeUp();

// const countDown = (num) => {
//     if (num <= 0) {
//         console.log("All done");
//         return;
//     }
//     console.log(num);
//     num--;
//     countDown(num);
// }

// const countDown = (num) => {
//     for (let i = num; i > 0; i--) {
//         console.log(i);
//     }
//     console.log("All done");
// }

// console.log(countDown(5));

// const sumRange = (num) => {
//     if (num === 1) {
//         return 1;
//     }
//     return num + sumRange(num - 1);
// }; 

// console.log(sumRange(4));

///// ! = factorial // 4! = 4 * 3 * 2 * 1, 7! = 7 * 6 * 5 * 4 * 3 * 2 * 1, etc...


////// iterative solution
// const factorial = (num) => {
//     let total = 1;
//     for (let i = num; i > 0; i--) {
//         total *= i;
//     }
//     return total;
// }

// con(factorial(4)); 

////// recursive solution

// const factorial = (num) => {
//     if (num === 1) {
//         return 1;
//     }
//     return num * factorial(num - 1);
// }

// con(factorial(4));

/////helper method recursion

// const outer = (input) => {
//     let outScopedVariable = [];

//     const helper = (helperInput) => {
//         //modify the outerScopedVariable
//         helper(helperInput--)
//     }
//     helper(input)

//     return outScopedVariable;
// }

// const collectOddValues = (arr) => {
//     let result = [];

//     const helper = (helperInput) => {
//         if (helperInput.length === 0) {
//             return;
//         }
//         if (helperInput[0] % 2 !== 0) {
//             result.push(helperInput[0])
//         }
//         helper(helperInput.slice(1))
//     }
//     helper(arr);

//     return result;
// }

// con(collectOddValues([1,2,3,4,5,6,7,8,9]));

// const collectOddValues = (arr) => {
//     let newArr = [];

//     if(arr.length === 0) {
//         return newArr;
//     }
//     if (arr[0] % 2 !== 0) {
//         newArr.push(arr[0]);
//     }
//     newArr = newArr.concat(collectOddValues(arr.slice(1)));
//     return newArr;
// }

// con(collectOddValues([1,2,3,4,5,6,7,8,9]));

////// For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you dont have to mutate them. 
//// remember that strings are immutable so you will need to use methodds like slice, substr, or substring to make copues of strings
/// to make copies of objects, use Object.assign or the spread operator

