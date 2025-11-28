const visor = document.getElementById('visor');

// Adiciona números e operadores
function adicionarAoVisor(valor) {
    if (visor.value === '0' && valor !== '.') {
        visor.value = valor;
    } else {
        visor.value += valor;
    }
}

// Limpar visor
function limparVisor() {
    visor.value = '0';
}

// Calcular expressão
function calcularResultado() {
    try {
        const resultado = eval(visor.value);
        visor.value = resultado;
    } catch (e) {
        visor.value = 'Erro!';
    }
}
