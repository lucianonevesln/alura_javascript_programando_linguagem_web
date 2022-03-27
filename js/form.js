// variavel que recebe id de uma botao criado no fron-end
var botaoAdicionar = document.querySelector('#adicionar-paciente');

// adiciona um escutador de evento e nesse quando o botao e clicado exibe a mensagem definida na funcao
botaoAdicionar.addEventListener('click', function (Event) {

    // funcao que previne o comportamento padrao
    Event.preventDefault();

    // armazenando todos os valores capturados no form html
    var form = document.querySelector('#form-adiciona');

    // adquirindo informacoes do form
    var paciente = obtemPacienteDoFormulario(form);

    // variavel que esta recebendo o retorno da validacao do paciente
    var erros = validaPaciente(paciente);

    // condicional que verifica se a variavel paciente tem tamanho superior a 0
    if (erros.length > 0) {

        // // associa uma tag escondida do html a uma variavel e depois o conteudo obtido em erro a essa tag
        // var mensagemErro = document.querySelector('#mensagem-erro');
        // mensagemErro.textContent = erros;
        exibeMensagemDeErro(erros);

        return;

    };

    // invocando funcao para inserir novo paciente na tabela
    adicionaPacienteNaTabela(paciente);

    // funcao para limpar o dados do input
    form.reset();

    // para limpara as mensagens de erro eventualmente inseridas
    var mensagemErro = document.querySelector('#mensagens-erro');
    mensagemErro.innerHTML = '';

});

// funcao para adicionar o paciente na tabela
function adicionaPacienteNaTabela (paciente) {

        // criando a tr do paciente
        var pacienteTr = montaTr(paciente);
        // estrutura para inserir um novo paciente na tabela do front-end
        var tabela = document.querySelector('#tabela-pacientes');
        // insere o paciente dentro de tr
        tabela.appendChild(pacienteTr);

};

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

// funcao que insere mensagem de erro em array
function exibeMensagemDeErro (erros) {

    // estabelecendo contato com id do html
    var ul = document.querySelector('#mensagens-erro');

    // para limpar mensagens de erro inseridas anteriormente
    ul.innerHTML = '';

    // forEach para percorrer automaticamente cada elemento do array
    erros.forEach(function (erro) {

        // variavel que recebe elemento de html criado
        var li = document.createElement('li');
        // o conteudo passado por parametro erro e adicionado a tag li criada acima
        li.textContent = erro;
        // a tag acima e adcionada a tag pai ul
        ul.appendChild(li);

    });

};

function obtemPacienteDoFormulario (form) {

    // criando objeto em JS para representar o mundo real dentro do JavaScript
    var paciente = {

        // para acessar um valor de um form, e necessario acionar o id do form, name do campo que contem o valor e o value
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)

    };

    // return o resultado de paciente
    return paciente;

};

// funcaoa que cria a tag de tabela
function montaTr (paciente) {

    // criando um elemento dentro do html
    var pacienteTr = document.createElement('tr');

    // para adicionar a mesma classe dos demais elementos que ja estao no html
    pacienteTr.classList.add("paciente");
//
//    // criando elementos que ficaram dentro do elemento acima
//    var nomeTd = document.createElement('td');
//    // para adicionar a mesma classe dos demais elementos que ja estao no html
//    nomeTd.classList.add("info-nome");
//    var pesoTd = document.createElement('td');
//    var alturaTd = document.createElement('td');
//    var gorduraTd = document.createElement('td');
//    var imcTd = document.createElement('td');
//
//    // inserindo valores capturados no form dentro das tag tds criadas acima
//    nomeTd.textContent = paciente.nome;
//    pesoTd.textContent = paciente.peso;
//    alturaTd.textContent = paciente.altura;
//    gorduraTd.textContent = paciente.gordura;
//    imcTd.textContent = paciente.imc;

//    var nomeTd = montaTd(paciente.nome, "info-nome");
//    var pesoTd = montaTd(paciente.peso, "info-peso");
//    var alturaTd = montaTd(paciente.altura, "info-altura");
//    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
//    var imcTd = montaTd(paciente.peso, "info-imc");

    // inserindo uma estrutura filha dentro de uma pai, no caso acima td dentro de tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-imc"));

    // retorna paciente dentro de tabela tag
    return pacienteTr;

};

// funcaoa que cria a tag que insere dados na tabela
function montaTd (dado, classe) {

    // criando a tag td, inserindo dado nela e adicionando classe
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    // retorna linha com informacoes
    return td;

};

// funcao que verifica se dados inseridos pelo usuario sao valido
function validaPaciente (paciente) {

    // array que recebe mensagens de erro
    var erros = [];

    // condicional para validar se o nome no formulario foi preenchido
    if (paciente.nome.length == 0) {

        // estrutura para adicionar mensagem de erro no array
        erros.push('Por favor, inserir o nome do paciente.');

    };

    // condicional para validar se o peso esta em branco
    if (paciente.peso.length == 0) {

        // estrutura para adicionar mensagem de erro no array
        erros.push('Por favor, inserir o peso do paciente.');

    };

    // condicional para validar se o peso esta em branco
    if (paciente.altura.length == 0) {

        // estrutura para adicionar mensagem de erro no array
        erros.push('Por favor, inserir a altura do paciente.');

    };

    // condicional para validar se o valor gordura foi inserido
    if (paciente.gordura.length == 0) {

        // estrutura para adicionar mensagem de erro no array
        erros.push('Por favor, inserir a gordura do paciente.');
    };

    // condicional que invoca funcao que valida peso
    if (!validaPeso(paciente.peso)) {

        // estrutura para adicionar mensagem de erro no array
        erros.push('O peso é inválido!');

    };

    // condicional que invoca funcao que valida altura
    if (!validaAltura(paciente.altura)) {

        // estrutura para adicionar mensagem de erro no array
        erros.push('A altura é inválida.');

    };

    // retorno de array
    return erros;

};