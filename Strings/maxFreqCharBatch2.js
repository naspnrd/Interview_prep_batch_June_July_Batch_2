str = ['a','ab','ac','a','b','a','b','c']
count = {}
// for(i = 0; i < str.length; i++){
//     if(!count[str[i]])
//         count[str[i]] = 1
//     else
//         count[str[i]]++
// }
// // console.log(count)
// maxValue = 0
// maxChar = ''
// for(var prop in count){
//     console.log(" prop = ", prop)
//     console.log(" value = ", count[prop])
//     if(maxValue < count[prop]){
//         maxValue = count[prop]
//         maxChar = prop
//     }
// }
maxValue = 0
maxChar = str[0]
for(i = 0; i < str.length; i++){
    if(!count[str[i]])
        count[str[i]] = 1
    else
        count[str[i]]++
    
    if(maxValue < count[str[i]]){
        maxValue = count[str[i]]
        maxChar = str[i]
    }
}
console.log("max char = ", maxChar)

// TC = O(n)
// SC = O(n)