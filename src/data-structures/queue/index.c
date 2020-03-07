
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

#define SIZE 3

typedef struct queue {
  int items[SIZE];
  int front;
  int back;
} queue;

void create_queue(queue *q);
bool is_full (queue *q);
bool is_empty (queue *q);
int enqueue (queue *q, int item);
int dequeue (queue *q);
int peek (queue *q);
int display (queue *q);

int main (int argc, char** argv[])
{
  queue *q = malloc(sizeof(queue));

  create_queue(q);
  enqueue(q, 1);
  enqueue(q, 2);
  enqueue(q, 3);
  enqueue(q, 4);
  peek(q);
  display(q);
  dequeue(q);
  dequeue(q);
  dequeue(q);
  display(q);
}

void create_queue (queue *q)
{
  q->front = -1;
  q->back = -1;
}

int enqueue (queue *q, int item) 
{
  if (is_full(q))
  {
    printf("\nthe queue is full!");
    return 1;
  }

  if (is_empty(q))
    q->front = 0;

  q->back++;
  q->items[q->back] = item;
  printf("\nInserted -> %d", item);
  return 0;
}

int dequeue (queue *q)
{
  if (is_empty(q))
  {
    printf("\nthe queue is empty!");
    return 1;
  }
  printf("item is dequeued -> %d\t\n", q->items[q->back]);
  q->back--;
  return 0;
}

bool is_empty (queue *q) 
{
  return q->front == - 1;
}

bool is_full (queue *q)
{
  return q->back == SIZE - 1;
}

int peek (queue *q)
{
  printf("\nthe rear item is %d\n", q->items[q->back]);
}

int display(queue *q)
{
  if (q->back == -1)
  {
    printf("the queue is empty!\n");
    return 1;
  }
  printf("\nQueue items are:\n");
  for(int i=q->front; i<=q->back; i++)
      printf("%d\t",q->items[i]);
  printf("\n");
  return 0;
}
