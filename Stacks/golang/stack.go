package main

import (
	"fmt"
)

type Stack struct {
	items []int
}

func (Stack *Stack) Push(element int) {
	Stack.items = append(Stack.items, element)
}

func (Stack *Stack) Pop() interface{} {
	if len(Stack.items) > 0 {
		removedItem := Stack.items[len(Stack.items)-1]
		Stack.items = Stack.items[:len(Stack.items)-1]
		return removedItem
	} else {
		return "Cannot Pop! The stack is empty!"
	}
}

func (Stack *Stack) Peek() interface{} {
	if len(Stack.items) > 0 {

		return Stack.items[len(Stack.items)-1]
	} else {
		return "The stack is empty!"
	}

}

func (Stack *Stack) isEmpty() (empty bool) {
	if empty = false; len(Stack.items) == 0 {
		empty = true
	}
	return
}

func main() {
	fmt.Println("Stack Implementation!")
	var stack Stack
	stack.Push(5)
	stack.Push(7)
	fmt.Println(stack)
	fmt.Println(stack.Pop())
	fmt.Println(stack.Peek())
	fmt.Println(stack.isEmpty())
}
