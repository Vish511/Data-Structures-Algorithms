package main

type ListNode struct {
	data int
	next *ListNode
}

func (list *ListNode) ListLength(head *ListNode) int {
	var current *ListNode = head
	count := 0
	for current != nil {
		count++
		current = (*current).next
	}
	return count
}

func main() {

}
