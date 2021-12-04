var arr =   [0,3,5,9,0,0,23,2]
n = arr.length
// B = new Array(n)
// B.fill(0) // O(n)
// j = 0
// count = 0
// for(i = 0; i < n; i++){
//     if(arr[i] != 0){
//         B[j] = arr[i]
//         j++
//     }
//     else if(arr[i] == 0)
//         count++
// }
// for(k = 0; k < count; k++)
//     B[j++] = 0
// console.log(B)

// Method - 2
// j = 0
// for(i = 0; i < n; i++){
//     if(arr[i] != 0){
//         arr[j] = arr[i]
//         j++
//     }
// }
// while(j < n){
//     arr[j] = 0
//     j++
// }

// console.log(arr)

// Method - 3

j = 0
for(i = 0; i < n; i++){
    if(arr[i] != 0){
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j++
    }
}

console.log(arr)

// TC = O(n)
// Space = O(1)