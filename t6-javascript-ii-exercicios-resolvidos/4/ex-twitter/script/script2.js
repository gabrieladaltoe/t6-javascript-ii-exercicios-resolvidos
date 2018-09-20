const composerText = document.getElementById("tweetComposerInput")

const tweetsTimeline = document.querySelector(".tweets-timeline")
const button = document.querySelector(".tweet-composer__button")

let counter = document.getElementById("tweetComposerCounter")

composerText.addEventListener("keydown", function(evento1){
    let cont = 280 - composerText.value.length
    console.log(cont)
    counter.innerHTML = cont
    if (cont == 0){
        cont.preventDefault()
    }
})


button.addEventListener("click", function(event){
    event.preventDefault()

    if (composerText.value === " " || composerText.value === "" || composerText.value === undefined ||  composerText.value === null || composerText.value.length > 280 ){
        composerText.focus()
        return false
    }


    // if(inputTweet.value.lengtg)

    const boxTweet = document.createElement("div")
    boxTweet.className = "tweets-timeline__box"

    const tweetHeader = document.createElement("div")
    tweetHeader.className = "tweets-timeline__header"
    tweetHeader.innerHTML = `<span class="tweets-timeline__name">gabigabai</span>
            <span class="tweets-timeline__username">@gabinha87_</span>
            <span class="tweets-timeline__date">${new Date()}</span>`

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

})
