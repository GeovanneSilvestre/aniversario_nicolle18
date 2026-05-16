#include <stdio.h>

void copiarString(char *origem, char *destino) {
    // O laço continua até encontrar o caractere nulo '\0' que encerra a string de origem
    while (*origem != '\0') {
        *destino = *origem; // Copia o caractere atual
        origem++;           // Avança o ponteiro da origem
        destino++;          // Avança o ponteiro do destino
    }
    *destino = '\0'; // Adiciona o caractere nulo no final da nova string
}

int main() {
    char strOriginal[] = "Ponteiros em C sao poderosos!";
    char strCopia[50]; // Espaço suficiente para receber a cópia

    copiarString(strOriginal, strCopia);

    printf("String Original: %s\n", strOriginal);
    printf("String Copiada:  %s\n", strCopia);

    return 0;
}