// main.c - Test C
#include <stdio.h>

#define MAX_SIZE 100

int main() {
    int number = 10;
    char *text = "Carbon Theme";
    
    // Pętla testowa
    for(int i = 0; i < 5; i++) {
        printf("Index: %d, Text: %s\n", i, text);
    }

    return 0;
}