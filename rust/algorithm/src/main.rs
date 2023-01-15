#![allow(dead_code)]

mod bubble_sort;
use bubble_sort::sort;

fn main() {
    run_bubble_sort()
}

fn run_bubble_sort() {
    let mut items: [i8; 10] = [9, 8, 0, 1, -1, 8, 65, 10, 14, 20];
    sort(&mut items);
    println!("the item is bubble sorted! {:?}", items)
}
