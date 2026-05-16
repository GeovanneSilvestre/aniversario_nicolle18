#include <stdio.h>

void inverterString(char *str) {
    char *inicio = str;
    char *fim = str;
    char temp;

    // Move o ponteiro 'fim' até o último caractere válido antes do '\0'
    while (*fim != '\0') {
        fim++;
    }
    fim--; // Recua uma posição para ignorar o '\0'

    // Troca os caracteres das extremidades aproximando os ponteiros até eles se cruzarem
    while (inicio < fim) {
        temp = *inicio;
        *inicio = *fim;
        *fim = temp;

        inicio++; // Avança o ponteiro do início
        fim--;    // Recua o ponteiro do fim
    }
}

int main() {
    char palavra[] = "brasil";

    printf("Original: %s\n", palavra);
    
    inverterString(palavra);
    
    printf("Invertida: %s\n", palavra);

    return 0;
}   