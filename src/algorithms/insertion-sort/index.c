#include <stdio.h>

void insertion_sort(int array[], int size);
void display_arr (int items[], int size);

int main(int argc, char *argv)
{
  int array[] = {9, 5, 2, 3, -4};
  int size = sizeof(array) / sizeof(array[0]);

  // Time complexity Ω(n)	Θ(n^2)	O(n^2)
  // Space complexity O(1)
  insertion_sort(array, size);
  display_arr(array, size);
}

void insertion_sort(int array[], int size)
{
  for (int i = 1; i < size; i++)
  {
    int key = array[i];
    int j;
    for (j = i - 1; j >=0 && key < array[j]; j--)
      array[j + 1] = array[j];
    array[j + 1] = key;
  }
}

void display_arr (int items[], int size)
{
  for (int i = 0; i < size; i++)
    printf("%d\t", items[i]);
  printf("\n");
}