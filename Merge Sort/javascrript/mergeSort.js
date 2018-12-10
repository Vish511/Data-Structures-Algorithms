function merge(arr1, arr2) {
    var i = 0;
    var j = 0;
    var newArr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            newArr.push(arr1[i]);
            i++;
            
        } else {
            newArr.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }
    return newArr;
}


function mergeSort(arr) { //[3,4,1,2]    //[3,4]
    if (arr.length <= 1) {
        return arr;
    }
    var mid = Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, mid)); //[3,4]  //[3]
    var right = mergeSort(arr.slice(mid));  // [2]    //[4]
    return merge(left, right);
}

console.log(mergeSort([3, 4, 1, 2,100,20,300,40,700]))