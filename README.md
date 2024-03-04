Pseudocódigo: 1 - informe seus dados
1. Início 
⦁	 Exibir na tela um formulário para informar dados pessoais.
2. Entrada de Dados
⦁	Solicitar o nome completo.
⦁	Solicitar o sexo.
3. Processamento
⦁	Ao clicar no botão "Enviar", executar a função "enviarDados".
⦁	Guardar o valor inserido no campo "nome".
⦁	Guardar o valor inserido no campo "sexo".
4. Saída de Dados
⦁	Exibir na tela os dados informados.
5. Fim
1 - informe seus dados

html:
<h1>1 - Informe seus dados</h1>
    <label for="nome">Nome Completo:</label>
    <input type="text" id="nome" placeholder="Digite seu nome completo" />

    <label for="sexo">Sexo:</label>
    <input type="text" id="sexo" placeholder="Digite seu sexo"/>

    <button onclick="enviarDados()">Enviar</button>

    <div id="resultado1">
      <p><strong>Dados informados:</strong></p>
      <p id="dadosNome"></p>
      <p id="dadosSexo"></p>
    </div>
javascript:

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






Pseudocódigo: 2 - Soma e Multiplicação de 4 números inteiros.
1. Início do Programa
⦁	  Exibir na tela um formulário para informar 4 números inteiros.
2. Entrada de Dados
⦁	  Solicitar o primeiro número ao usuário.
⦁	  Guadar resposta no campo "num1".
⦁	  Solicitar o segundo número ao usuário.
⦁	  Guadar resposta no campo "num2".
⦁	  Solicitar o terceiro número ao usuário.
⦁	  Guadar resposta no campo "num3".
⦁	  Solicitar o quarto número ao usuário.
⦁	  Guadar resposta no campo "num4".
3.Processamento
⦁	  Ao clicar no botão "Calcular", executar a função "calculo".
⦁	  Calcular a soma dos 4 números.
⦁	  Calcular a multiplicação dos 4 números.
4. Saída de Dados
⦁	  Exibir na tela os resultados da soma e multiplicação.
⦁	  Exibir a soma no elemento com id "soma".
⦁	  Exibir a multiplicação no elemento com id "Multiplicar".
5. Fim

html:
<h1>2 - Soma e Multiplicação de 4 números inteiros</h1>

    <label for="num1">Número 1:</label>
    <input type="number" id="num1" />

    <label for="num2">Número 2:</label>
    <input type="number" id="num2" />

    <label for="num3">Número 3:</label>
    <input type="number" id="num3" />

    <label for="num4">Número 4:</label>
    <input type="number" id="num4" />

    <button onclick="calculo()">Calcular</button>

    <div id="resultado2">
      <p><strong>Resultados:</strong></p>
      <p id="soma"></p>
      <p id="Multiplicar"></p>
    </div>
    
javascript:

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








Pseudocódigo: 3 - Quantos dólares você quer converter para o Real agora?
1. Início do Programa
⦁	  Exibir na tela um formulário para informar o valor em dólares.
2. Entrada de Dados
⦁	  Solicitar ao usuário o valor em dólares.
⦁	  guardar a entrada o valor no campo "valorEmDolares".

3. Processamento
⦁	  Ao clicar no botão "Converter", executar a função "converterParaReal".
⦁	  Obter o valor do campo "valorEmDolares".
⦁	  Calcular a conversão para real considerando uma taxa fixa.
⦁	  Exibir o resultado na tela.

4. Saída de Dados
⦁	  Exibir na tela o resultado da conversão em real no elemento com id "resultadoEmReal".
5. Fim do Programa

html:

<h1>3 - Quantos dólares você quer converter para o Real agora?</h1>
    <input
      type="number"
      id="valorEmDolares"
      placeholder="Digite o valor em dólares"
    />
    <button onclick="converterParaReal()">Converter</button>
    <div id="resultado3"></div>
    
javascript:


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
  
      document.getElementById("resultado em real").innerHTML =
        "O valor em reais é: R$ " + valorEmReais.toFixed(2);
    }
  }





  

