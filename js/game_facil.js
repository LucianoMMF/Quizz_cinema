const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const img = document.querySelector("#img");
const video = document.querySelector("#video1");
const audio = document.querySelector("#audio1");
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const countDownBar = document.querySelector("#timeBarFull");
const timer = document.querySelector("#time");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []



/*

var countDownDate = new Date("Jan 5, 2022 15:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
  
  
  console.log(countDownDate,now,distance)
  // Time calculations for days, hours, minutes and seconds
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  minutes=0;
  console.log(minutes,seconds,x);
  document.getElementById("showtime").innerHTML = minutes + "m " + seconds + "s ";


  countDownBar.style.width = `${(seconds*100) / 100}%`




if (seconds == 0) {
    clearInterval(x);
    document.getElementById("showtime").innerHTML = "EXPIRED";
  }
}, 1000);

var count = 5;

// Update the count down every 1 second
var intervalo = setInterval(function() {

  document.getElementById("showtime").innerHTML = count;

  countDownBar.style.width = `${(count/60) * 100}%`

count--;


if (count === 0) {
    clearInterval(intervalo);
    incrementScore(-SCORE_POINTS);
    getNewQuestion();
  }
}, 1000);*/

const questions = [
    {
        question: "O único filme coreano a receber o Óscar de melhor direção, melhor filme, melhor filme estrangeiro e melhor roteiro?",
        choice1: "Parasita",
        choice2: "Rastro de um Sequestro",
        choice3: "Invasão Zombie",
        choice4: "O Hospedeiro",
        answer: 1,
    },
    {
        question: "Qual foi o primeiro filme de prestígio de Martin Scorsese?",
        choice1: "A Última tentação de Cristo",
        choice2: "Touro Indomável",
        choice3: "Taxi Driver",
        choice4: "Casino",
        answer: 3,
    },
    {
        question: "Qual foi o primeiro filme de Quentin Tarantino?",
        choice1: "Cães de Aluguel",
        choice2: "Bastardos Inglórios",
        choice3: "Kill Bill vol.1",
        choice4: "Pulp Fiction",
        answer: 1,
    },
    {
        question: "De que filme é essa imagem?",
        img:"../img/o_padrinho.jpg",
        choice1: "O Padrinho",
        choice2: "O Padrinho 2",
        choice3: "O Padrinho 3",
        choice4: "A Força do Poder",
        answer: 1,
    },
    {
        question: "Qual o filme desta imagem?",
        img:"../img/esquadraosuicida.jpg",
        choice1: "O Esquadrão Suicida",
        choice2: "Liga da Justiça",
        choice3: "Batman VS. Superman",
        choice4: "O Homem de Aço",
        answer: 1,
    },
    {
        question: "Qual o filme desta cena?",
        img:"../img/BlacKkKlansman.jpg",
        choice1: "Logan Lucky",
        choice2: "Tenet",
        choice3: "Jackie Brown",
        choice4: "BlacKkKlansman: O Infiltrado",
        answer: 4,
    },
    {
        question: "De que filme são esses personagens?",
        img:"../img/oreidosgazeteiros.jpg",
        choice1: "Os Fantasmas Divertem-se",
        choice2: "O Rei dos Gazeteiros",
        choice3: "The Goonies",
        choice4: "Teen Wolf",
        answer: 2,
    },
    {
        question: "Qual filme é protagonizado por Anthony Hopkins e Jodie Foster?",
        choice1: "O Pai",
        choice2: "O Silêncio dos Inocentes",
        choice3: "Meet Joe Black",
        choice4: "Panic Room",
        answer: 2,
    },
    {
        question: "A que filme pertence esta música?",
        audio:"../audio/Godfather.mp3",
        choice1: "Scarface",
        choice2: "The Godfather",
        choice3: "Chicago",
        choice4: "The Sopranos",
        answer: 2,
    },
    {
        question: "Qual filme em que a cantora Bjork é protagonista?",
        choice1: "Titanic",
        choice2: "Dancer in the dark",
        choice3: "Avatar",
        choice4: "Dune",
        answer: 2,
    },
    {
        question: "Quantos filmes fazem parte da saga de Harry Potter?",
        choice1: "9 filmes",
        choice2: "6 filmes",
        choice3: "8 filmes",
        choice4: "10 filmes",
        answer: 3,
    },
    {
        question: "Qual o nome do vilão que aparece nesta cena?",
        video: "../video/droctopus.mp4",
        choice1: "Lagarto",
        choice2: "O Consertador",
        choice3: "Venon",
        choice4: "Dr. Octopus",
        answer: 4,
    },
    {
        question: "Qual o nome do personagem interpretado por Vin Diesel?",
        video: "../video/velozes.mp4",
        choice1: "Xander Cage",
        choice2: "Richard B. Riddick",
        choice3: "Dominic Toretto",
        choice4: "Tenente Shane Wolfe",
        answer: 3,
    },
    {
        question: "Qual clássico filme western tem esta música-tema?",
        audio: "../audio/bommaufeio.mp3",
        choice1: "Red River",
        choice2: "El Dorado",
        choice3: "The Good, The Bad and The Ugly",
        choice4: "Pale Rider",
        answer: 3,
    },
    
    {
        question: "De que filme da saga Star Wars é esta cena?",
        video: "../video/rougueone.mp4",
        choice1: "Star Wars - A Guerra dos Clones",
        choice2: "Star Wars: Episódio VII – O Despertar da Força",
        choice3: "Rogue One: Uma História de Star Wars",
        choice4: "Star Wars: A Ascensão de Skywalker",
        answer: 3,
    },
    {
        question: "Qual o nome do ator protagonista de 'O Agente Secreto 007'?",
        video: "../video/jamesbond.mp4",
        choice1: "Daniel Craig",
        choice2: "Timothy Dalton",
        choice3: "Sean Connery",
        choice4: "Pierce Brosnan",
        answer: 3,
    },
    {
        question: " Qual filme do cinema lusitano em que toca esta música?",
        audio: "../audio/anjinho.mp3",
        choice1: "O Fantasma",
        choice2: "Variações",
        choice3: "A Herdade",
        choice4: "Canção de Lisboa",
        answer: 2,
    },
    {
        question: " Esta cena pertence a que filme?",
        video: "../video/lotrtt.mp4",
        choice1: "O Senhor dos Anéis: As Duas Torres",
        choice2: "O Senhor dos Anéis: A Irmandade do Anel",
        choice3: "O Senhor dos Anéis: O Regresso do Rei",
        choice4: "Game of Thrones",
        answer: 1,
    },
    {
        question: "Qual a produtora de filmes proprietária deste tema?",
        audio: "../audio/fox.mp3",
        choice1: "The Walt Disney Company",
        choice2: "Paramount Motion Pictures Group",
        choice3: "Lions Gate Entertainment",
        choice4: "21st Century Fox",
        answer: 4,
    },
    {
        question: "Esta cena é do filme:",
        img: "../img/karatekidm.jpg",
        choice1: "Karate Kid: Momento da Verdade II",
        choice2: "Karate Kid III",
        choice3: "Cobra Kai",
        choice4: "Karate Kid: Momento da Verdade",
        answer: 4,
    }
]



