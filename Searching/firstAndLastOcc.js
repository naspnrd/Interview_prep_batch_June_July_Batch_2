function searchRange(arr, target){
    first = -1, last = -1;
    first = firstOcc(arr, target); // logn
    last = lastOcc(arr, target); // logn
    // count
    count = last - first + 1
    console.log("first Occurrence = ", first, " last Occurrence = ", last, " count = ", count);
}

function firstOcc(arr, target){
    start = 0;
    end = arr.length - 1
    res = -1
    while(start <= end){
        mid = Math.floor((start + end) / 2)
        if(arr[mid] == target){
            res = mid;
            end = mid - 1;
        }
        else if(arr[mid] > target)
            end = mid - 1;
        else
            start = mid + 1
    }
    return res;
}
function lastOcc(arr, target){
    start = 0;
    end = arr.length - 1
    res = -1
    while(start <= end){
        mid = Math.floor((start + end) / 2)
        if(arr[mid] == target){
            res = mid;
            start = mid + 1;
        }
        else if(arr[mid] > target)
            end = mid - 1;
        else
            start = mid + 1
    }
    return res;
}

arr = [2,4,10,10,10,18,20]
target = 10;
searchRange(arr, target);

// TC = O(logn)
// SC = O(1)