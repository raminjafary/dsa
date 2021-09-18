package main

import (
	"algorithm/bubble_sort"
	"fmt"
)

func main() {
	bubbleSort()
}

func bubbleSort() {
	vec := []int{1, 8, 6, 0, 2, 4, 7, -1, 10}

	bubble_sort.Sort(&vec)
	fmt.Println(vec)
}
