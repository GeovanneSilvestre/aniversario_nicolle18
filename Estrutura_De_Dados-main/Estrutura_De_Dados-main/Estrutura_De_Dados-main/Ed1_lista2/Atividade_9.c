
#include <stdio.h>
#include <stdlib.h>



int main() {
    int matriz[3][3];
    int i, j;

    printf("Digite os elementos da matriz 3x3:\n");
    for(i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++) {
            scanf("%d", &matriz[i][j]);
        }
    }

    
    printf("\nMatriz digitada:\n");
    for(i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++) {
            printf("%d ", matriz[i][j]);
        }
        printf("\n");
    }

    
    printf("\nElementos que NAO pertencem a diagonal principal:\n");
    for(i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++) {
            if(i != j) {
                printf("%d ", matriz[i][j]);
            }
        }
    }

    
    printf("\n\nElementos que NAO pertencem a diagonal secundaria:\n");
    for(i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++) {
            if(i + j != 2) { // 3-1 = 2
                printf("%d ", matriz[i][j]);
            }
        }
    }

    printf("\n");

    return 0;
}