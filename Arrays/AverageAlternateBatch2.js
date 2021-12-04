num = [1,2,3,4,5,6,7]
sum = 0
count = 0
for(i = 0; i < num.length; i = i + 2){
    sum = sum + num[i]
    count++
}
console.log("sum = ", sum)
console.log("count = ", count)
console.log("Average = " + (sum/count))

// TC = O(n)
// Space = O(1)