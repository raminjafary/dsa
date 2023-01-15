type TStack<T> = Vec<T>;

#[derive(Debug)]
pub struct Stack<T> {
    pub stack: TStack<T>,
}

impl<T> Stack<T> {
    pub fn new(stack: TStack<T>) -> Self {
        Self { stack }
    }

    pub fn push(&mut self, value: T) {
        self.stack.push(value);
    }

    pub fn pop(&mut self) -> Option<T> {
        if !self.empty() {
            return self.stack.pop();
        }
        None
    }

    pub fn peek(&self) -> Option<&T> {
        if !self.empty() {
            return Some(&self.stack[&self.stack.len() - 1]);
            // or
            // return self.stack.last()
        }
        None
    }

    pub fn empty(&self) -> bool {
        self.stack.is_empty()
    }
}
