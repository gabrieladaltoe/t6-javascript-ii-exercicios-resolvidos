// scripts here:

function submitQuiz() {
    console.log('submitted');

// get each answer score
    function answerScore (qName) {
        var radiosNo = document.getElementsByName(qName);

        for (var i = 0, length = radiosNo.length; i < length; i++) {
               if (radiosNo[i].checked) {
        // do something with radiosNo
                var answerValue = Number(radiosNo[i].value);
            }
        }
        // change NaNs to zero
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }

// calc score with answerScore function
    var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + + answerScore('q5'));
    console.log("CalcScore: " + calcScore); // it works!

// function to return correct answer string
    function correctAnswer (correctStringNo, qNumber) {
        console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
        return ("A resposta correta pra questão #" + qNumber + ": &nbsp;<strong>" +
            (document.querySelector("#"+correctStringNo+" .quiz__answer-text").innerHTML) + "</strong>");
        }

// print correct answers only if wrong (calls correctAnswer function)
    if (answerScore('q1') === 0) {
        document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
    }
    if (answerScore('q2') === 0) {
        document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
    }
    if (answerScore('q3') === 0) {
        document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
    }
    if (answerScore('q4') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
    }
    if (answerScore('q5') === 0) {
        document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString4', 5);
    }

// calculate "possible score" integer
    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
        console.log(contador)
    }

    let contador = questionCounter++;
    const img = `<img src="https://i.imgur.com/s9bPVaK.gif?2">`

// show score as "score/possible score"
    var showScore = "Sua Pontuação " + calcScore +"/" + "5";
// if 4/4, "perfect score!"
    if (calcScore === 5) {
        showScore = showScore + "&nbsp; <strong>Parabéns você acertou tudo!</strong>" + img
    };
    document.getElementById('userScore').innerHTML = showScore;
}

// $(document).ready(function() {

// $('#submitButton').click(function() {
//     $(this).addClass('hide');
// });

// });

// for (let i = 0; i < links.children.length; i++){
//     // console.log(links.children[i]
 
//      const itens = links.children[i]
//      itens.addEventListener("click", function(){
//          //pegar o caminho da img no atributo data-image
//          const img = this.dataset.image;
//          console.log(img)
//          imagem.src = img
 
//          const descricao = this.dataset.title;
//          console.log(descricao)
//          figCaption.innerHTML = descricao
 
//      })
//  }