
#include <stdio.h>
#include <stdlib.h>


int main() {
    int matriz[4][4];
    int i, j;

    
    printf("Digite os elementos da matriz 4x4:\n");
    for(i = 0; i < 4; i++) {
        for(j = 0; j < 4; j++) {
            scanf("%d", &matriz[i][j]);
        }
    }

   
    printf("\nMatriz digitada:\n");
    for(i = 0; i < 4; i++) {
        for(j = 0; j < 4; j++) {
            printf("%d ", matriz[i][j]);
        }
        printf("\n");
    }

    
    printf("\nElementos da diagonal secundaria:\n");
    for(i = 0; i < 4; i++) {
        printf("%d ", matriz[i][3 - i]);
    }

    printf("\n");

    return 0;
}