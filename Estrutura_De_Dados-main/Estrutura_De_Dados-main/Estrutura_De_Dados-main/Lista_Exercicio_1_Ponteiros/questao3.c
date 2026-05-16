#include <stdio.h>

int main() {
    int variavel = 42;
    int *ponteiro;

    // Atribui o endereço da variável ao ponteiro
    ponteiro = &variavel;

    // %p é o especificador de formato correto para exibir endereços de memória (em hexadecimal)
    printf("Valor da variavel:                   %d\n", variavel);
    printf("Endereco da variavel (&variavel):    %p\n", (void*)&variavel);
    printf("Valor do ponteiro (ponteiro):         %p\n", (void*)ponteiro);
    printf("Valor apontado pelo ponteiro (*ponteiro): %d\n", *ponteiro);

    return 0;
}