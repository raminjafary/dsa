#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define SIZE 5

typedef struct queue
{
  int items[SIZE];
  int front;
  int back;
} queue;

void create_queue(queue *q);
int peek(queue *q);
int enqueue(queue *q, int value);
int dequeue(queue *q);

int main(int argc, char *argv[])
{
  queue *q = malloc(sizeof(queue));

  create_queue(q);
  enqueue(q, 5);
  enqueue(q, 3);
  enqueue(q, 9);
  peek(q);
  dequeue(q);
  dequeue(q);
  dequeue(q);
  dequeue(q);
  dequeue(q);
  peek(q);
}

void create_queue(queue *q)
{
  q->front = -1;
  q->back = -1;
}

bool is_full(queue *q)
{
  return q->front == q->back + 1 || (q->front == 0 && q->back == SIZE - 1);
}

bool is_empty(queue *q)
{
  return q->front == -1;
}

int peek(queue *q)
{
  if (is_empty(q))
  {
    printf("the empty queue has no peek!\n");
    return 1;
  }
  printf("The rear item is -> %d\n", q->items[q->back]);
  return 0;
}

int enqueue(queue *q, int value)
{
  if (is_full(q))
  {
    printf("the queue is full!\n");
    return 1;
  }

  if (q->front == -1)
    q->front = 0;

  q->back = (q->back + 1) % SIZE;
  q->items[q->back] = value;

  printf("the item enqueued is -> %d\n", value);
  return 0;
}

int dequeue(queue *q)
{
  if (is_empty(q))
  {
    printf("the queue is empty!\n");
    return 1;
  }

  if (q->front == q->back)
  {
    create_queue(q);
  }

  q->front = (q->back + 1) % SIZE;

  printf("the item dequeued is -> %d\n", q->items[q->back]);
  q->back--;
  return 0;
}