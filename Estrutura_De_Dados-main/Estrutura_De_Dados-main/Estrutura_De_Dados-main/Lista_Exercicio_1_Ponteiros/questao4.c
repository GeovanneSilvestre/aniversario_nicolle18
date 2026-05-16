#include <stdio.h>

void dobrar(int *num) {
    // Desatribui o ponteiro para alterar o valor da variável original
    *num = (*num) * 2;
}

int main() {
    int numero;

    printf("Digite um numero inteiro: ");
    scanf("%d", &numero);

    printf("Valor original: %d\n", numero);
    
    // Passa o endereço de memória
    dobrar(&numero);

    printf("Dobro do valor: %d\n", numero);

    return 0;
}