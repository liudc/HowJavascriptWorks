#include <stdio.h>
#include <stdlib.h>

int main() {
    int a = 1;
    a = (a += 1) + a;
    printf("%d\n", a);

    a = 1;
    a = a + (a += 1);
    printf("%d\n", a);

    a = 1;
    a = (a++) + a;
    printf("%d\n", a);

    a = 1;
    a = a + (a++);
    printf("%d\n", a);


    return;
}
