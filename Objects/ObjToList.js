function keyValuePair(Obj){
    var keys = keyValues(Obj) // O(n)
    console.log(keys)
    var length = keys.length
    var pairs = Array(length)
    // O(n)
    for(i = 0; i < length; i++){
        pairs[i] = [keys[i], Obj[keys[i]]];
    }
    return pairs
}
function keyValues(Obj){
    keys = []
    for(var key in Obj)
        keys.push(key)
    return keys;
}
personDetail = {
    firstName: 'Vivek',
    lastName: 'Maurya',
    address: 'Varanasi',
    phone: 76378783,
}
// console.log(keyValuePair(personDetail))

// in-built function
// console.log(Object.entries(personDetail))\

// TC = O(n)
// SC = depends on input