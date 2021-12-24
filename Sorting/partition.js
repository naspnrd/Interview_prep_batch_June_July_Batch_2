var arr = [7,2,1,6,8,5,3,4]
console.log("Before partitioning = ", arr)
let n = arr.length;
let pivot = arr[n-1];
pIndex = 0;
for(let i = 0; i < n - 1; i++){
    if(arr[i] <= pivot){
        console.log("swapping values i = ", arr[i], " and pindex = ", arr[pIndex] )
        let tmp = arr[i];
        arr[i] = arr[pIndex];
        arr[pIndex] = tmp;
        pIndex++;
        console.log("after swap = ", arr);
    }
}
// swap pivot with pindex
let tmp = arr[n-1]
arr[n-1] = arr[pIndex]
arr[pIndex] = tmp;
console.log("After partitioning = ", arr);
// TC = O(n)
// SC = O(1)