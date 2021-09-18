package bubble_sort

func Sort(vec *[]int) {
	var swapped bool

	for i := range *vec {
		swapped = false

		for j := 0; j < len(*vec)-i-1; j++ {
			if (*vec)[j] > (*vec)[j+1] {
				(*vec)[j], (*vec)[j+1] = (*vec)[j+1], (*vec)[j]
				swapped = true
			}
		}
		if !swapped {
			break
		}
	}
}
