//5
function calcularSalario() {
    var salarioAtual = parseFloat(document.getElementById("salario").value);
  
    if (!isNaN(salarioAtual)) {
      var aumento = salarioAtual * 0.15;
      var novoSalario = salarioAtual + aumento;
  
      document.getElementById("resultado5").innerText =
        "Parabéns! Você ganhou 15% de aumento. Seu novo salário é: R$ " +
        novoSalario.toFixed(2);
    } else {
      document.getElementById("resultado5").innerText =
        "Por favor, digite um salário válido.";
    }
  }
  //6
  function calcularConversao() {
    var temperaturaFahrenheit = parseFloat(
      document.getElementById("Fahrenheit").value
    );
  
    if (!isNaN(temperaturaFahrenheit)) {
      var temperaturaCelsius = ((temperaturaFahrenheit - 32) * 5) / 9;
  
      document.getElementById("resultado6").innerText =
        "A temperatura em Celsius é: " + temperaturaCelsius.toFixed(2) + " °C";
    } else {
      document.getElementById("resultado6").innerText =
        "Por favor, digite uma temperatura válida em Fahrenheit.";
    }
  }