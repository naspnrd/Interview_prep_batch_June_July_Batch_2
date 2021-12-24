function partition(arr, start, end){
    pivot = arr[end];
    pIndex = start;
    for(i = start; i < end; i++){
        if(arr[i] <= pivot){
            temp = arr[i]
            arr[i] = arr[pIndex]
            arr[pIndex] = temp;
            console.log("After swapping ", arr)
            pIndex++;
        }
    }
    temp = arr[end];
    arr[end] = arr[pIndex]
    arr[pIndex] = temp;
    return pIndex;
}
function quickSort(arr, start, end){
    if(start < end){
        partitionIndex = partition(arr, start, end);
        console.log("partioning element = ", arr[partitionIndex], " partitoning index = ", partitionIndex);
        console.log("After partitioning = ", arr.slice(0, arr.length));
        quickSort(arr, start, partitionIndex - 1) // left part
        quickSort(arr, partitionIndex + 1, end); 
    }
}

arr = [7,2,1,6,8,5,3,4]
console.log("before Sorting = ", arr)
quickSort(arr, 0, arr.length - 1);
console.log("After sorting = ", arr);