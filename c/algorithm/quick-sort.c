#include <stdio.h>

void quick_sort(int items[], int low_bound, int high_bound);
void display_arr(int array[], int size);

int main(int argc, char **argv[])
{
  int array[] = {1, 5, -1, 0};
  int size = sizeof(array) / sizeof(array[0]);

  quick_sort(array, 0, size - 1);
  display_arr(array, size);
}

void swap(int *a, int *b)
{
  int temp = *a;
  *a = *b;
  *b = temp;
}

int partition(int array[], int low_bound, int high_bound)
{
  int pivot = array[high_bound];
  int left_to_swap = low_bound - 1;

  for (int i = low_bound; i < high_bound; i++)
  {
    if (pivot >= array[i])
    {
      left_to_swap++;
      swap(&array[left_to_swap], &array[i]);
    }
  }
  swap(&array[left_to_swap + 1], &array[high_bound]);
  return left_to_swap + 1;
}

// Time complexity 	Ω(n log(n))	Θ(n log(n))	O(n^2)
// Space complexity O(log n)
void quick_sort(int array[], int low_bound, int high_bound)
{
  if (low_bound < high_bound)
  {
    int part = partition(array, low_bound, high_bound);
    quick_sort(array, low_bound, part - 1);
    quick_sort(array, part + 1, high_bound);
  }
}

void display_arr(int array[], int size)
{
  for (int i = 0; i < size; i++)
    printf("%d\t", array[i]);
  printf("\n");
}