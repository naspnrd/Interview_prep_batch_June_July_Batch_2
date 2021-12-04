n = 7
arr = [3,5,4,66,77,99,33]
sum = 0
for(i = 0 ; i < 7; i++){
    sum = sum + arr[i]
    if(arr[i] % 2 == 0)
        console.log("even = ", arr[i])
    else
        console.log("odd = ", arr[i])
}
console.log("sum = ", sum)
console.log("Average = ", sum/n)

// TC = O(n)
// Space = O(1)