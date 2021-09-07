#include <stdio.h>

void insert(int array[], int item);
void delete (int array[], int item);
void peek(int array[]);
void display_arr(int items[], int size);

static int size = 0;

int main(int argc, char *argv[])
{
  int array[size];

  insert(array, 1);
  insert(array, 3);
  insert(array, 7);
  insert(array, 9);
  insert(array, 4);

  display_arr(array, size);
  peek(array);
  delete (array, 9);
  display_arr(array, size);
  peek(array);
}

void swap(int *a, int *b)
{
  int temp = *a;
  *a = *b;
  *b = temp;
}

void make_heap(int array[], int size, int el)
{
  if (size == 1)
  {
    printf("one item in the array");
  }
  else
  {
    int largest = el;
    int left_child = 2 * el + 1;
    int right_child = 2 * el + 2;

    if (left_child < size && array[left_child] > array[largest])
      largest = left_child;

    if (right_child < size && array[right_child] > array[largest])
      largest = right_child;

    if (largest != el)
    {
      swap(&array[el], &array[largest]);
      make_heap(array, size, largest);
    }
  }
}

void insert(int array[], int item)
{
  if (size == 0)
  {
    array[0] = item;
    size += 1;
  }
  else
  {
    array[size] = item;
    size += 1;
    for (int i = size / 2 - 1; i >= 0; i--)
      make_heap(array, size, i);
  }
}

void delete (int array[], int item)
{
  int i;
  for (i = 0; i < size; i++)
  {
    if (item == array[i])
      break;
  }
  swap(&array[i], &array[size - 1]);
  size--;
  for (int i = size / 2 - 1; i >= 0; i--)
    make_heap(array, size, i);
}

void peek(int array[])
{
  int lg = array[0];
  for (size_t i = 0; i < size; i++)
  {
    if (lg < array[i])
      lg = array[i];
  }
  printf("peek -> %d\n", lg);

  // or simply
  // printf("peek -> %d\n", array[0]);
}

void display_arr(int items[], int size)
{
  for (int i = 0; i < size; i++)
    printf("%d\t", items[i]);
  printf("\n");
}