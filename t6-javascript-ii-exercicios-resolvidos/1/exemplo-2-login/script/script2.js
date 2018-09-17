const inputEmail = document.getElementById("loginInputEmail");
const inputSenha = document.getElementById("loginInputPassword");
const loginButton = document.querySelector(".login__button");

/*loginButton.addEventListener("click", function(evento){
    evento.preventDefault();
    console.log(inputEmail.value)
    const login = inputEmail.value;
    
    const loginForm = document.querySelector(".login__form");
    loginForm.innerHTML = `O login de ${login} foi efetuado com sucesso` // o innerHTML não é um método. Funciona como uma substituição de um valor de string.

    //alert(`O login de ${login} foi efetuado com sucesso`); 
})

*/


loginButton.addEventListener("click", function(evento){
    evento.preventDefault()

    const resposta = document.createElement("span")

    const respostaMensagem = document.createTextNode("o login foi realizado com sucesso!")

    resposta.appendChild(respostaMensagem)

    const loginForm = document.querySelector(".login__form")

    loginForm.insertBefore(resposta, loginForm.childNodes[0])
})


