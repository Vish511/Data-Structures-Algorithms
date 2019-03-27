function maxSubarraySum(array,num) {
   if(array.length < num) return null;
   var tempSum = 0;
   var maxSum = 0;
   for(var i = 0;i < num; i++) {
    maxSum += array[i];
   }
   for(var i = num; i < array.length; i++) {
       tempSum = maxSum - array[i - num] + array[i];
       if(tempSum > maxSum) maxSum = tempSum;
   }
   return maxSum;
}

maxSubarraySum([5,5,5,5,6,6,6,6],4)