function merge(arr, startL, endL, startR, endR){
    temp = []
    i = startL // left array
    j = startR // right array
    while(i <= endL && j <= endR){
        if(arr[i] > arr[j]){
            temp.push(arr[j]);
            j++;
        }
        else{
            temp.push(arr[i]);
            i++;
        }
    }
    while(i <= endL){
        temp.push(arr[i])
        i++;
    }
    while(j <= endR){
        temp.push(arr[j])
        j++;
    }
    for(let i = 0; i <temp.length; i++){
        arr[startL + i] = temp[i];
    }
}
function mergeSort(arr, start, end){
    if(start < end){
        console.log("Trying to sort ", arr.slice(start, end + 1));
        let mid = Math.floor((start + end) / 2);
        // recursion
        mergeSort(arr, start, mid); // left part
        mergeSort(arr, mid + 1, end); // right part
        // merging operation
        //         [left arr] [right arr]
        console.log("merging ", arr.slice(start, mid + 1), " and ", arr.slice(mid + 1, end + 1))
        merge(arr, start, mid, mid + 1, end);
    }
}
arr = [3,7,1,8,2,5,9,4,6,10]
mergeSort(arr, 0, arr.length - 1)
console.log(arr)