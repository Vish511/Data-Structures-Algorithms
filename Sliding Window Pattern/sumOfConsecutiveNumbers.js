function maxSumOfConsecutiveNumbers(array,num) {
    var tempSum = 0;
    for(let i = 0; i < num;i++) {
        maxSum += array[i];
    }
    var tempSum = maxSum;
    for(let i = num; i < array.length;i++) {
       tempSum = tempSum - array[i - num] + array[i];
        maxSum = Math.max(tempSum,maxSum)
    }
    return maxSum
}

maxSumOfConsecutiveNumbers([1,2,3,4,4,4,6,6,6,8,8,6],3)
