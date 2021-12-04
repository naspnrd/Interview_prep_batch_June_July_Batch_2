// Method - 1
function removeSpaces1(str){
    res = ''
    for(i = 0; i < str.length; i++){
        if(str[i] != ' ')
            res += str[i]
    }
    return res;
}
// Method - 2
function removeSpaces2(str){
    str = str.split(" ")
    return str.join("")
}
// Method - 3
function removeSpaces3(str){
    str = str.split('')
    count = 0
    for(i = 0; i < str.length; i++){
        if(str[i] != " ")
        str[count++] = str[i]
    }
    str = str.join("")
    str = str.substring(0, count)
    return str
}
str = 'All is well'
console.log(removeSpaces2(str))

// Method - 1
// TC = O(n)
// Sc = O(n)

// Method - 2
// TC = O(n)
// SC = O(1) // O(n)

// Method - 3
// TC = O(n) 
// SC = O(1) // O(n)