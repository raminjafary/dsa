package main

import (
	"algorithm/bubble_sort"
	"algorithm/insertion_sort"
	"fmt"
)

func main() {
	bubbleSort()
	insertionSort()
}

func bubbleSort() {
	items := []int{1, 8, 6, 0, 2, 4, 7, -1, 10}

	bubble_sort.Sort(items)
	fmt.Printf("bubble sort %v\n", items)
}

func insertionSort() {
	items := []int{5, 1, 0, -1, 20, 50}

	insertion_sort.Sort(items)
	fmt.Printf("insertion sort %v\n", items)
}
