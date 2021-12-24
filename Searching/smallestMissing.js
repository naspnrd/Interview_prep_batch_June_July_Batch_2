function missingLinear(arr){
    let i;
    for(i = 0; i < arr.length; i++){
        if(i != arr[i])
            break;
    }
    return i;
}
// TC = O(n)
// SC = O(1)

function missingBinary(arr){
    start = 0;
    end = arr.length - 1;
    while(start <= end){
        mid = Math.floor((start + end) / 2)
        console.log("start = ", start, " mid = ", mid, " end = ", end)
        if(arr[mid] == mid)
        // recur on right side
            start = mid + 1;
        else
            // recur on left side
            end = mid - 1;
        console.log("start = ", start, " mid = ", mid, " end = ", end)
    }
    return start;
}

// TC = O(logn)
// SC = O(1)
//     0 1 2 3 4 6
arr = [1,2,3,4,5,6]
console.log("missing number = ", missingBinary(arr))