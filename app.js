function pesquisar () 
{
    let section = document.getElementById("resultadoPesquisa");
    
    let campoPesquisa = document.getElementById("pesquisa").value;
            console.log(campoPesquisa); // retorna como foi escrito
            
            //retorna mensagem se a pesquisa for vazia
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Insira uma informação!</p>"
        return
    };
    
    campoPesquisa = campoPesquisa.toLowerCase()
    console.log(campoPesquisa); // retorna minúscula
    
    let resultados = "";
    let referencia = "";
    let endereco = "";
    let dispoVaga = "";
    let tags = "";
    
    for (let dados of data)
    {
        //passa toda informação do campo para letras minúsculas
        referencia = dados.IDReferencia.toLowerCase()
        endereco = dados.enderecoVaga.toLowerCase()
        dispoVaga = dados.disponibilidadeVaga.toLowerCase()
        tags = dados.tagsReferencia.toLowerCase()
        //condição para encontrar a palavra buscada no arquivo data.js
        if (referencia.includes(campoPesquisa) || endereco.includes(campoPesquisa) || dispoVaga.includes(campoPesquisa) || tags.includes(campoPesquisa) )
        {
            resultados += 
            `
                <div class="item-resultado">
                    <p>Referência da Vaga: <b>${dados.IDReferencia}</b></p>
                    <p>Endereço: <b>${dados.enderecoVaga}</b></p>
                    <p class="descricao-meta">Período da Disponibilidade: ${dados.disponibilidadeVaga}</p>
                    <p class="item-resultado-contato">☏ Contato: ${dados.contatoVaga} <a href="tel: ${dados.telefoneContato}" target="_blank">${dados.telefoneContato}</a></p>
                </div>
            `
            ;
        };
    };

    if (!resultados){
        resultados = "<p>Não foi encontrado nenhuma referência para sua busca, tente outras palavras ou referência.</p>"
    }
        section.innerHTML = resultados;
};


//Traz apenas o objeto no índice 0 e seu conteúdo da propriedade nomeEvento
//console.log(data[0].nomeEvento);