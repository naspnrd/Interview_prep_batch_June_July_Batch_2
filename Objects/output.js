console.log("1" + 2 + 3)

console.log(1 + "2" + 3)

console.log(1 + 2 + "3")

const func = (function(a){
    delete a;
    return a;
   })(5);
   console.log(func);
 