// Method - 1
var str = "abcde"
// // step 1
// var splitStr = str.split("")
// console.log(splitStr)
// // step 2
// var revStr = splitStr.reverse()
// console.log(revStr)

// // step - 3
// var rev = revStr.join("")
// console.log("Reversed String = ", rev)

// // TC = O(n)
// // SC = O(n)
// // concatenated above step
// console.log(str.split("").reverse().join(""))

// Method - 2

revStr = ''
for(i = str.length - 1; i >= 0; i--){
    revStr += str[i]
}
console.log("Before reversing = ", str)
console.log("After reversing = ", revStr)

// TC = O(n) // n = str.length
// SC = O(n)