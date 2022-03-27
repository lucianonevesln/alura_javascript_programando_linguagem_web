// traz informacoes digitadas no input do front-end
var campoFiltro = document.querySelector('#filtrar-tabela');

// funcao que escuta o input digitado pelo usuario no front-end
campoFiltro.addEventListener('input', function () {

    // campoFiltro.value; uma forma de escutar o que esta sendo digitado
    // outra forma e utilizando o this
    this.value;
    // selecionando todos os pacientes da tabela
    var pacientes = document.querySelectorAll('.paciente');

    // condicional para conferir se algo foi digitado no input
    if (this.value.length > 0) {

        // estrutura para percorrer o array
        for (var item = 0; item < pacientes.length; item++) {

            // armazenando o objeto dentro de variavel, a propriedade em outra e em seguida o valor em outra
            var paciente = pacientes[item];
            var tdNome = paciente.querySelector('.info-nome');
            var nome = tdNome.textContent;

            // criando uma expressao regular para filtrar de acordo com cada letra que for digitada pelo usuario
            var expressao = new RegExp(this.value, 'i');

            // condicial para esconder os elementos a medida que um nome e digitado pelo usuario no input do front-end
            // if (nome != this.value) {
            if (!expressao.test(nome)) {
                // adiciona classe que esconde valor digitado
                paciente.classList.add('invisivel');
            } else {
                // remove classe que esconde valor digitado
                paciente.classList.remove('invisivel');
            };

        };

    } else {

        // estrutura para percorrer o array
        for (var item = 0; item < pacientes.length; item++) {

            // armazenando o objeto dentro de variavel, a propriedade em outra e em seguida o valor em outra
            var paciente = pacientes[item];
            paciente.classList.remove('invisivel');

        };

    };

});