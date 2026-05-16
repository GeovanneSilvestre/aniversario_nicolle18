#include <stdio.h>

// Função que recebe os ponteiros e troca os valores contidos neles
void trocarValores(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x, y;

    printf("Digite o valor de X: ");
    scanf("%d", &x);
    printf("Digite o valor de Y: ");
    scanf("%d", &y);

    printf("\nValores originais: X = %d, Y = %d\n", x, y);

    // Passamos o endereço de memória das variáveis usando o operador &
    trocarValores(&x, &y);

    printf("Valores trocados:  X = %d, Y = %d\n", x, y);

    return 0;
}