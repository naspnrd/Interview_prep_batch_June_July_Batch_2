function isBalanced(expr){
    arr = []
    for(i = 0; i < expr.length; i++){
        if(expr[i] == '(' || expr[i] == '{' || expr[i] == '['){
            arr.push(expr[i])
            continue
        }
        if(arr.length == 0)
            return false
        // closing braces 
        // }, ], )
        check = arr.pop()
        if(check == '(' && expr[i] == ')')
            continue
        else if(check == '{' && expr[i] == '}')
            continue
        else if(check == '[' && expr[i] == ']')
            continue
        else
            arr.push(check)
    }
    if(arr.length == 0)
        return true
    else
        return false
}
expr = "[()]{}{[()()]}"
// expr = "{((((((((((((((((((((("
res = isBalanced(expr)
if(res == true)
    console.log("Balanced")
else
    console.log("Not Balanced")

// worst case
// TC = O(n)
// SC = O(n)