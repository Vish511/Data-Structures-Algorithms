function binarySearch(array,num) {
    let min = 0;
    let max = array.length - 1;

  while (min <= max) {
    let mid = Math.floor((min+max)/2);
    if (array[mid] == num) {
        console.log(`NUMBER FOUND AT ${mid}`);
        return  
    }else if (array[mid] > num) {
      max = mid - 1;
    }else if (array[mid] < num) {
      min = mid + 1;
    }

  }
  console.log("The number could not be found!")
  return "NOT FOUND";
}

binarySearch([1,2,3,4,5,6,7,8,9,10],600);