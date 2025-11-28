function realizarOperacao(operacao) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Digite dois números válidos!";
    } else {
        switch (operacao) {
            case 'soma':
                resultado = num1 + num2;
                break;

            case 'divisao':
                resultado = num2 !== 0 ? num1 / num2 : "Erro: divisão por zero!";
                break;

            case 'multiplicacao':
                resultado = num1 * num2;
                break;
            
            case 'subtracao':
                resultado = num1 - num2;
                break;


            default:
                resultado = "Operação inválida!";
        }
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}
