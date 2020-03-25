#include <stdio.h>
#include <stdlib.h>

typedef struct node
{
  int data;
  struct node *next;

} node;

void insert_at_head(node **head_ref, int n);
void traverse(node *head_address);
void insert_at_tail(node *head_address, int n);
void insert(node *head_address, int index, int n);
void remove_head(node **head_ref);
void remove_tail(node *head_address);
void remove_node(node *head_address, int index);

int main(int argc, char **argv[])
{
  node *head = NULL;

  insert_at_head(&head, 1);
  insert_at_head(&head, 3);
  insert_at_tail(head, 5);
  insert_at_tail(head, 6);
  insert(head, 0, 10);
  remove_head(&head);
  remove_tail(head);
  remove_node(head, 1);
  traverse(head);
}

void insert_at_head(node **head_ref, int n)
{
  node *head = *head_ref;
  node *new_node = malloc(sizeof(node));
  new_node->data = n;
  new_node->next = head;
  head = new_node;
  *head_ref = head;
}

void insert_at_tail(node *head_address, int n)
{
  node *new_node = malloc(sizeof(node));
  node *temp = head_address;

  while (temp->next != NULL)
    temp = temp->next;

  new_node->data = n;
  new_node->next = NULL;
  temp->next = new_node;
}

void insert(node *head_address, int index, int n)
{
  node *new_node = malloc(sizeof(node));
  node *temp = head_address;
  int step = 1;

  while (step < index && temp->next != NULL)
  {
    step++;
    temp = temp->next;
  }
  new_node->next = temp->next;
  new_node->data = n;
  temp->next = new_node;
}

void remove_head(node **head_ref)
{
  node *head = *head_ref;
  head = head->next;
  *head_ref = head;
}

void remove_tail(node *head_address)
{
  node *temp = head_address;
  while (temp->next->next != NULL)
    temp = temp->next;

  temp->next = NULL;
}

void remove_node(node *head_address, int index)
{
  node *temp = head_address;
  int step = 1;
  while (step < index && temp->next != NULL)
  {
    step++;
    temp = temp->next;
  }
  temp->next = temp->next->next;
}

void traverse(node *head_address)
{
  node *temp = head_address;
  while (temp != NULL)
  {
    printf("%d ---> ", temp->data);
    temp = temp->next;
  }
  printf("\n");
}
