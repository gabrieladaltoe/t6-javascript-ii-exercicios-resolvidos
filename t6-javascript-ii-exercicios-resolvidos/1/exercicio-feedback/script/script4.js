const feedback = document.querySelector(".feedback")
const botao = document.querySelector(".feedback__button")
const feedbackMensagem = document.getElementById("feedbackInputMessage")

botao.addEventListener("click", function(evento){
    evento.preventDefault()

    const depoimentos = document.querySelector(".testimonials")
    const depoimentosArea = document.createElement("p")
    const depoimentosTexto = document.createTextNode(feedbackInputMessage.value)

    depoimentos.appendChild(depoimentosArea)
    depoimentosArea.appendChild(depoimentosTexto)

    alert("Obrigada pelo seu depoimento!")

})