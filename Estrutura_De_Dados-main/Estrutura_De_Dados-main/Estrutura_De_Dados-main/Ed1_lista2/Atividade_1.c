
#include <stdio.h>

int main() {
    int matriz[4][4];
    int i, j;
    int soma_coluna[4] = {0, 0, 0, 0};

    // Leitura da matriz
    printf("Digite os elementos da matriz 4x4:\n");
    for(i = 0; i < 4; i++) {
        for(j = 0; j < 4; j++) {
            scanf("%d", &matriz[i][j]);
        }
    }

    // Exibição da matriz
    printf("\nMatriz digitada:\n");
    for(i = 0; i < 4; i++) {
        for(j = 0; j < 4; j++) {
            printf("%d ", matriz[i][j]);
        }
        printf("\n");
    }

    // Soma de cada coluna
    for(j = 0; j < 4; j++) {
        for(i = 0; i < 4; i++) {
            soma_coluna[j] += matriz[i][j];
        }
    }

    // Exibir soma das colunas
    printf("\nSoma de cada coluna:\n");
    for(j = 0; j < 4; j++) {
        printf("Coluna %d: %d\n", j + 1, soma_coluna[j]);
    }

    return 0;
}