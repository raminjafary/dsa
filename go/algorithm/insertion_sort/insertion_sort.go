package insertion_sort

func Sort(items []int) {
	for i, v := range items {

		j := i - 1

		for j >= 0 && items[j] > v {
			items[j+1] = items[j]
			j -= 1
		}

		items[j+1] = v
	}
}
