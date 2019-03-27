function subArraySum(arr, n){
	var obj = {};
	var currentSum = 0;
	for(var i = 0; i < arr.length; i++){
        console.log("current ",arr[i])
		currentSum += arr[i];
		console.log("currentSum "+ currentSum);
		if(currentSum == n){
			return [true, 0, i];
		}
		obj[currentSum] = i;
		console.log("currentSum - n: "+ (currentSum - n));
		if(obj.hasOwnProperty(currentSum - n)){
			return [true, obj[currentSum - n] + 1, i];
		}
		console.log(obj);
	}
	return false;
}

console.log(subArraySum([1,1,1,3,4],5))
// Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
// Ouptut: Sum found between indexes 2 and 4