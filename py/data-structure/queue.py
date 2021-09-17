from typing import Any, List, Union


class Queue:
    def __init__(self, queue: List[int]) -> None:
        self.queue = queue

    def enqueue(self, value: int) -> None:
        self.queue.append(value)

    def dequeue(self) -> Union[int, bool]:
        if self.is_empty():
            return False
        return self.queue.pop(0)

    def peek(self) -> Union[int, bool]:
        if self.is_empty():
            return False
        return self.queue[0]

    def is_empty(self) -> bool:
        return len(self.queue) == 0


q = Queue([])
q.enqueue(5)
q.enqueue(50)
q.enqueue(59)
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
print("the last item is ", q.peek())
print("queue -> {}".format(q.queue))
print("queue length is:", len(q.queue))