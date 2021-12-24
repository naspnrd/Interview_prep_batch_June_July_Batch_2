function floorLinear(arr, target){
    res = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] <= target){
            res = arr[i]
        }
    }
    return res;
}

// TC = O(n)
// SC = O(1)

function floorOptimised(arr, target){
    start = 0;
    end = arr.length - 1;
    res = 0;
    while(start <= end){
        mid = Math.floor((start + end)/ 2);
        if(arr[mid] == target)
            return target;
        if(arr[mid] > target)
            end = mid - 1;
        else{
            res = arr[mid];
            start = mid + 1;
        }
    }
    return res;
}
arr= [1,2,3,4,8,10,11]
target = 5
console.log("Floor of ", target, " is = ", floorOptimised(arr, target));