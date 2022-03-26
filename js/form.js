// variavel que recebe id de uma botao criado no fron-end
var botaoAdicionar = document.querySelector('#adicionar-paciente');

// adiciona um escutador de evento e nesse quando o botao e clicado exibe a mensagem definida na funcao
botaoAdicionar.addEventListener('click', function (Event) {

    Event.preventDefault(); // funcao que previne o comportamento padrao

    // armazenando todos os valores capturados no form html
    var form = document.querySelector('#form-adiciona');

    // adquirindo informacoes do form
    var paciente = obtemPacienteDoFormulario(form);

    // criando a tr do paciente
    var pacienteTr = montaTr(paciente);

    // estrutura para inserir um novo paciente na tabela do front-end
    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);

    // funcao para limpar o dados do input
    form.reset();

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

    return paciente;

};

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

    return pacienteTr

};

function montaTd (dado, classe) {

    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;

};