#include <stdio.h>

void display_arr(int array[], int size);
void radix_sort(int array[], int size);

int main()
{
  int array[] = {7, 9, 6, 8, 8, 1, 2, 0};
  int size = sizeof(array) / sizeof(array[0]);

  radix_sort(array, size);
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

void counting_sort(int array[], int size, int place)
{
  int max = (find_max(array, size) / place) % 10;
  int count[max + 1];
  int result[size];

  for (int i = 0; i <= max; i++)
    count[i] = 0;

  for (int i = 0; i < size; i++)
    count[(array[i] / place) % 10]++;

  for (int i = 1; i <= max; i++)
    count[i] += count[i - 1];

  for (int i = size - 1; i >= 0; i--)
  {
    result[count[((array[i]) / place) % 10] - 1] = array[i];
    count[(array[i] / place) % 10]--;
  }
  for (int i = 0; i < size; i++)
    array[i] = result[i];
}
// Time complexity Ω(nk) Θ(nk) O(nk)
// Space complexity O(n+k)
void radix_sort(int array[], int size)
{
  int max = find_max(array, size);

  for (int place = 1; max / place > 0; place *= 10)
    counting_sort(array, size, place);
}

void display_arr(int array[], int size)
{
  for (int i = 0; i < size; i++)
    printf("%d\t", array[i]);
  printf("\n");
}