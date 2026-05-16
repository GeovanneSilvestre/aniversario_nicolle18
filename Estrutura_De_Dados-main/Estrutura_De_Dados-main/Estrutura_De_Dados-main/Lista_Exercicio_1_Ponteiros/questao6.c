#include <stdio.h>
#include <ctype.h> // Usado para a função tolower()

void contarVogaisConsoantes(char *str, int *vogais, int *consoantes) {
    // Inicializa os contadores em zero através dos ponteiros
    *vogais = 0;
    *consoantes = 0;

    while (*str != '\0') {
        char ch = tolower(*str); // Converte para minúsculo para facilitar a validação

        // Verifica se é uma letra
        if (ch >= 'a' && ch <= 'z') {
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                (*vogais)++;
            } else {
                (*consoantes)++;
            }
        }
        str++; // Avança para o próximo caractere
    }
}

int main() {
    char texto[] = "Estruturas de Dados 2026";
    int qtdVogais, qtdConsoantes;

    contarVogaisConsoantes(texto, &qtdVogais, &qtdConsoantes);

    printf("Texto analisado: \"%s\"\n", texto);
    printf("Quantidade de vogais: %d\n", qtdVogais);
    printf("Quantidade de consoantes: %d\n", qtdConsoantes);

    return 0;
}