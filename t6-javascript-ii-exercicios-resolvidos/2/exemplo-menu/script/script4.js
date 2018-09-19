const menuButton = document.querySelector(".sidebar-menu__button");
const menuSideBar = document.querySelector(".sidebar-menu");

let contador = 1

menuButton.addEventListener("click", function(evento){
    evento.preventDefault();

    menuSideBar.style.position = "absolut";
    menuSideBar.style.marginLeft = "-430px";
    menuSideBar.style.boxShadow = "0";

    contador++

    if (contador % 2 !== 0){
        menuSideBar.style.marginLeft = "0";
    }

});

 //poderia ser usado tb um if que começasse com -431px, transformando em 0, 
 //e else, voltaria para -431. 