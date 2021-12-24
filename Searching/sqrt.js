function sqrtX(x){
    if(x < 2){
        return x;
    }
    let i = 1;
    while(i*i <= x){
        i++;
    }
    return i-1;
}
// TC = O(x^1/2)
// SC = O(1)

function sqrtXOptimised(x){
    if(x < 2)
        return x;
    start = 1;
    end = x/2;
    res = -1;
    while(start <= end){
        mid = Math.floor((start + end) / 2);
        console.log("start = ", start, " mid = ", mid, " end = ", end, " res = ", res)
        sqr = mid*mid
        if(sqr == x)
            return mid;
        if(sqr > x)
            end = mid - 1;
        else{
            res = mid;
            start = mid + 1;
        }
        console.log("start = ", start, " mid = ", mid, " end = ", end, " res = ", res)
    }
    return res;
}
// TC = O(logn)
// SC = O(1)
x = 25
console.log("square root of " ,x , " is", sqrtXOptimised(x))