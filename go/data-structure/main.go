package main

import (
	q "ds/queue"
	s "ds/stack"
	"fmt"
)

func main() {
	runStack()
	runQueue()
}

func runStack() {
	var stack s.Stack

	stack.Push("hello")
	stack.Push("world")
	stack.Push(55)
	stack.Push(59)
	stack.Pop()
	fmt.Println(stack.Peek())
	fmt.Printf("stack length is %v and the capacity %v \n", len(stack), cap(stack))
}

func runQueue() {
	var queue q.Queue

	queue.Enqueue(5)
	queue.Enqueue(6)
	queue.Enqueue(2)
	queue.Enqueue("hello")
	queue.Dequeue()
	fmt.Println(queue.Peek())
	fmt.Printf("queue length is %v with the capacity of %v \n", len(queue), cap(queue))
}