Pseudocódigo: 4- Coloque um numero e veja seu sucessor e antecessor.

1. Início do Programa
⦁	  Exibir na tela um formulário para informar um número.
2. Entrada de Dados
⦁	  Solicitar ao usuário um número.
⦁	  Aguardar a entrada do usuário no campo "numm".

3. Processamento
⦁	  Ao clicar no botão "Ver Sucessor e Antecessor", executar a função "calcularSa".
⦁	  Obter o valor do campo "numm".
⦁	  Calcular e exibir o sucessor e antecessor na tela.

4. Saída de Dados
⦁	  Exibir na tela o resultado do sucessor e antecessor no elemento com id "resultado4".

5. Fim do Programa
html:

    <h1>4- Coloque um numero e veja seu sucesso e antecessor</h1>

    <label for="numm">Número:</label>
    <input type="number" id="numm" placeholder="Digite qualquer número"/>
    <button onclick="calcularSa()">Ver Sucessor e Antecessor</button>

    <div id="resultado4"></div>


javascript: 

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






Pseudocódigo: 5- Cálculo de Aumento Salarial
1. Início do Programa
⦁	  Exibir na tela um formulário para informar o salário.

2. Entrada de Dados
⦁	  Solicitar ao usuário o salário.
⦁	  Aguardar a entrada do usuário no campo "salario".

3. Processamento
⦁	  Ao clicar no botão "Calcular Aumento",
⦁	  Obter o valor digitado no campo "salario".
⦁	  Verificar se o valor é um número válido.
⦁	  Se for um número válido, calcular o aumento salarial.
⦁	  Calcular o novo salário (salário + aumento).
⦁	  Se não for um número válido, exibir uma mensagem de erro.

4.Saída de Dados
⦁	  Exibir na tela o resultado do cálculo.
⦁	  Se o cálculo for bem-sucedido, mostrar o novo salário com aumento.
⦁	  Se houver um erro, mostrar uma mensagem indicando que o usuário deve digitar um salário válido.

5. Fim do Programa

html:

<h1>5- Cálculo de Aumento Salarial</h1>
    <label for="salario">Salário:</label>
    <input type="number" id="salario" placeholder="Qual o seu salario hoje?" />
    <button onclick="calcularSalario()">Calcular Aumento</button>
    <p id="resultado5"></p>

javascript: 

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





Pseudocódigo 6 - Conversão de Temperatura Fahrenheit para Graus Celsius:

1. Início
⦁	  Exibir na tela um campo para inserir a temperatura em Fahrenheit.
⦁	  Exibir um botão para realizar a conversão.
⦁	  Exibir um espaço para mostrar o resultado.

2. Entrada de Dados
⦁	  Solicitar a temperatura em Fahrenheit.
   
3. Processamento
⦁	  Ao clicar no botão "Converter para Celsius", executar a função "calcularConversao".
⦁	  Calcular a temperatura em Celsius usando a fórmula c = (f - 32) * 5/9, onde c é a temperatura em Celsius e f é a temperatura em Fahrenheit.

4. Saída de Dados
⦁	  Exibir na tela a temperatura em Celsius.

5. Fim


html:
<h1>6 - Conversão de Temperatura Fahrenheit para Graus Celsius</h1>
    <label for="temperatura">Temperatura em Fahrenheit:</label>
    <input type="number" id="Fahrenheit" />
    <button onclick="calcularConversao()">Converter para Celsius</button>
    <p id="resultado6"></p>
javascript: 

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







  
Pseudocódigo 7- Digite suas últimas 3 notas e saiba sua média
1. Início
⦁	  Exibir na tela campos para inserir três notas.
⦁	  Exibir um botão para calcular a média.
⦁	  Exibir um espaço para mostrar o resultado.

2. Entrada de Dados
⦁	  Solicitar a inserção das três notas.

3. Processamento
⦁	  Ao clicar no botão "Calcular Média", executar a função "calcularMedia".
⦁	  Calcular a média das três notas.
4. Saída de Dados
⦁	 Exibir na tela a média calculada.
5. Fim


