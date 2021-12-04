// Method - 1
function isPangram1(str){
    if(str.length < 26)
        return false
    count = {}
    str = str.toLowerCase()
    for(i = 0; i < str.length; i++){
        if(str[i] == " ")
            continue
        if(!count[str[i]])
            count[str[i]] = 1
        else
            count[str[i]]++
    }
    console.log(Object.keys(count).length)
    if(Object.keys(count).length == 26)
        return true
    return false
}
// Method - 2
function isPangram2(str){
    if(str.length < 26)
        return false
        var letters = 'abcdefghijklmnopqrstuvwxyz'
        str = str.toLowerCase()
        for(i = 0; i < 26; i++){
            if(str.indexOf(letters[i]) < 0)
                return false
        }
        return true
}
// str = "hello"
str = "The quick brown fox jumps over the lazy dog"
res = isPangram2(str)
if(res == true)
    console.log(str + " is a pangram")
else
    console.log(str + " is not a pangram")

// Method  - 1
// TC = O(n)
// SC = O(1)

// Method - 2
// TC = O(26*n) = > O(n)
// SC = O(1)

