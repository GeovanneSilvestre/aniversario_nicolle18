
#include <stdio.h>
#include <stdlib.h>

int main() {
    float matriz[3][4];
    int i, j;
    float soma_linha[3] = {0, 0, 0};

    
    printf("Digite os elementos da matriz 3x4:\n");
    for(i = 0; i < 3; i++) {
        for(j = 0; j < 4; j++) {
            scanf("%f", &matriz[i][j]);
        }
    }

  
    printf("\nMatriz digitada:\n");
    for(i = 0; i < 3; i++) {
        for(j = 0; j < 4; j++) {
            printf("%.2f ", matriz[i][j]);
        }
        printf("\n");
    }

    
    for(i = 0; i < 3; i++) {
        for(j = 0; j < 4; j++) {
            soma_linha[i] += matriz[i][j];
        }
    }

 
    printf("\nSoma de cada linha:\n");
    for(i = 0; i < 3; i++) {
        printf("Linha %d: %.2f\n", i + 1, soma_linha[i]);
    }

    return 0;
}