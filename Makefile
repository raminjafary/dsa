EXE := compile
CC=gcc
SRC := $(wildcard src/**/**/*.c)
OBJ := $(SRC:.c=.o)

CPPFLAGS := -Iinclude
CFLAGS   := -Wall
LDFLAGS  := -Llib
LDLIBS   := -lm

.PHONY: all clean

all: $(EXE)

$(EXE): $(OBJ)
		$(CC) $(LDFLAGS) $^ $(LDLIBS) -o $@
		
clean:
		$(RM) $(OBJ)
		