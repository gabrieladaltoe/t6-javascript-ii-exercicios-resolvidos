const links = document.querySelector(".gallery__nav")
const imagem = document.querySelector(".gallery__image")

//console.log(links)
//console.log(links.children) >> children pega a tag e childNode pega todos os nós.

for (let i = 0; i < links.children.length; i++){
   // console.log(links.children[i]

    const fio = links.children[i]
    fio.addEventListener("click", function(){
        //pegar o caminho da img no atributo data-image
        const img = this.dataset.image;
        console.log(img)

        imagem.src = img

    })
}