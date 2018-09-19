
const botaoLogin = document.querySelector(".login__button");
const modal = document.querySelector(".login-modal");
const botaoModalClose = document.querySelector(".login-modal__button-close");


botaoLogin.addEventListener("click", function(evento){
    evento.preventDefault();

    modal.style.display = "flex";
});


botaoModalClose.addEventListener("click", function(evento){
    event.preventDefault();

    modal.style.display = "none";
});