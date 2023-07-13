package stack

type Stack []interface{}

func (s *Stack) IsEmpty() bool {
	return len(*s) == 0
}

func (s *Stack) Push(arg interface{}) {
	*s = append(*s, arg)
}

func (s *Stack) Peek() interface{} {
	return (*s)[len(*s)-1]
}

func (s *Stack) Pop() (interface{}, bool) {
	if s.IsEmpty() {
		return "", false
	} else {
		index := len(*s) - 1
		item := (*s)[index]
		(*s)[index] = nil
		*s = (*s)[:index]
		return item, true
	}
}
