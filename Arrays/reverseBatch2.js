//           i
num = [1,2,3,4,5]
//     j
// rev = []
// j = 0
// for(i = num.length - 1; i >= 0; i--){
//     rev[j] = num[i]
//     j++
// }
// TC = O(n)
// Space = O(n)

//Method - 2
i = 0
j = num.length - 1
console.log("Before reverse = ", num)
while(i <= j){
    temp = num[i]
    num[i] = num[j]
    num[j] = temp
    i++
    j--
}
console.log("After reverse = ", num)

// TC = O(n)
// Space = O(1)