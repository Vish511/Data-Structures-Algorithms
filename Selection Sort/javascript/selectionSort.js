function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = i+1; j < array.length; j++) {
            if(array[j] < array[i]) {
                let temp = array[i]
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    console.log("Sorted Array ",array)
    return array;
}
selectionSort([0,4,3,1,2,100,200,500,300,75,1000,5000]);