const SCORE_POINTS = 150
const MAX_QUESTIONS = 20
var intervalo ;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    var count = 15;
    
    
    
    // Update the count down every 1 second
    
    /*intervalo = setInterval(function() {
        
        
        countDownBar.style.width = `${(count/15) * 100}%`
        document.getElementById("showtime").innerHTML = count;
        
     count--;
     
     
     if (count === 0) {
         clearInterval(intervalo);
         if(!(score <=0)){
             
             incrementScore(-SCORE_POINTS);
            }
            getNewQuestion();
        }
        
    }, 1000);
    
    */


    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('./end.html');
    }
    
    questionCounter++
    progressText.innerText = `Questão ${questionCounter} de ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    
    /*Essa pequena linha de código vai acessar um item aleatório em uma matriz, 
    gerando uma flutuação aleatória de zero ao comprimento da matriz e arredondando-o
    para o número inteiro mais próximo com Math.floor
    */
   
   const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
   currentQuestion = availableQuestions[questionsIndex]
   question.innerText = currentQuestion.question
   
   if (currentQuestion.img != undefined){
       img.src = currentQuestion.img;
       document.getElementById("img").style.display = "block";
    }
    
    if (currentQuestion.img == undefined){        
        document.getElementById("img").style.display = "none";
    }

    if (currentQuestion.audio != undefined){
        audio.src = currentQuestion.audio;
        document.getElementById("audio1").style.display = "block";
    }
    
    if (currentQuestion.audio == undefined){        
        document.getElementById("audio1").style.display = "none";
        audio.pause();
    }

   if (currentQuestion.video != undefined){
        video.src = currentQuestion.video;
        document.getElementById("video1").style.display = "block";
    }

    if (currentQuestion.video == undefined){
        video.pause();
        document.getElementById("video1").style.display = "none";
    }

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true

    
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) 
        return     
        
        acceptingAnswers = false

        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }
        clearInterval(intervalo);
        
        /*O classList é uma propriedade somente de leitura
         de um elemento que retorna uma coleção ativa de classes CSS.
         Mesmo que classList seja somente leitura, ele pode manipular as classes
          que ele contém usando vários métodos.*/

        selectedChoice.parentElement.classList.add(classToApply)
        

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion();

        }, 500);
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}


startGame()