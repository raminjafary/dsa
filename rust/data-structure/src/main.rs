#![allow(dead_code)]

mod stack;
use stack::Stack;

fn main() {
    run_stack()
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
