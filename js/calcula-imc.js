// Criando uma janela de aviso no navegador
// alert("Ola mundo!!!");

// Criando uma saida de mensagem no console do navegador
// console.log("Hello World");

/*
DOM (Document Object Model): representacao do HTML dentro do JavaScript. Isso permite criar uma estrutura que traz todos
os elementos do HTML, possibilitando a alteracao da visualizacao sem afetar a estrutura original
console.log(document);
*/

// Funcao para procurar no document uma determinada tag
// console.log(document.querySelector("h1"));

/*
A funcao querySelector() aceita alterar por:
- tag;
- class;
- id;
- seletores CSS;
*/

// Seletor de class: "."
// Seletor de id: "#"

// Acessando uma linha completa de tag HTML e salvando seu conteudo em uma variavel
// var titulo = document.querySelector(".titulo");
var titulo = document.querySelector("h1");
// console.log(titulo);

// Acessando o conteudo de uma tag HTML atraves da funcao textContent
// console.log(titulo.textContent);

// Alterando o conteudo de uma tag HTML, salvando seu conteudo em uma variavel
titulo.textContent = "Aparecida Nutricionista";
// console.log(titulo.textContent);

// Para obter todos valores de uma determinada area do HTML
/* OBS: a funcao querySelector() retorna apenas um elemento. Para retornar todos os elementos, deve ser utilizados a funcao
querySelectorAll()
*/

// var paciente = document.querySelector(".paciente"); // selecionando atrave de id
// console.log(paciente.textContent);
// console.log(paciente);
// console.log(paciente.textContent);

// // Selecionando conteudo especifico de um objeto
// var tdPeso = paciente.querySelector(".info-peso"); // selecionando atraves de class
// var tdAltura = paciente.querySelector(".info-altura"); // selecionando atraves de class
// var tdImc = paciente.querySelector(".info-imc"); // selecionando atraves de class
// // console.log(tdPeso);
// // console.log(tdPeso.textContent);
//
// var peso = tdPeso.textContent; // obtendo o valor de um objeto e armazenando em uma variavel
// var altura = tdAltura.textContent; // obtendo o valor de um objeto e armazenando em uma variavel
//
// // console.log(paciente); // tr
// // console.log(tdPeso) // td com o peso
// // console.log(peso); // conteudo de variavel
// // console.log(altura); // conteudo de variavel
//
// // Usando estrutura de validacao "if/else"
// /*
// if (peso <= 0 || peso >= 1000 || altura <= 0 || altura >= 3.00) {

//     console.log("Peso e/ou altura invalido(s)");

// } else {

//     var imc = peso / (altura * altura); // calculando o imc a partir dos valores armazenados em variaveis
//     tdImc.textContent = imc; // atribuindo o imc calculado aos valores que serao apresentados no navegador

// };
// */
//
// // Variacao para validacao com "if"
// var pesoEhValido = true
// var alturaEhValida = true
//
// if (peso <= 0 || peso >= 1000) {

//     console.log("Peso invalido");
//     pesoEhValido = false;
//     tdImc.textContent = "Peso invalido";

// };
//
// if (altura <= 0 || altura >= 3.00) {

//     console.log("Altura invalida");
//     alturaEhValida = false;
//     tdImc.textContent = "Altura invalida";

// };
// 
// if (pesoEhValido && alturaEhValida) {

//     var imc = peso / (altura * altura); // calculando o imc a partir dos valores armazenados em variaveis
//     tdImc.textContent = imc; // atribuindo o imc calculado aos valores que serao apresentados no navegador

// };

/* Usando a estrutura de loop for
for (item = 0; item < 5; item++) {

    console.log(item);

};
*/

// Criando um array com os elementos HTML
var pacientes = document.querySelectorAll('.paciente');
console.log(pacientes);

// Percorrendo o array com o loop for
for (var item = 0; item < pacientes.length; item++) {

    var paciente = pacientes[item]; // obtendo um elemento vindo do array e atribuindo a uma variavel

    var tdPeso = paciente.querySelector('.info-peso'); // selecionando atraves de class
    var tdAltura = paciente.querySelector('.info-altura'); // selecionando atraves de class
    var tdImc = paciente.querySelector('.info-imc'); // selecionando atraves de class

    var peso = tdPeso.textContent; // obtendo o valor de um objeto e armazenando em uma variavel
    var altura = tdAltura.textContent; // obtendo o valor de um objeto e armazenando em uma variavel

    var pesoEhValido = true; // criando uma variavel para validar se informacoes estao corretas
    var alturaEhValida = true; // criando uma variavel para validar se informacoes estao corretas

    if (peso <= 0 || peso >= 1000) { // teste logico de peso

        console.log('Peso invalido'); // saida em console de mensagem invalida
        pesoEhValido = false; // atribuicao de valor logico a uma variavel
        tdImc.textContent = 'Peso invalido'; // saida de mensagem na tabela de visualizacao
        // paciente.style.color = "orange"; // altera a cor do conteudo da linha
        // paciente.style.backgroundColor = "red"; // altera a cor de fundo da linha
        paciente.classList.add('paciente-invalido'); // altera o estilo da pagina a partir de uma classe especifica criada

    };

    if (altura <= 0 || altura >= 3.00) { // teste logico de altura

        console.log('Altura invalida'); // saida em console de mensagem invalida
        alturaEhValida = false; // atribuicao de valor logico a uma variavel
        tdImc.textContent = 'Altura invalida'; // saida de mensagem na tabela de visualizacao
        // paciente.style.color = "orange"; // altera a cor do conteudo da linha
        // paciente.style.backgroundColor = "red"; // altera a cor de fundo da linha
        paciente.classList.add('paciente-invalido'); // altera o estilo da pagina a partir de uma classe especifica criada

    };

    if (pesoEhValido && alturaEhValida) { // teste logico para calculo de imc

        var imc = calculaImc (peso, altura); 
        tdImc.textContent = imc; // atribuindo o imc calculado aos valores que serao apresentados no navegador

    };

};

// funcao para calcular o imc a partir dos valores armazenados em variaveis
function calculaImc (peso, altura) {
    
    var imc = 0;

    imc = peso / (altura*altura);

    return imc.toFixed(2);

};