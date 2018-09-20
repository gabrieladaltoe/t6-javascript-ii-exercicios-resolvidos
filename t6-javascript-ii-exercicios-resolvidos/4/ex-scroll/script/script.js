const botao = document.getElementById("arrowTop")
botao.addEventListener("click", function(){
    console.log("click")
    window.scrollTo(pageYOffset, 0);
})


window.addEventListener("scroll", function(){
    console.log(this.pageYOffset)
    console.log(botao.hidden)
    if(pageYOffset > 450){
        botao.hidden = false;
    }else{
        botao.hidden = true;
    }
});



