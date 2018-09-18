const formulario = document.querySelector(".contato__form")

const inputNome = document.getElementById("contatoInputNome")
const inputEmail = document.getElementById("contatoInputEmail")
const inputPhone = document.getElementById("contatoInputPhone")
const inputMessage = document.getElementById("contatoInputMessage")

const botao = document.querySelector(".contato__button")


botao.addEventListener("click", function(evento){
    evento.preventDefault()

    if (inputNome.value === undefined || inputNome.value === null ||  inputNome.value === "" || inputNome.value === " ") {
        inputNome.focus()
        return false;

    }

    else if (inputEmail.value === undefined || inputEmail.value === null ||  inputEmail.value === "" || inputEmail.value === " ") {
        inputEmail.focus()
        return false;
    }

    else if (inputPhone.value === undefined || inputPhone.value === null ||  inputPhone.value === "" || inputPhone.value === " ") {
        inputPhone.focus()
        return false;
    }

    else if (inputPhone.value.length > 10 || inputPhone.value.length < 10) {
        inputPhone.focus()
        return false
    }

    else if (inputMessage.value === undefined || inputMessage.value === null ||  inputMessage.value === "" || inputMessage.value === " ") {
        inputMessage.focus()
        return false;
    }
 
    const msgAgradecimento = document.createElement("p")
    const textoAgradecimento = document.createTextNode("Entraremos em contato em breve.")
    msgAgradecimento.appendChild(textoAgradecimento)
    formulario.insertBefore(msgAgradecimento, formulario.childNodes[6])

    return true

})

