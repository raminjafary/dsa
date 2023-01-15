#include <stdio.h>
#include <stdlib.h>

#define SIZE 5

typedef struct stack
{
  int items[SIZE];
  int top;
} stack;

void create_stack(stack *s)
{
  s->top = -1;
}

int is_empty(stack *s)
{
  return s->top == -1;
}

int is_full(stack *s)
{
  return s->top == SIZE - 1 || s->top > SIZE;
}

int push(stack *s, int item)
{
  if (is_full(s))
  {
    printf("stack is full!\n");
    return 1;
  }

  s->top++;
  s->items[s->top] = item;
  return 0;
}
void pop(stack *s)
{
  if (is_empty(s))
    printf("stack is empty\n");

  printf("item popped is -> %d\n", s->items[s->top]);
  s->top--;
}
void peek(stack *s)
{
  if (is_empty(s))
    printf("stack is empty\n");

  printf("top most elemet is -> %d\n", s->items[s->top]);
}

void main()
{
  stack *s = malloc(sizeof(stack));

  create_stack(s);

  push(s, 9);
  push(s, 6);
  push(s, 5);
  push(s, 4);
  push(s, 2);
  pop(s);
  peek(s);
}