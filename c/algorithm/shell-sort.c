#include <stdio.h>

void display_arr(int items[], int size);
void shell_sort(int items[], int size);

int main()
{
  int items[] = {1, 5, 0, -5, 6};
  int size = sizeof(items) / sizeof(items[0]);

  shell_sort(items, size);
  display_arr(items, size);
}
// Time complecity  Ω(n log(n))  Θ(n(log(n))^2) 	O(n(log(n))^2) 
// Space complecity O(1)
void shell_sort(int array[], int size)
{
  for (int n = size / 2; n > 0; n /= 2)
  {
    for (int j = n; j < size; j++)
    {
    int temp = array[j];
    int k;
    for (k = j; k >= n && array[k - n] > temp; k -= n)
      array[k] = array[k - n];
    array[k] = temp;
    }
  }
}

void display_arr(int items[], int size)
{
  for (int i = 0; i < size; i++)
  {
    printf("%d\t", items[i]);
  }
  printf("\n");
}