var arr =[[2,3,1,5,0],
          [7,1,5,3,1],
          [2,5,7,8,1],
          [0,1,5,0,1],
          [3,4,9,1,5] 
         ]
N = 5
for(i = 0; i < N; i++){
    s = ''
    for(j = 0; j < i + 1; j++)
        s = s + arr[i][j]
    for(k = i + 1; k < N; k++)
        s = s + "_"
    console.log(s)
}