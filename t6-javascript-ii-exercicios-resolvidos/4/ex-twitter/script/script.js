const composerText = document.getElementById("tweetComposerInput")

const tweetsTimeline = document.querySelector(".tweets-timeline")
const button = document.querySelector(".tweet-composer__button")

button.addEventListener("click", function(event){
    event.preventDefault()

    const boxTweet = document.createElement("div")
    boxTweet.innerHTML = `<div class="tweets-timeline__box">
        <div class="tweets-timeline__header">
            <span class="tweets-timeline__name">gabigabai</span>
            <span class="tweets-timeline__username">@gabinha87_</span>
            <span class="tweets-timeline__date">${new Date()}</span>
        </div>
        <p class="tweets-timeline__tweet">
            ${composerText.value}
        </p>
        <div class="tweets-timeline__footer">
            Excluir
        </div>
    </div>`


    tweetsTimeline.appendChild(boxTweet)
    tweetsTimeline.insertBefore(boxTweet, tweetsTimeline.childNodes[0])
    
    const removeButton = document.querySelector(".tweets-timeline__footer")

    removeButton.addEventListener("click", function(evento){
        evento.preventDefault()
        boxTweet.remove()
    })

    if (composerText.value !== ""){
        composerText.value = ""
    }

    // removeButton.addEventListener("click", function(e){
    //     e.preventDefault()
    //     boxTweet.


})



