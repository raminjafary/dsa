#include <stdio.h>
#include <stdbool.h>

void swap (int* a, int* b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}
// Only sort integers!
void bubble_sort (int arr[], int size) {
    if(!size) return;

    for (int i = 0; i < size - 1; ++i) 
    {
      bool is_swapped = false;
      for (int j = 0; j < size - i - 1; ++j)
      {
        if (arr[j] > arr[j + 1])
          swap(&arr[j], &arr[j + 1]);
          is_swapped = true;
    }
    if (!is_swapped)
      break;
  }
}

void print_arr (int arr[], int size) {
  for (int i = 0; i < size; ++i)
  {
    printf("%d\n", arr[i]);
  }
}

int main (int argc, char** argv) {

  int size, counter;
  printf("What is the size of the array? ");
  scanf("%d", &size);
  
  int data [size];
  int arr_size = sizeof(data) / sizeof(data[0]);
  
  counter = 0;  
  while(counter < size)
  {
    printf("Write numbers up to %d items: ", size);
    scanf("%d", (data + counter));
    counter++;
  }
    // Time complexity O(n^2) 
    // Space complexity O(1)
    bubble_sort(data, arr_size);
    print_arr(data, arr_size);

}