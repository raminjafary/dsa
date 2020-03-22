#include <stdio.h>

static int size = 0;

void peek (int array[], int size);
void print_arr (int array[], int size);
void insert (int array[], int item);
void delete (int array[], int item);

void main (int argc, char * argv[])
{
  int array[size];

  insert(array, 3);
  insert(array, 4);
  insert(array, 9);
  insert(array, 5);
  insert(array, 2);

  print_arr(array, size);

  peek(array, size);

  delete(array, 4);
  print_arr(array, size);
}

void peek (int array[], int size)
{
  int lg = array[0];
  for (int i = 0; i < size; i++)
  {
    if (lg < array[i])
      lg = array[i];
  }
    printf("peek -> %d\n", lg);

  // or simply
  // printf("peek -> %d\n", array[0]);
}

void print_arr (int array[], int size)
{
  for (int i = 0; i < size; i++)
    printf("%d\t ", array[i]);
  printf("\n");
}

void swap (int *a, int *b)
{
  int temp = *a;
  *a = *b;
  *b = temp;
}

void make_heap (int array[], int size, int el)
{
  int largest = el;
  int left = 2 * el + 1;
  int right = 2 * el + 2;

  if (left < size && array[left] > array[largest])
    largest = left;

  if (right < size && array[right] > array[largest])
    largest = right;

  if (largest != el)
  {
    swap(&array[el], &array[largest]);
    make_heap(array, size, largest);
  }
}

void insert (int array[], int item)
{
  if (size == 0)
  {
    array[0] = item;
    size +=1;
  }
  else
  {
    array[size] = item;
    size++;

    for (int i = size / 2 - 1; i >=0; i--)
      make_heap(array, size, i);
  }
}

void delete (int array[], int item)
{
  int del_item;

  for (del_item = 0; del_item < size; del_item++)
    if (array[del_item] == item)
      break;

  swap(&array[del_item], &array[size - 1]);
  size--;

  for (int i = size / 2 - 1; i >= 0; i--)
    make_heap(array, size, i);
}
