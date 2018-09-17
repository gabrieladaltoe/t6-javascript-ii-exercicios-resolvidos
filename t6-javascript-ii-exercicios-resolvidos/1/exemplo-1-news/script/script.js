const input = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");

botao.addEventListener("click", function(event){
    event.preventDefault();
    
    //creat element cria novos elementos
    const resposta = document.createElement("span");

    //creat text node cria nós de texto
    const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!");

    //append child insere item dentro de um elemento
    resposta.appendChild(respostaMensagem);

    const newsForm = document.querySelector(".news__form");

    //insert before insere item em um elemento antes de um item estabelecido
    newsForm.insertBefore(resposta, newsForm.childNodes[0]);

});


/* const titulo = document.getElementById("formTitle");
const titulo2 = document.querySelector(".news_title") // uma forma de puxar direto pela classe, sem usar id
console.log(titulo) */
// alert(titulo) >> uma forma de fazer aparecer também, ao invés do console.log

/*--------------- retornando resposta com alerta e inner html --------------------------
const input = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");


botao.addEventListener("click", function(evento){ // vai escutar o evento deste elemento, e ao executar o clique, irá realizar uma função
    evento.preventDefault();

    const email = input.value;
    //const email = document.getElementById("newsInputEmail").value; 

    const formNews = document.querySelector(".news__form");

    formNews.innerHTML = `Email ${email} foi cadastrado com sucesso`
    //alert(`Email ${email} foi cadastrado com sucesso`)
}); 


*/



