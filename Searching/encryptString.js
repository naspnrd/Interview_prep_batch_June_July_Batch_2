function encryptString(str){
    let ans = ""; // auxiliary/extra space
    for(let i = 0; i < str.length;){
        let ch = str[i];
        let count = 0;
        let hex;
        // iterate until str[i] is equal to ch
        while(str[i] == ch && i < str.length){
            count++;
            i++;
        }
        console.log("count = ", count);
        console.log("i = ", i);
        // i--;
        // convert to hex
        hex = count.toString(16)
        console.log("hex = ", hex)
        ans = ans + ch
        ans = ans + hex
        console.log("ans = ", ans)
    }
    // reverse the string
    ans = ans.split('').reverse().join('')
    console.log("encrypted stirng = ", ans)
}
str = "aaaaaaaaaabcd...z" // 1d1c1b1a
encryptString(str);

// TC = O(n)
// SC = O(1)