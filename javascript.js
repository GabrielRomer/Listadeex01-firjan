function enviarDados() {
  var nome = document.getElementById("nome").value;
  var sexo = document.getElementById("sexo").value;

  resultado1(nome, sexo);
}

function resultado1(nome, sexo) {
  var dadosNome = document.getElementById("dadosNome");
  var dadosSexo = document.getElementById("dadosSexo");
  if (dadosNome) {
    dadosNome.innerText = "Nome: " + nome;
  }
  if (dadosSexo) {
    dadosSexo.innerText = "Sexo: " + sexo;
  }
}

//2

function calculo() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var num3 = parseInt(document.getElementById("num3").value);
  var num4 = parseInt(document.getElementById("num4").value);

  var soma = num1 + num2 + num3 + num4;
  var multiplicação = num1 * num2 * num3 * num4;

  document.getElementById("soma").innerText = "Adição: " + soma;
  document.getElementById("Multiplicar").innerText =
    "multiplicação: " + multiplicação;
}





