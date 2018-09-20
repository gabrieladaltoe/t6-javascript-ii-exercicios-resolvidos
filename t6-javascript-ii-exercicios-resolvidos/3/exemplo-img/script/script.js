const links = document.querySelector(".gallery__nav")
const imagem = document.querySelector(".gallery__image")
const figCaption = document.querySelector(".gallery__caption")

//console.log(links)
//console.log(links.children) >> children pega a tag e childNode pega todos os nós.

for (let i = 0; i < links.children.length; i++){
   // console.log(links.children[i]

    const itens = links.children[i]
    itens.addEventListener("click", function(){
        //pegar o caminho da img no atributo data-image
        const img = this.dataset.image;
        console.log(img)
        imagem.src = img

        const descricao = this.dataset.title;
        console.log(descricao)
        figCaption.innerHTML = descricao

    })
}

/* for (let i = 0; i < links.children.length; i++){
    // console.log(links.children[i]
 
     const itens = links.children[i]
     itens.addEventListener("click", function(){
         //pegar o caminho da img no atributo data-image
         const descricao = this.dataset.title;
         console.log(descricao)
 
         figCaption.innerHTML = descricao
 
     })
 } */

