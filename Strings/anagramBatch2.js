function isAnagram1(str1, str2){
    var n = str1.length
    var m = str2.length
    if(n != m)
        return false
    for(i = 0; i < n; i++){
        flag = false
        for(j = 0; j < m; j++){
            if(str1[i] == str2[j]){
                flag = true
                break;
            }
        }
        if(flag == true)
            continue
        return false
    }
    return true
}
// TC = O(n*m)
// SC = O(1)

function isAnagram2(str1, str2){
    n = str1.length
    m = str2.length
    if(n != m)
        return false
    str1 = str1.split("")
    str2 = str2.split("")
    str1.sort()
    str2.sort()
    for(i = 0; i < n; i++){
        if(str1[i] != str2[i])
            return false
    }
    return true
}
// TC = O(nlogn)
// SC = O(n + m) // O(1)
function isAnagram3(str1, str2){
    n = str1.length
    m = str2.length
    if(n != m)
        return false
    count = {} // 26 alphabets
    for(i = 0; i < n; i++){
        if(!count[str1[i]])
            count[str1[i]] = 1
        else
            count[str1[i]]++
    }
    console.log(count)
    for(i = 0; i < m; i++){
        if(count[str2[i]] > 0)
            count[str2[i]]--
        console.log("count = ", count)
    }
    for(var prop in count){
        if(count[prop] > 0)
            return false
    }
    return true
}
var str1 = 'cider'
var str2 = 'crief'
console.log(isAnagram3(str1, str2))

// TC = O(n)
// SC = O(1)


