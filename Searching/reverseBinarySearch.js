function reverseBS(arr, target){
    start = 0;
    end = arr.length - 1;
    while(start <= end){
        mid = Math.floor((start + end) / 2)
        console.log("start = ", start, " mid = ", mid, " end = ", end)
        if(arr[mid] == target)
            return mid;
        if(arr[mid] > target)
            start = mid + 1;
        else
            end = mid - 1;
        console.log("start = ", start, " mid = ", mid, " end = ", end)
    }
    return  -1;
}
arr = [12, 11, 10, 8, 6, 5, 3]
target = 9;
console.log(reverseBS(arr, target));