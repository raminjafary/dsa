package main

import (
	s "ds/stack"
	"fmt"
)

func main() {
	runStack()
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
