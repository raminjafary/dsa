from typing import Union, List, TypeVar

T = TypeVar("T", str, int)
Vector = List[T]


class Stack:
    stack: Vector = []

    def push(self, value: T) -> None:
        self.stack.append(value)

    def pop(self) -> Union[T, bool]:
        if(self.is_empty()):
            return False
        return self.stack.pop()

    def is_empty(self) -> bool:
        return not len(self.stack)

    def peek(self) -> Union[T, bool]:
        if(self.is_empty()):
            return False
        return self.stack[len(self.stack) - 1]


s = Stack()
s.push("value")
s.push(3)
s.push(8)
print("the last item is ", s.peek())
print("stack -> {}".format(s.stack))
print("stack length is:", len(s.stack))
