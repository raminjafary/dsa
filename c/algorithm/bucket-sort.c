#include <stdio.h>

void display_arr(int array[], int size);
void bucket_sort(int array[], int size);

int main()
{
  int array[] = {5, 20, 6, 10, 8, 1, 2};
  int size = sizeof(array) / sizeof(array[0]);

  bucket_sort(array, size);
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

// Time complexity Ω(n+k)	Θ(n+k)	O(n^2)
// Space complexity O(n)
void bucket_sort(int array[], int size)
{
  const int upper_bound = find_max(array, size);
  int buckets[upper_bound + 1];

  for (int i = 0; i <= upper_bound; i++)
    buckets[i] = 0;

  for (int i = 0; i < size; i++)
    buckets[array[i]]++;

  for (int i = 0, j = 0; i <= upper_bound; i++)
  {
    while (buckets[i] > 0)
    {
      array[j++] = i;
      buckets[i]--;
    }
  }
}

void display_arr(int array[], int size)
{
  for (int i = 0; i < size; i++)
    printf("%d\t", array[i]);
  printf("\n");
}