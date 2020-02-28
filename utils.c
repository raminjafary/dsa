#include <stdbool.h>

bool is_integer(double val)
{
    int truncated = (int) val;
    return (val == truncated);
}