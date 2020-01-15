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

