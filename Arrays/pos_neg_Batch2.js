num = [-1,-5,-4,4,5,6,-9,0,10,23]
// sum = 0
// for(i = 0; i < num.length; i++){
//     if(num[i] >= 0 && num[i] % 2 == 0)
//         sum = sum + num[i]
// }
// console.log("sum = ", sum)

// sum all the negative and postive whose are divisible by 2
sum = 0
for(i = 0; i < num.length; i++){
    if(num[i] % 2 == 0)
        sum = sum + Math.abs(num[i])
}
console.log("sum = ", sum)

// TC = O(n)
// Space = O(1)