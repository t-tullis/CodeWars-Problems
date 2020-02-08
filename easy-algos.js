// PROBLEM 1

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// function squareDigits(num){
//     //may the code be with you
//      let convertNum = String(num)
//      let numArr = [];
//      for(let i = 0; i < convertNum.length; i++){
//          let convertAndSquare = Number(convertNum[i] * convertNum[i])
//          numArr.push(convertAndSquare)
//      }
//      return Number(numArr.join(''))
//   }

//   console.log(squareDigits(9119))

// PROBLEM 2 "Confirm Ending"

// function solution(str, ending){
        //Solution 1
//     // TODO: complete
//     let string = ''
//     for(let i = str.length - ending.length; i <= str.length - 1; i++){
//       string += str[i] 
//     }
//     console.log(string)
//         if(string === ending){
//             return true 
//         }else{
//             return false
//         }
//   }
        
        // Solution 2
// // return str.endsWith(ending)
// // }

//   console.log(solution('abcde', 'cdea'))

// Problem 3 "Sum smallest Numbers"

// function sumTwoSmallestNumbers(numbers) {  
//     //Code here
//     let sortedNums = numbers.sort(function(a, b){return a - b})
//     return sortedNums[0] + sortedNums[1]
// }
  

//   console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))

//Problem 4
// function sortByLength (array) {
//         // Return an array containing the same strings, ordered from shortest to longest
//         let shortToLong = array.sort((a,b) => {
//                 return a.length - b.length
//         })

//         return shortToLong
// };

//       console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))

//Problem 5
// function oddOrEven(array) {
//   //enter code here
//   let sum = 0;
//   for(i = 0; i < array.length; i++){
//       sum += array[i]
//   }
//   if(sum % 2 === 0){
//           return 'even'
//   }else{
//           return 'odd'
//   }
// }

// console.log(oddOrEven([2, 5, 34, 6]))


//Problem 6
//Checks to see if an array contains duplicates 
// var containsDuplicate = function(nums) {
//         if(nums.length <= 1 ){
//                 return false
//         }
        
//         let sortedNums = nums.sort(function(a,b) {return a - b})
//         console.log(sortedNums)
//         for(i = 0, j = 1; i < sortedNums.length, j < sortedNums.length; i+=1, j+=1){
//                 if(sortedNums[i] === sortedNums[j]){
//                         return true
//                 }
//         }
//         return false
// };

// console.log(containsDuplicate([]))

//Problem 7
//Searched through an array to see if a target number was contained in it.
// var search = function(nums, target) {
//         for(let i = 0; i < nums.length; i++){
//                 if(nums.includes(target)){
//                         return nums.indexOf(target)
//                 }
//         }
// };

// console.log(search([-1,0,3,5,9,12], 9))

//Problem 8

/*
Example:
Input: A = [1,2,0,0], K = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234
*/

//Problem 9
// var addToArrayForm = function(A, K) {
//         let joinedArr = Number(A.join(''))
//         let result = joinedArr + K
//         return String(result).split('')
// };

// console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516))

//Problem 10
//Rotating an array
// var rotate = function(nums, k) {
//         for(let i = 0; i < k; i++){
//                 let poppedVal = nums.pop()
//                 nums.unshift(poppedVal)
//         }
//         return nums
// };

// console.log(rotate([1,2,3,4,5,6,7], 3))

//Problem 11 
//Move Zeros to end of array in-place 
// var moveZeroes = function(nums) {
//     for(let i = 0; i < nums.length; i++){
//             if(nums[i] === 0){
//                     let index = nums.indexOf(nums[i])
//                     let zero = nums.splice(index, 1)
//                     nums.push(zero[0])
//             }
//     }
//     return nums
// };

// console.log(moveZeroes([0,1,0,3,12]))

//NOT DONE
// var rob = function(nums) {
//     if(nums.length === 1){
//         return nums[0]
//     }
//     if(nums.length === 2){
//         return Math.max(...nums)
//     }

// let money = 0;
// for(let i = 0; i < nums.length; i+=2){
//     money += nums[i]
// }
//     return money
// };

// console.log(rob([1,3,1]))

//Problem 12
// function factorial(num){
//         //Base case if num <= 0 return 0
//         if(num <= 0){
//                 return 0
//         }
//         //If num is equal to 1 return 1
//         if(num === 1){
//                 return 1
//         }
//         console.log(num)
//         return num * factorial(num - 1)
// }

// console.log(factorial(4))

//Problem 13
// function getSecondLargest(arr){
//         let newArr = removeDuplicatesAndSort(arr)
//         return newArr[newArr.length - 2]
// }

// function removeDuplicatesAndSort(array) {
//         let filteredArr = array.filter((a, b) => array.indexOf(a) === b)
//         return filteredArr.sort((a,b) => {return a - b})
// };



// console.log(getSecondLargest([2,3,6,6,5]))

// function reverseString(s) {
//         try{
//             console.log(s.split('').reverse().join(''))
//         }
//         catch(ex){
//                 console.log(ex.message)
//         }
//         finally{
//                 console.log(s)
//         }
//     }

//     reverseString(1234)

// function isPositive(a) {
//         try{
//                 if(a === 0){
//                         throw "Zero Error";
//                 }    
//                 if(a < 0){
//                         throw "Negative Error";
//                 }
//                 return 'YES'
//         }
//         catch(error){
//                 return error
//         }
// }

//     console.log(isPositive(0))

// function Rectangle(a, b) {
//         let rectObj = {
//             length: a,
//             width: b,
//             perimeter: a + a + b + b,
//             area: a * b
//         }
//         return rectObj
//     }


//     Rectangle(4, 5)

// function countObjs(objs){
//         let count = 0;

//         for(let i = 0; i < objs.length; i++){
//                 if(objs[i].x === objs[i].y){
//                         count++
//                 }
//         }
//         return count
// }

// console.log(countObjs( [{x:1 , y:1}, {x:2, y:3},{x:3, y:3},{x: 3, y:4},{x:4, y:5}]))


// class Polygon{
//         constructor(sides){
//             this.sides = sides
//         }
//  }

//  let newPoly = new Polygon([2,3,5])

//  let perimeter = 0;
//  for(let i = 0; i < newPoly.sides.length; i++){
//          perimeter += newPoly.sides[i]
//  }

//  console.log(perimeter)

//Problem 14

// var merge = function(nums1, m, nums2, n) {
//         if(m + n <= nums1.length){
//                 nums1.splice(m, n, ...nums2)
//                 return nums1.sort((a , b) => { return a - b})
//         }else{
//                 return 'Not enough space'
//         }
// };

// console.log(merge([1,2,3,0,0,0], 3, [2,5,6,3], 3))

//Problem 15
// var fizzBuzz = function(n) {
//         let arr = []
//         for(let i = 1; i <= n; i++){
//                 if(i % 3 === 0 && i % 5 === 0){
//                     arr.push("FizzBuzz")
//                 }else if(i % 3 === 0){
//                         arr.push("Fizz")
//                 }else if(i % 5 === 0){
//                         arr.push("Buzz")
//                 }else{
//                         arr.push(String(i))
//                 }
//         }
//         return arr
// };
// console.log(fizzBuzz(15))

//Problem 16 CODE SIGNAL
// function adjacentElementsProduct(inputArray) {
//         let largestSum = 0;
//         for(let i = 0, j = 1; i < inputArray.length, j < inputArray.length; i++, j++){
//                 if(largestSum < inputArray[i] * inputArray [j]){
//                         largestSum = inputArray[i] * inputArray[j]
//                 }
//         }
//         return largestSum
// }

// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))


