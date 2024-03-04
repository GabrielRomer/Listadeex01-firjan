//9
function calcular() {
    var numero = parseFloat(document.getElementById("numero").value);
  
    if (!isNaN(numero)) {
      var quadrado = numero ** 2;
      var raizQuadrada = Math.sqrt(numero);
  
      document.getElementById("resultado9").innerText =
        "Número digitado: " +
        numero +
        "\n" +
        "Quadrado: " +
        quadrado.toFixed() +
        "\n" +
        "Raiz Quadrada: " +
        raizQuadrada.toFixed();
    } else {
      document.getElementById("resultado9").innerText =
        "Por favor, insira um número válido.";
    }
  }

  //10
function calcularPrestacao() {
    var valorOriginal = parseFloat(document.getElementById("valor").value);
    var taxaAtraso = parseFloat(document.getElementById("taxa").value);
    var diasAtraso = parseInt(document.getElementById("tempo").value);
  
    if (isNaN(valorOriginal) || isNaN(taxaAtraso) || isNaN(diasAtraso)) {
      document.getElementById("resultado10").innerText =
        "Por favor, preencha todos os campos corretamente.";
    } else {
      var taxaPercentual = taxaAtraso / 100;
      var prestacaoAtraso =
        valorOriginal + valorOriginal * taxaPercentual * diasAtraso;
  
      document.getElementById("resultado10").innerText =
        "A prestação em atraso é: R$ " + prestacaoAtraso.toFixed(2);
    }
  }