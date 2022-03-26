// variavel que recebe id de uma botao criado no fron-end
var botaoAdicionar = document.querySelector('#adicionar-paciente');

// adiciona um escutador de evento e nesse quando o botao e clicado exibe a mensagem definida na funcao
botaoAdicionar.addEventListener('click', function (Event) {

    Event.preventDefault(); // funcao que previne o comportamento padrao

    // armazenando todos os valores capturados no form html
    var form = document.querySelector('#form-adiciona');

    // para acessar um valor de um form, e necessario acionar o id do form, name do campo que contem o valor e o value
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // criando um elemento dentro do html
    var pacienteTr = document.createElement('tr');

    // criando elementos que ficaram dentro do elemento acima
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    // inserindo valores capturados no form dentro das tag tds criadas acima
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc (peso, altura);

    // inserindo uma estrutura filha dentro de uma pai, no caso acima td dentro de tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // estrutura para inserir um novo paciente na tabela do front-end
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);    

});

// titulo.addEventListener("click", mostraMensagem()); // adiciona um escutador de evento e nesse quando o botao e clicado exibe a mensagem definida na funcao

// function mostraMensagem () {
// 
//     console.log("Olá, eu fui clicado!");
// 
// };

// funcao anonima
// titulo.addEventListener("click", function () {
// 
//     console.log("Isso é uma funcção anônima");
//
// });