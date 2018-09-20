package main

import (
	"fmt"
)

func CheckIfArrayIsSorted(arr []int, n int) bool {
	if n == 0 || n == 1 {
		return true
	}
	if arr[n-1] < arr[n-2] {
		return false
	}
	return CheckIfArrayIsSorted(arr, n-1)

}

func main() {
	var array = []int{1, 2, 3, 4, 5, 6}
	if CheckIfArrayIsSorted(array, len(array)) {
		fmt.Println("The given array is sorted!")
	} else {
		fmt.Println("The given array is not sorted!")
	}
}
