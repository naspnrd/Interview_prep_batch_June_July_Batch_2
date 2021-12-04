// Method - 1 
var str = "ABCCBA"
// var revStr = str.split("").reverse().join("")
// if(revStr == str)
//     console.log(str + " is a palindrome")
// else
//     console.log(str + " is not a palindrome")

// // TC = O(n)
// SC = O(n)
// Out-place

// Method - 2

left = 0
right = str.length - 1
flag = true
while(left < right){
    if(str[left] != str[right]){
        flag = false
        break
    }
    left++
    right--
}
if(flag == true)
    console.log(str + " is a palindrome")
else
    console.log(str +" is not a palindrome")


// Tc = O(n/2) => O(n)
// Sc = O(1)