function maxSumOfIncreasingSubsequence(array) {
    var incSubSeq = [];
   for(var i = 0; i < array.length; i++) {
       var seq = [];
       var currentMin = 0;
       for(var j = 0; j < i; j++) {
        if(array[j] > currentMin && array[j] < array[i]) {
            currentMin = array[j];
            seq.push(array[j])
        }
       }
       if(seq.length > 0) {
           seq.push(array[i]);
           incSubSeq.push(seq);
       }
   }
   console.log(incSubSeq)
}

var array = [1,101,2,3,100,4,5,6];
console.log(array)
maxSumOfIncreasingSubsequence(array)
