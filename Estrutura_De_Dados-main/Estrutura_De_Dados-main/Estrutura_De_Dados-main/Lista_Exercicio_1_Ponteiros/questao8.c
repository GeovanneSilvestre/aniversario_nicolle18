#include <stdio.h>

void calcular(float n1, float n2, float *soma, float *sub, float *mult, float *div) {
    *soma = n1 + n2;
    *sub  = n1 - n2;
    *mult = n1 * n2;
    
    // Tratamento para evitar a divisão por zero
    if (n2 != 0) {
        *div = n1 / n2;
    } else {
        *div = 0.0; // Define um valor padrão ou de erro
    }
}

int main() {
    float num1 = 10.5, num2 = 2.5;
    float rSoma, rSub, rMult, rDiv;

    calcular(num1, num2, &rSoma, &rSub, &rMult, &rDiv);

    printf("Numeros: %.2f e %.2f\n", num1, num2);
    printf("-------------------------\n");
    printf("Soma:           %.2f\n", rSoma);
    printf("Subtracao:      %.2f\n", rSub);
    printf("Multiplicacao:  %.2f\n", rMult);
    
    if (num2 != 0) {
        printf("Divisao:        %.2f\n", rDiv);
    } else {
        printf("Divisao:        Erro (Divisao por zero)\n");
    }

    return 0;
}