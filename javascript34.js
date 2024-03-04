//3

function converterParaReal() {
  var valorEmDolares = parseFloat(
    document.getElementById("valorEmDolares").value
  );

  if (isNaN(valorEmDolares)) {
    document.getElementById("resultado3").innerHTML =
      "Por favor, digite um valor válido.";
  } else {
    var taxaDeCambioFixa = 3.8;
    var valorEmReais = valorEmDolares * taxaDeCambioFixa;

    document.getElementById("resultado3").innerHTML =
      "O valor em reais é: R$ " + valorEmReais.toFixed(2);
  }
}

//4
function calcularSa() {
  var numero = parseInt(document.getElementById("numm").value);
  var resultadoDiv = document.getElementById("resultado4");

  if (!isNaN(numero)) {
    var antecessor = numero - 1;

    var sucessor = numero + 1;

    resultadoDiv.innerHTML =
      "Número: " +
      numero +
      "   Sucessor: " +
      sucessor +
      "  Antecessor: " +
      antecessor;
  } else {
    resultadoDiv.innerHTML = "Por favor, digite um número válido.";
  }
}
