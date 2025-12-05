document.getElementById("btnCalcular").addEventListener("click", calcularIMC);

function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultadoDiv = document.getElementById("resultado");

    if (!peso || !altura) {
        resultadoDiv.style.display = "block";
        resultadoDiv.style.color = "#c0392b";
        resultadoDiv.innerHTML = "⚠ Preencha todos os campos corretamente.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else if (imc < 35) classificacao = "Obesidade Grau I";
    else if (imc < 40) classificacao = "Obesidade Grau II (Severa)";
    else classificacao = "Obesidade Grau III (Mórbida)";

    resultadoDiv.style.display = "block";
    resultadoDiv.style.color = "#2c3e50";

    resultadoDiv.innerHTML =
        `IMC: <strong>${imc.toFixed(2)}</strong><br>` +
        `Classificação: <strong>${classificacao}</strong>`;
}
