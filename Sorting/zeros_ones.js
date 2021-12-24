arr = [0,1,0,1,1,0]
console.log("before sorting = ", arr);
function sort0and1_Method1(arr){
    n = arr.length;
    count0 = 0;
    for(i = 0; i < n; i++){
        if(arr[i] == 0)
            count0++;
    }
    count1 = n - count0;
    for(i = 0; i < count0; i++)
        arr[i] = 0;
    for(i = count1; i < n; i++)
        arr[i] = 1
    console.log("After sort = ", arr);
}
function sort0and1_Method2(arr){
    left = 0;
    right = arr.length - 1;
    while(left < right){
        while(arr[left] == 0 && left < right)
            left++;
        while(arr[right] == 1 && left < right)
            right--;
        // swap
        if(left < right){
            temp = arr[left]
            arr[left] = arr[right]
            arr[right]= temp
            left++;
            right--;
        }
    }
    console.log("after sorting = ", arr);
}
sort0and1_Method2(arr);