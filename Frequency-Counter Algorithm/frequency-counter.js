function same(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    let freqCnt1 = {};
    let freqCnt2 = {};

    for(let i =0; i < arr2.length; i++) {
        freqCnt2[arr2[i]] = (freqCnt2[arr2[i]] || 0) + 1
    }

    for(let i = 0; i <arr1.length; i++) {
        if(!freqCnt2[(arr1[i])**2]) {
            return false;
        }else {
            freqCnt2[(arr1[i])**2]--;
        }
    }
    console.log(freqCnt2)
 return true;
}

console.log(same([1,2,3],[1,4,9]))