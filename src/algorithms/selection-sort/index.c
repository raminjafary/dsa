
#include <stdio.h>

void selection_sort (int items[], int size);
void swap (int *a, int *b);
void display_arr (int items[], int size);

int main (int argc, char *argv[])
{
  int items[] = {1, 5, 0, -5, 6};
  int size = sizeof(items) / sizeof(items[0]);

  selection_sort(items, size);
  display_arr(items, size);

}

// Time complexity: Ω(n^2)	Θ(n^2)	O(n^2)
// Space Complexity: O(1)
void selection_sort (int items[], int size)
{
  for (int i = 0; i < size - 1; i++)
  {
    int min = i;
    for (int j = i + 1; j < size; j++)
    {
     if(items[j] < items[min])
       min = j;
    }
    swap(&items[min] , &items[i]);
  }
}

void swap (int *a, int *b)
{
  int temp = *a;
  *a = *b;
  *b = temp;
}

void display_arr (int items[], int size)
{
  for (int i = 0; i < size; i++)
  {
    printf("%d\t", items[i]);
  }
  printf("\n");
}