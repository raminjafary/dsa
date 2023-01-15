pub fn sort(items: &mut [i8; 10]) -> () {
    let mut swapped = true;

    while swapped {
        swapped = false;

        for i in 0..items.len() - 1 {
            if items[i] > items[i + 1] {
                items.swap(i, i + 1);
                swapped = true;
            }
        }
    }
}
