function bubbleSort(array) {
    var swap = function(array,indx1,indx2) {
       var temp = array[indx1];
       array[indx1] = array[indx2];
       array[indx2] = temp;
    }
    for(let i = array.length - 1;i >= 0;i--) {
        var noSwaps = true;
        for(let j = 0;j < i;j++) {
            if(array[j] > array[j+1]) {
                swap(array,j,j+1);  
                noSwaps = false;
            }
        }
        if(noSwaps) {
            break;
        }
    }
    return array;
}

console.log(bubbleSort([5,1,3,2,4]));