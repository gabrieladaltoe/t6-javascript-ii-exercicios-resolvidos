//const body = document.getElementsByTagName("body")

const inputNome = document.getElementById("cadastroInputNome")
const inputEmail = document.getElementById("cadastroInputEmail")
const inputEmailConfirm = document.getElementById("cadastroInputEmailConfirm")
const inputPassword = document.getElementById("cadastroInputPassword")
const inputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm")
const inputPhone = document.getElementById("cadastroInputPhone")
const inputArea = document.getElementById("cadastroInputArea")
const inputLevel = document.getElementsByName("level") //gera um node list
const inputNews = document.getElementById("cadastroInputNews")



inputArea.addEventListener("change", function(){

    if (inputArea.selectedIndex === 0){
        document.querySelector("body").style.backgroundColor  = "#e3f2fd"
    }

    else if (inputArea.selectedIndex === 1){
        document.querySelector("body").style.backgroundColor  = "#f1f8e9"
    }

    else if (inputArea.selectedIndex === 2){
        document.querySelector("body").style.backgroundColor  = "#fce4ec"
    }

    else if (inputArea.selectedIndex === 3){
         document.querySelector("body").style.backgroundColor = "#ffecb3"
    }
})


const button = document.querySelector(".cadastro__button")

button.addEventListener("click", function(evento){
    evento.preventDefault()

    const optionSelect = inputArea.options[inputArea.selectedIndex]

        
    console.log(optionSelect)
    //console.log(inputNews)
    //console.log(inputNews.checked)


    if(inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " ") {
        inputNome.focus()
        return false;
    }

    else if(inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " ") {
        inputEmail.focus()
        return false;
    }


    else if(inputEmailConfirm.value === undefined || inputEmailConfirm.value === null || inputEmailConfirm.value === "" || inputEmailConfirm.value === " ") {
        inputEmailConfirm.focus()
            return false 
    }
    
    else if(inputEmailConfirm.value !== inputEmail.value){
        inputEmailConfirm.focus()
        alert("O email não é igual ao campo anterior")
        return false
    }


    else if(inputPassword.value === undefined || inputPassword.value === null || inputPassword.value === "" || inputPassword.value === " " || inputPassword.value < 7) {
        inputPassword.focus()
        alert("A senha deve ter 7 ou mais caracteres")
        return false;
    }


/*     else if(inputPasswordConfirm.value === undefined || inputPasswordConfirm.value === null || inputPasswordConfirm.value === "" || inputPasswordConfirm.value === " " || inputPasswordConfirm.value < 7) {
        inputPasswordConfirm.focus()
        return false;
 } */
    

    else if(inputPassword.value !== inputPasswordConfirm.value) {
        inputPasswordConfirm.focus()
        alert("A senha não é igual a anterior")
        return false;
    }

    else if(inputPhone.value === undefined || inputPhone.value === null || inputPhone.value === "" || inputPhone.value === " ") {
        inputPhone.focus()
        return false;
    }


    let radioItem;
    for (let i = 0; i < inputLevel.length; i++){
        if (inputLevel[i].checked){
            console.log(inputLevel[i])
            radioItem = inputLevel[i]
            console.log(radioItem)
        }   
    }

    console.log(radioItem.value)

    if (radioItem.value === "Junior") {
        console.log("0 - 2 anos de experiência")
    } else if (radioItem.value === "Pleno") {
        console.log("2 - 5 anos de experiência")
    } else if (radioItem.value === "Senior") {
        console.log("5+ anos de experiência")
    }
    


    //document.querySelector("body").style.backgroundColor = "#fff"
    this.closest(".cadastro").style.backgroundColor = "#f3f3f3"
    const form = this.closest("form")
    form.submit()
    //alert(`Cadastro de ${inputEmail.value} realizado com sucesso`)
  return true

})