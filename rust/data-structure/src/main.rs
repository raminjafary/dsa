#![allow(dead_code)]

mod queue;
mod stack;
use queue::Queue;
use stack::Stack;

fn main() {
    run_stack();
    run_queue();
}

fn run_stack() {
    let mut s = Stack { stack: vec![] };
    s.push(5);
    s.push(50);
    s.push(500);
    s.pop();
    if let Some(value) = s.pop() {
        println!("the item popped out -> {:?}", value);
    }
    if let Some(value) = s.peek() {
        println!("the last item is -> {:?}", value);
    }
    println!("{:?}", s.stack);
}

fn run_queue() {
    let mut q = Queue::default();
    q.enqueue(9);
    q.enqueue(8);
    q.enqueue(55);
    if let Some(value) = q.dequeue() {
        println!("the item popped out -> {:?}", value);
    }
    if let Some(value) = q.peek() {
        println!("the first item is -> {:?}", value);
    }
    println!("qqq{:?}", q.queue);
}
