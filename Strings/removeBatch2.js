var str1 = "geeks"
var str2 = 'maeee'
count = {}
for(i = 0; i < str2.length; i++){
    if(!count[str2[i]])
        count[str2[i]] = 1
    else
        count[str2[i]]++
}
console.log(count)
res = ''
for(i = 0; i < str1.length; i++){
    if(!count[str1[i]]){
            res += str1[i]
    }
    else{
        if(count[str1[i]] > 0)
            count[str1[i]]--
    }
}
console.log("After removing characters = ", res)