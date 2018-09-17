const nome = document.getElementById("transacaoInputName")
const valor = document.getElementById("transacaoInputMoney")
const data = document.getElementById("transacaoInputDate")
const botao = document.querySelector(".transacao__button")

 
botao.addEventListener("click", function(event){
    event.preventDefault()

    const tabela = document.querySelector(".extrato__table")
    const linha = document.createElement("tr")

    tabela.appendChild(linha)
        
    const colunaNome = document.createElement("td")
    const textoNome = document.createTextNode(nome.value)
    colunaNome.appendChild(textoNome)


    const colunaValor = document.createElement("td")
    const textoValor = document.createTextNode(valor.value)
    colunaValor.appendChild(textoValor)


    const colunaData = document.createElement("td")
    const textoData = document.createTextNode(valor.value)
    colunaData.appendChild(textoData)


    linha.appendChild(colunaNome)
    linha.appendChild(colunaValor)
    linha.appendChild(colunaData)


    //creat element cria novos elementos
    //creat text node cria nós de texto
    //append child insere item dentro de um elemento
    //insert before insere item em um elemento antes de um item estabelecido



   


})