const composerText = document.getElementById("tweetComposerInput")

const tweetsTimeline = document.querySelector(".tweets-timeline")
const button = document.querySelector(".tweet-composer__button")

let counter = document.getElementById("tweetComposerCounter")



button.addEventListener("click", function(event){
    event.preventDefault()

    if (composerText.value === " " || composerText.value === "" || composerText.value === undefined ||  composerText.value === null || composerText.value.length > 280 ){
        composerText.focus()
        return false
    }

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    
    const date = new Date()
    const month = date.toLocaleDateString("pt-br", {month: "short"})
    const day = date.getDate()
    const h = addZero(date.getHours())
    const m = addZero(date.getMinutes())
    const s = addZero(date.getSeconds())

    // if(inputTweet.value.lengtg)

    const boxTweet = document.createElement("div")
    boxTweet.className = "tweets-timeline__box"

    const tweetHeader = document.createElement("div")
    tweetHeader.className = "tweets-timeline__header"
    tweetHeader.innerHTML = `<span class="tweets-timeline__name">Gabriela</span>
            <span class="tweets-timeline__username">@gabi</span>
            <span class="tweets-timeline__date"> ${day} de ${month} ${h}:${m}</span>`

    const newTweetArea = document.createElement("p")
    
    newTweetArea.innerHTML = composerText.value

    const tweetFooter = document.createElement("div")
    tweetFooter.className = "tweets-timeline__footer"
    tweetFooter.innerHTML = `<button class="tweets-timeline__delete--button button">
            Excluir
        </button>`

    tweetsTimeline.appendChild(boxTweet)
    boxTweet.appendChild(tweetHeader)
    boxTweet.appendChild(newTweetArea)
    boxTweet.appendChild(tweetFooter)
    tweetsTimeline.insertBefore(boxTweet, tweetsTimeline.childNodes[0])


    const removeButton = document.querySelector(".tweets-timeline__delete--button")

    removeButton.addEventListener("click", function(evento){
        evento.preventDefault()
        boxTweet.remove()
    })

    composerText.value = ""
    counter.innerHTML = 280
    counter.style.color = "#fff"


})

composerText.addEventListener("keydown", function(evento1){
    let cont = 280 - composerText.value.length
    console.log(cont)
    counter.innerHTML = cont

    /*  if(composerText.value.length > maxLength){
        composerText.value = composerText.value.substring(0, maxLength)
    }   */

    if (cont < 16){
        counter.style.color = "#ff0000"
    } else if (cont < 0 ){
        button.disabled = true
    } else {
        counter.style.color = "#fff"
        button.disabled = false
    }
    /* if 
        (cont == 0){
        cont.preventDefault()
    }   */
})