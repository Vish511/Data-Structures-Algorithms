function pivot(arr,left,right) {
   var pivot = arr[start];
   for(var i = left;i < right;i++) {
      if(arr[i] > arr[i+1]) {
          pivotIdx++;
      }
   }
   return pivotIdx;
}

function quickSort(arr,left = 0,right = array.length - 1) {
    pivot(arr,left,right)
   return arr;
}

quickSort([3, 4, 1, 2,100,20,300,40,700]);

//3,4,2,1   3 pI - 2     
//[2,1,3,4]  [2,1,3,4]  //



