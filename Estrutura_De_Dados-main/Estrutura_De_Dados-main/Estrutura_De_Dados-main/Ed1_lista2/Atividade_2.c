
#include <stdio.h>
#include <stdlib.h>



int main() {
    int matriz[3][3];
    int i, j;
    int menor, maior;

   
    printf("Digite os elementos da matriz 3x3:\n");
    for(i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++) {
            scanf("%d", &matriz[i][j]);
        }
    }

   
    menor = matriz[0][0];
    maior = matriz[0][0];

   
    printf("\nMatriz digitada:\n");
    for(i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++) {
            printf("%d ", matriz[i][j]);

            if(matriz[i][j] < menor) {
                menor = matriz[i][j];
            }
            if(matriz[i][j] > maior) {
                maior = matriz[i][j];
            }
        }
        printf("\n");
    }


    printf("\nMenor elemento: %d\n", menor);
    printf("Maior elemento: %d\n", maior);

    return 0;
}