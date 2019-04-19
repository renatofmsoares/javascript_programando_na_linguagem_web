var botao_verifica_nomes_repetidos = document.querySelector("#verifica_nomes_repetidos");

botao_verifica_nomes_repetidos.addEventListener("click", function() {
    var td_nome_arr = document.querySelectorAll('td[class="info-nome"]')
    var lista_nomes = []
    var msg_nomes_repetidos = document.querySelector('#msg_nomes_repetidos');
    msg_nomes_repetidos.classList.add("invisivel");
    msg_nomes_repetidos.innerHTML = "";
    qnt_repeticoes = 0;

    td_nome_arr.forEach(element => {
        nome = element.textContent;
        index = lista_nomes.indexOf(nome);
        if (index == -1){
            lista_nomes.push(nome);
        }else{
            adiciona_mensagem('O nome '+nome+' já existe na posição '+index);
            qnt_repeticoes++;
        }
    })
    if(qnt_repeticoes == 0){
        adiciona_mensagem('Não há nomes repetidos');
    }

    function adiciona_mensagem(mensagem){
        msg_nomes_repetidos.classList.remove("invisivel")
        li = document.createElement("li")
        li.textContent = mensagem
        msg_nomes_repetidos.appendChild(li)
    }
});




