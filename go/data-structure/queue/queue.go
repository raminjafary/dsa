package queue

type Queue []interface{}

func (q *Queue) Enqueue(value interface{}) {
	*q = append([]interface{}{value}, *q...)
}

func (q *Queue) IsEmpty() bool {
	return len(*q) == 0
}

func (q *Queue) Peek() (interface{}, bool) {
	if q.IsEmpty() {
		return "", false
	}
	return (*q)[len(*q)-1], true
}

func (q *Queue) Dequeue() (item interface{}) {
	if q.IsEmpty() {
		return
	}
	index := len(*q) - 1
	item = (*q)[index]
	(*q)[index] = nil
	*q = (*q)[:index]
	return
}
