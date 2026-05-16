#include <stdio.h>

void encontrarMaiorMenor(int *array, int tamanho, int *maior, int *menor) {
    // Inicializa o maior e o menor com o primeiro elemento do array
    *maior = *(array + 0); // Equivalente a array[0]
    *menor = *(array + 0);

    for (int i = 1; i < tamanho; i++) {
        // Usando aritmética de ponteiros para navegar no array
        if (*(array + i) > *maior) {
            *maior = *(array + i);
        }
        if (*(array + i) < *menor) {
            *menor = *(array + i);
        }
    }
}

int main() {
    int numeros[] = {23, 5, 89, -4, 12, 77, 0};
    int tam = sizeof(numeros) / sizeof(numeros[0]);
    int maiorElemento, menorElemento;

    // Passamos as variáveis por referência (&) para receber os resultados
    encontrarMaiorMenor(numeros, tam, &maiorElemento, &menorElemento);

    printf("Array analisado: {23, 5, 89, -4, 12, 77, 0}\n");
    printf("Maior elemento: %d\n", maiorElemento);
    printf("Menor elemento: %d\n", menorElemento);

    return 0;
}