from typing import List


def sort(items: List[int]) -> None:
    for i in range(len(items)):
        swapped = False

        for j in range(len(items) - i - 1):

            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
                swapped = True

        if not swapped:
            break


items = [2, 5, 0, 9, -1, 8, 10]
sort(items)
print(items)
