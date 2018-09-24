const button = document.querySelector(".sidebar-menu__button");
const sideBar = document.querySelector(".sidebar-menu");

button.addEventListener("click", function(evento){
    evento.preventDefault();

    console.log(sideBar.classList);

    if(sideBar.classList.contains("sidebar-menu__visible")){
        sideBar.classList.remove("sidebar-menu__visible");
        sideBar.classList.add("sidebar-menu__hidden");
    }else{
        sideBar.classList.remove("sidebar-menu__hidden");
        sideBar.classList.add("sidebar-menu__visible");
    }
});