//7
function calcularMedia() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
  
    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
      var media = (nota1 + nota2 + nota3) / 3;
  
      document.getElementById("resultado7").innerText =
        "A média das suas últimas 3 notas é: " + media.toFixed(2);
    } else {
      document.getElementById("resultado7").innerText =
        "Por favor, digite notas válidas.";
    }
  }
  //8
  function calcularConsumo() {
    var distancia = parseFloat(document.getElementById("distancia").value);
    var consumoMedio = parseFloat(document.getElementById("consumoMedio").value);
  
    if (!isNaN(distancia) && !isNaN(consumoMedio) && consumoMedio > 0) {
      var litrosNecessarios = distancia / consumoMedio;
  
      document.getElementById("resultado8").innerText =
        "Para percorrer " +
        distancia +
        " km, você precisará de " +
        litrosNecessarios.toFixed() +
        " litros de combustível.";
    } else {
      document.getElementById("resultado8").innerText =
        "Por favor, insira valores válidos.";
    }
  }
  
  