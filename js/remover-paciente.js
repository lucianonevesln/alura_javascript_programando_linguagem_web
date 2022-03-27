// trazendo informacoes da tr com todos os pacientes e armazenando em variavel
var pacientes = document.querySelectorAll('.paciente');

// trazendo tabela e adicionando em variavel
var tabela = document.querySelector('table');

/*

estrutura para percorrer o array a adicionar a escuta de duplo clique a cada
paciente que o forEach trouxer

*/
// pacientes.forEach(function (paciente) {
// 
//     // escuta quando um duplo clique for efetuado
//     paciente.addEventListener('dblclick', function() {
// 
//         // esta relacionada com quem acionou o evento
//         this.remove();
// 
//     });
// 
// });

/*

utilizando a hierarquia para definir qual elemento sera removido quando o 
usuario clicar 2 vezes nele

*/

// aqui sera removido um unico dado
// tabela.addEventListener('dblclick', function (Event) {
// 
//     // para escutar um evento especifico, deve ser usado o Event
//     Event.target.remove();
// 
// });

// aqui sera removido a linha inteira
tabela.addEventListener('dblclick', function (Event) {

    var alvoEvento = Event.target; // seleciona um dado/evento especifico
    var paiDoAlvo = alvoEvento.parentNode; // tr, ou seja, esta trazendo o evento pai associado
    paiDoAlvo.classList.add('fadeOut'); // adiciona uma classe que controla o tempo definida no css

    /* 
    com essa funcao, e possivel controlar o tempo que o navegador leva para executar o processo completo 
    de remocao do paciente, informando o tempo em milissegundos
    */
    setTimeout(function () {

            // para remover o conjunto selecionado
            paiDoAlvo.remove();

    }, 500);

});