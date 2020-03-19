#include <stdio.h>
#include <math.h>

void merge_sort (int arr[], int start, int end);
void display_arr (int items[], int size);

int main (int argc, char * argv[])
{
  int arr[] = {1, 5, 8, 0, -1};
  int len = sizeof(arr) / sizeof(arr[0]);
  merge_sort (arr, 0, len - 1);
  display_arr (arr, len);
}

void merge (int arr[], int start, int m, int end)
{
  int l = m - start + 1;
  int r = end - m;

  int r_arr[l], l_arr[r];

  int lp = 0;
  int rp = 0;
  int kp = start;

  while (lp < l)
  {
    l_arr[lp] = arr[start + lp];
    lp++;
  }

  while (rp < r)
  {
    r_arr[rp] = arr[m + 1 + rp];
    rp++;
  }

  lp = 0;
  rp = 0;

  while (lp < l && rp < r)
  {
    if (l_arr[lp] <= r_arr[rp])
    {
      arr[kp] = l_arr[lp];
      lp++;
    }
    else
    {
      arr[kp] = r_arr[rp];
      rp++;
    }
    kp++;
  }

  while (lp < l)
  {
    arr[kp] = l_arr[lp];
    kp++;
    lp++;
  }
  
    while (rp < r)
  {
    arr[kp] = r_arr[rp];
    kp++;
    rp++;
  }
}
// Time Complexity: Ω(n log(n))	Θ(n log(n))	O(n log(n))
// Space complexity: O(n)
void merge_sort (int arr[], int start, int end)
{
  if (start < end)
  {
    int m = round((start + end) / 2);
    merge_sort (arr, start, m);
    merge_sort (arr, m + 1, end);
    merge(arr, start, m, end);
  }
}

void display_arr (int items[], int size)
{
  for (int i = 0; i < size; i++)
  {
    printf("%d\t", items[i]);
  }
  printf("\n");
}