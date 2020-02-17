//LINEAR SEARCH
// function linearSearch(arr, target){
//         for(let i = 0; i < arr.length; i++){
//                 if(arr[i] === target){
//                         return i
//                 }
//         }
//         return -1
// }

// console.log(linearSearch([1,10,9,2,3,7,4], 4))

//BINARY SEARCH

//Binary Search
// function binarySearch(arr, elem) {
//         var start = 0;
//         var end = arr.length - 1;
//         var middle = Math.floor((start + end) / 2);
//         while(arr[middle] !== elem && start <= end) {
//             if(elem < arr[middle]){
//                 end = middle - 1;
//             } else {
//                 start = middle + 1;
//             }
//             middle = Math.floor((start + end) / 2);
//         }
//         if(arr[middle] === elem){
//             return middle;
//         }
//         return -1;
//     }
    
//     // Refactored Version
//     function binarySearch(arr, elem) {
//         var start = 0;
//         var end = arr.length - 1;
//         var middle = Math.floor((start + end) / 2);
//         while(arr[middle] !== elem && start <= end) {
//             if(elem < arr[middle]) end = middle - 1;
//             else start = middle + 1;
//             middle = Math.floor((start + end) / 2);
//         }
//         return arr[middle] === elem ? middle : -1;
//     }
    
//     binarySearch([2,5,6,9,13,15,28,30], 103)

// function naiveSearch(long, short){
//         var count = 0;
//         for(var i = 0; i < long.length; i++){
//             for(var j = 0; j < short.length; j++){
//                if(short[j] !== long[i+j]){
//                 break;
//               }
//                if(j === short.length - 1){
//                 count++;
//               }
//             }
//         }
//         return count;
//     }
    
//     console.log(naiveSearch("that bat is a crazy cat ", "at"))