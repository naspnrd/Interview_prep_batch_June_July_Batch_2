var arr = [2,7,11,15]
target = 18
ans = []
// for(i = 0; i < arr.length; i++){
//     for(j = 0; j <arr.length; j++){
//         if(i != j && arr[i] + arr[j] == target){
//             ans.push(arr[i])
//             ans.push(arr[j])
//             break
//         }
//     }
//     if(ans.length)
//         break
// }
// console.log(ans)

// TC = O(n*n)

// Method - 2
i = 0
n = arr.length
j = n - 1
while(i < j){
    if(arr[i] + arr[j] == target){
        ans.push(arr[i])
        ans.push(arr[j])
        break
    }
    else if(arr[i] + arr[j] < target)
        i++
    else
        j--
}
if(ans.length > 0)
    console.log(ans)
else
    console.log(-1)

// TC = O(n)
// SC = O(1)