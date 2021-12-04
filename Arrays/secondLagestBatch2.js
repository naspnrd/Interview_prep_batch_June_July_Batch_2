var arr = [12,35,1,11,10,34]
// largest = arr[0]
// for(i = 1; i < arr.length; i++){
//     if(arr[i] > largest)
//         largest = arr[i]
// }
// secondlargest = Number.MIN_VALUE
// console.log("Second Largest Number = ", secondlargest)
// for(i = 0; i < arr.length; i++){
//     if(arr[i] < largest && arr[i] > secondlargest){
//         secondlargest = arr[i]
//     }
//     console.log("Second Largest Number = ", secondlargest)
// }
// // console.log("Largest Number = ", largest)
// // if(secondlargest == Number.MIN_VALUE)
// //     console.log(-1)
// // else
// //     console.log("Second Largest Number = ", secondlargest)

// Method - 2
largest = secondlargest = Number.MIN_VALUE
console.log("largest = " + largest + " Second largest = "+ secondlargest)
for(i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        secondlargest = largest
        largest = arr[i]
    }
    else if(arr[i] != largest && arr[i] > secondlargest)
        secondlargest = arr[i]
    console.log("largest = " + largest + " Second largest = "+ secondlargest)
}

// TC = O(n)
// SC = O(1)