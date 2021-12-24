function getABC(obj){
    if(obj.hasOwnProperty('abc'))
        return obj.abc
    return "No abc key exist"
}

console.log(getABC({abc: 19}))