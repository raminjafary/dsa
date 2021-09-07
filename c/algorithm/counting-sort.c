#include <stdio.h>

void display_arr(int array[], int size);
void counting_sort(int array[], int size);

int main()
{
  int array[] = {7, 6, 8, 8, 1, 1, 2, 0, 9};
  int size = sizeof(array) / sizeof(array[0]);

  counting_sort(array, size);
  display_arr(array, size);
}

int find_max(int array[], int size)
{
  int max = array[0];
  for (int i = 0; i < size; i++)
    if (max < array[i])
      max = array[i];
  return max;
}

// Time complexity Ω(n+k)	Θ(n+k)	O(n+k)
// Space complexity O(k)
void counting_sort(int array[], int size)
{
  int max = find_max(array, size);
  int count[max + 1];
  int result[max + 1];

  for (int i = 0; i <= max; i++)
    count[i] = 0;

  for (int i = 0; i < size; i++)
    count[array[i]]++;

  for (int i = 1; i <= max; i++)
    count[i] += count[i - 1];

  for (int i = size - 1; i >= 0; i--)
  {
    result[count[array[i]] - 1] = array[i];
    count[array[i]]--;
  }
  for (int i = 0; i < size; i++)
    array[i] = result[i];
}

void display_arr(int array[], int size)
{
  for (int i = 0; i < size; i++)
    printf("%d\t", array[i]);
  printf("\n");
}