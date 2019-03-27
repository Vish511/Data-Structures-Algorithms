function doubleMatrix(matrix) {
   for(var i = 0; i < matrix.length; i++) {
       for(var j = 0; j < matrix[i].length; j++) {
           if(i == 0 || i == matrix.length - 1) {
               matrix[i][j] = matrix[i][j] * 2;
           }else if( j ==0 || j == matrix[i].length - 1) {
            matrix[i][j] = matrix[i][j] * 2;
           } else{
            matrix[i][j] = matrix[i][j]/2 
           }
       }
   }
   console.log(matrix)
}

var matrix = [
    [10, 5, 4,5],
    [12, 8, 14,20],
    [1, 3, 18,8]
]

console.log(matrix)
doubleMatrix(matrix)