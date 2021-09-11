class Stack:
    stack = []

    def push(self, value):
        self.stack.append(value)

    def pop(self):
        if(self.is_empty()):
            return
        self.stack.pop()

    def is_empty(self):
        return not len(self.stack)

    def peek(self):
        if(self.is_empty()):
            return
        return self.stack[len(self.stack) - 1]


s = Stack()
s.push("value")
s.push(3)
s.push([1, 5])
print("the last item is ", s.peek())
print("stack -> {}".format(s.stack))
print("stack length is:", len(s.stack))
