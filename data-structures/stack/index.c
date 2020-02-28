#include<stdio.h>
#include<stdlib.h>

#define SIZE 5

typedef struct stack 
{
  int items[SIZE];
  int top;
} stack;

void create_stack (stack *s) 
{
  s->top = -1;
}

int is_empty (stack *s) 
{
  return s->top == -1;
}

int is_full (stack *s) 
{
  return s->top == SIZE - 1;
}

void push (stack *s, int item) 
{
  if(is_full(s))
    printf("stack is full!\n"); 

  s->top++;
  s->items[s->top] = item;
}
void pop (stack *s)
{
  if (is_empty(s))
     printf("stack is empty\n");

  printf("item poped is ->%d\n", s->items[s->top]);
  s->top--;
}
void peek (stack *s) {
 if (is_full(s))
 {
   printf("top most item is -> %d\n", s->items[s->top]);
 }
  printf("top most elemet is -> %d\n", s->items[s->top]);
}

void main () {
  stack *s = malloc(sizeof(stack));

  create_stack(s);

  push(s, 9);
  push(s, 6);
  push(s, 5);
  push(s, 4);
  push(s, 0);
  push(s, 8);
  pop(s);
  peek(s);
}