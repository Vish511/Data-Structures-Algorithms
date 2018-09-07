package main

import (
	"fmt"
)

//TowerOfHanoi Implementation
func MoveDisc (n int,Src string,Dst string,Aux string) {
   if n == 1 {
	fmt.Printf("Moving %d from %s to %s\n ",n,Src, Dst)
	return	
   }else {
	MoveDisc(n-1,Src,Aux,Dst)
	fmt.Printf("Moving %d from %s to %s\n ",n,Src, Dst)
	MoveDisc(n-1,Aux,Dst,Src)
   }
}

func main() {
  MoveDisc(2,"A","B","C")
}


