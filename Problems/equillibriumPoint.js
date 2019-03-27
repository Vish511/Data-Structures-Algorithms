//[2,2,1,3,2,5,4,1]


function findEquilibrium(array) {
    var sum = 0;
    var leftSum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    for(var j = 0; j < array.length; j++) {
        sum -= array[j];
        if(leftSum == sum) {
            return j
        }
        leftSum += array[j]
    }
}

var array = [2, 2, 1, 3, 2, 5, 4, 1];
console.log(array)
console.log(findEquilibrium(array))


