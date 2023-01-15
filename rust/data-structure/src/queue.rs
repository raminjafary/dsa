#[derive(Debug)]
pub struct Queue<T> {
    pub queue: Vec<T>,
}

impl<T> Default for Queue<T> {
    fn default() -> Self {
        Self { queue: vec![] }
    }
}

impl<T> Queue<T> {
    pub fn enqueue(&mut self, value: T) {
        self.queue.push(value);
    }

    pub fn dequeue(&mut self) -> Option<T> {
        if !self.is_empty() {
            return Some(self.queue.remove(0));
        }
        None
    }

    pub fn peek(&self) -> Option<&T> {
        if !self.is_empty() {
            return Some(&self.queue[0]);
        }
        None
    }

    fn is_empty(&self) -> bool {
        self.queue.is_empty()
    }
}
