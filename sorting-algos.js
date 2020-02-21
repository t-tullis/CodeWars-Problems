//BUBBLE SORT   
// function bubbleSort(arr){
//     for(let i = arr.length; i > 0; i--){
//         for(let j = 0; j < i - 1; j++){
//             console.log(arr, arr[j], arr[j + 1])
//         if(arr[j] > arr[j + 1]){
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }
// }
//     return arr
// }

// console.log(bubbleSort([27, 48, 1, 9, 33]))

//SELECTION SORT
// function selectionSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         let lowest = i
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         let temp = arr[i]
//         arr[i] = arr[lowest]
//         arr[lowest] = temp
//     }
//     return arr
// }

// console.log(selectionSort([6,2,8,9,3,1]))