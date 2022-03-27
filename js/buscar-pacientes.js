// conectando com o botao do front-end
var botaoAdicionar = document.querySelector('#buscar-paciente');

// funcao para escutar quando o botao for acionado no front-end
botaoAdicionar.addEventListener('click', function () {

    // para fazer requisicao a uma api da web 
    var xhr = new XMLHttpRequest();

    /*
    funcao que ensina qual tipo de requisicao sera feita e para onde.
    O primeiro que se deve fazer, e abrir a conexao
    */
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    /* 
    adiciona um escutador de evento, e quando a resposta for carregada, 
    executar uma funcao determinada
    */
    xhr.addEventListener('load', function () {

        // atribui uma tag html a uma variavel
        var erroAjax = document.querySelector('#erro-ajax');
        // validacao de estatus da requisicao
        if (xhr.status == 200) {

            //// imprimindo respostas no f12
            //console.log(xhr.responseText);
            // armazenando resposta em variavel
            var resposta = xhr.responseText;
            // console.log(resposta);
            // transformando a reposta em objeto JavaScript
            var pacientes = JSON.parse(resposta);
            // console.log(pacientes);

            // percorrendo o array e edicionando na tabela
            pacientes.forEach( function (paciente) {

                // invocando funcao para inserir novo paciente na tabela
                adicionaPacienteNaTabela(paciente);

            });

        } else {

            /*
            mostra erro status e resposta no console, atribui a tag html a uma variavel e remove a classe que a esconde
            */
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector('#erro-ajax');
            erroAjax.classList.remove('invisivel');

        };

    });

    // para enviar a requisicao
    xhr.send();

});