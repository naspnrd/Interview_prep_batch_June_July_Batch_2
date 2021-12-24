function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == key)
            return i;
    }
    // if key not found
    return -1;
}
//     0 1 2 3 4 5 6 7
arr = [1,2,3,8,4,5,7,9]
key = 9
console.log(linearSearch(arr, key))