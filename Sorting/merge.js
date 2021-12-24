var a = [1,3,5,12,14,15]
var b = [2,4,6,10,18,20,21]
console.log("a = ", a)
console.log("b = ", b)
var n = a.length;
var m = b.length;
c = []
i = 0; // array a
j = 0; // array b

while(i < n && j < m){
    if(a[i] > b[j]){
        c.push(b[j])
        j++;
    }
    else{
        c.push(a[i])
        i++
    }
}

while(i < n){
    c.push(a[i])
    i++
}
while(j < m){
    c.push(b[j])
    j++
}

console.log(c);