// const performance = require('perf_hooks').performance;

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

const charCount = (str) => {
    let obj = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

const isAlphaNumeric = (char) => {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true;
}

// charCodeAt(0);

console.log(charCount("Hi There tom42069"));