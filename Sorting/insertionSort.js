function insertionSort(arr){
    // for each element traversal
    for(let i = 0; i < arr.length; i++){
        let idx = i;
        // loop to traverse left of i
        // idx = 0             0 - 1 = -1
        while(idx > 0 && arr[idx - 1] > arr[idx]){
            // swap => [a,b] = [b,a]
            // 8             3             3         8
            // [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
            let temp = arr[idx - 1] // 8
            arr[idx - 1] = arr[idx]  // 3
            arr[idx] = temp // 8
            idx -= 1;
            console.log("after i = ", i, " = ", arr)
        }
    }
    // printing sorted array
    console.log("After Sorting = ", arr);
}
arr = [8,3,2,7,9,1,4]
// arr = [6,5,4,3,2,1]
// arr = [1,2,3,4,5,6]
console.log("Before Sorting = ", arr);
insertionSort(arr);

// In worst Case
// TC = O(n2)
// SC = O(1)

