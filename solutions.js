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

//HR Sock Merchent Problem  

//Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// function sockMerchant(n, ar) {
//         let pairs = 0; 
//         let sortedAr = ar.sort(function(a,b){return a - b})
//         console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n ${sortedAr}`)
        
//         for(let i = 0, j = 1; i <= sortedAr.length, j <= sortedAr.length; i += 2 , j += 2){
//                 if(sortedAr[i] === sortedAr[j]){
//                 console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n ${ar[i]}, ${ar[j]}`)   
//                 pairs += 1
//             }
//         }
//         return pairs
//     }

//     console.log(sockMerchant(20, [4,5,5,5,6,6,4,1,4,4,3,6,6,3,6,1,4,5,5,5]))

//Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// var addStrings = function(num1, num2) {
//         // let sum = Number(num1) + Number(num2)
//         return num1 + num2
//     };

// console.log(addStrings(9333852702227987,85731737104263))

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

//Add digits until a single digit is formed 
//ex: 38 
//3 + 8 = 11 
//1 + 1 = 2 
//return 2

// var search = function(nums, target) {
//         for(let i = 0; i < nums.length; i++){
//                 if(nums.includes(target)){
//                         return nums.indexOf(target)
//                 }
//         }
// };

// console.log(search([-1,0,3,5,9,12], 9))

// let twod = []
// let rows = 5;

// for(let i = 0; i < rows; i++){
//         twod[i] = []
//         console.log(twod[i])
// }


function zeros(dimensions) {
        var array = [];
    
        for (var i = 0; i < dimensions[0]; ++i) {
            array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
        }
    
        return array;
    }

    console.log(zeros([5, 3]))