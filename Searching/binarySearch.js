function binarySearchIterative(arr, target){
    start = 0;
    end = arr.length - 1;
    while(start <= end){
        mid = Math.floor((start + end)/ 2)
        console.log("start = ", start, " mid = ", mid, " end = ", end)
        if(arr[mid]  == target)
            return mid;
        if(arr[mid] > target)
            end = mid - 1;
        else
            start = mid + 1;
        console.log("start = ", start, " mid = ", mid, " end = ", end)
    }
    return -1;
}

function binarySearchRecursive(arr, target, start, end){
    // when target is not found in array
    if(start > end)
        return -1;
    mid = Math.floor((start + end)/ 2)
    console.log("start = ", start, " mid = ", mid, " end = ", end)
    if(arr[mid]  == target)
        return mid;
    if(arr[mid] > target)
        return binarySearchRecursive(arr, target, start, mid - 1); // n/2
    else
        return binarySearchRecursive(arr, target, mid + 1, end); // n/2
}
//     0 1 2 3 4  5  6
arr = [3,5,6,8,10,11,12]
target = 9;
console.log(binarySearchRecursive(arr, target, 0, arr.length - 1))

// TC = O(logn)
// SC = O(1)