html:
<h1>7- Digite suas últimas 3 notas e saiba sua média</h1>
    <label for="nota1">Nota 1:</label>
    <input type="number" id="nota1" />
    <label for="nota2">Nota 2:</label>
    <input type="number" id="nota2" />
    <label for="nota3">Nota 3:</label>
    <input type="number" id="nota3" />
    <button onclick="calcularMedia()">Calcular Média</button>
    <p id="resultado7"></p>
javascript: 

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





  
Pseudocódigo 8- Vai viajar ? Saiba quanto vai precisar de combustivel!
1. Início
⦁	  Exibir na tela campos para inserir a distância a percorrer em km e o consumo médio do carro em km por litro.
⦁	  Exibir um botão para calcular o consumo.
⦁	  Exibir um espaço para mostrar o resultado.

2. Entrada de Dados
⦁	  Solicitar a inserção da distância a percorrer.
⦁	  Solicitar a inserção do consumo médio do carro.

3. Processamento
⦁	  Ao clicar no botão "Calcular", executar a função "calcularConsumo".
⦁	  Calcular o consumo de combustível.

4. Saída de Dados
⦁	  Exibir na tela o consumo de combustível.

5. Fim


html:
<h1>8- Vai viajar ? Saiba quanto vai precisar de combustivel!</h1>

    <label for="distancia">Distância a percorrer (em km):</label>
    <input type="number" id="distancia" />

    <label for="consumoMedio">Consumo médio do carro (km por litro):</label>
    <input type="number" id="consumoMedio" />

    <button onclick="calcularConsumo()">Calcular</button>

    <p id="resultado8"></p>
javascript: 

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






  
Pseudocódigo 9 - Quadrado e Raiz Quadrada:
1. Início
⦁	  Exibir na tela um campo para inserir um número.
⦁	  Exibir um botão para calcular o quadrado e a raiz quadrada.
⦁	  Exibir um espaço para mostrar o resultado.

2. Entrada de Dados
⦁	  Solicitar a inserção de um número.

3. Processamento
⦁	  Ao clicar no botão "Calcular", executar a função "calcular".
⦁	  Calcular o quadrado e a raiz quadrada do número.

4. Saída de Dados
⦁	  Exibir na tela o quadrado e a raiz quadrada calculados.

5. Fim

html:
<h1>9 - Quadrado e Raiz Quadrada</h1>

    <label for="numero">Digite um número:</label>
    <input type="number" id="numero" />

    <button onclick="calcular()">Calcular</button>

    <p id="resultado9"></p>
javascript: 

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






  
Pseudocódigo 10 - Calculadora de Prestação em Atraso:
1. Início
⦁	  Exibir na tela campos para inserir o valor original, a taxa de atraso em percentagem e o tempo em dias.
⦁	  Exibir um botão para calcular a prestação em atraso.
⦁	  Exibir um espaço para mostrar o resultado.

2. Entrada de Dados
⦁	  Solicitar a inserção do valor original.
⦁	  Solicitar a inserção da taxa de atraso.
⦁	  Solicitar a inserção do tempo em dias.

3. Processamento
⦁	  Ao clicar no botão "Calcular Prestação", executar a função "calcularPrestacao".
⦁	  Calcular a prestação em atraso usando a fórmula prestacao = valor + (valor * (taxa / 100) * tempo).

4. Saída de Dados
⦁	  Exibir na tela o valor da prestação em atraso.

5. Fim



html:
 <h1>10 - Calculadora de Prestação em Atraso</h1>

    <label for="valor">Valor Original:</label>
    <input type="number" id="valor" />

    <label for="taxa">Taxa de Atraso (%):</label>
    <input type="number" id="taxa" />

    <label for="tempo">Tempo em Dias:</label>
    <input type="number" id="tempo" />

    <button onclick="calcularPrestacao()">Calcular Prestação</button>

    <p id="resultado10"></p>
javascript: 

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
