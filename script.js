var card = 0;
var showedCards = 0;
var paridade = 0;
const availableImages = ["images/bobrossparrot.gif", "images/explodyparrot.gif", "images/fiestaparrot.gif", "images/metalparrot.gif", "images/revertitparrot.gif", "images/tripletsparrot.gif", "images/unicornparrot.gif"];
const availableCards = ["a", "b", "g", "h", "c", "i", "d", "j", "e", "k", "f", "l", "m", "n"];
var resetAnswer = 0;
let timer = 0;
var intervalo = 0;

function somaTimer(){
    timer ++;

if(resetAnswer === "não"){
    intervalo = 0;
}
document.querySelector(".duration-box").innerHTML = timer;
console.log(timer)
}



var cardsNumber = 0

function cardsQuantity(){
    var message = "Você gostaria de jogar com quantas cartas? (escolha um número par de 4 a 14)";
    while (true){
        cardsNumber = parseInt(prompt(message));
        if (!isNaN(cardsNumber) && cardsNumber % 2 === 0 && cardsNumber >=4 && cardsNumber <=14) return cardsNumber;
    }

}
cardsQuantity();
console.log(cardsNumber);
// criando uma lista aleatória com a quantidade necessária de GIFs
availableImages.sort(comparador);
const chosenImages = availableImages.slice(0,cardsNumber / 2);
function comparador() { 
	return Math.random() - 0.5; }

    for (x=0; x < cardsNumber / 2; x++) {
    chosenImages.push(chosenImages[x])
    }


// final da lista aleatória de GIFs criada

//criando uma lista aleatória com a quantidade necessária de CARTAS
const chosenCards = availableCards.slice(0,cardsNumber);
chosenCards.sort(comparador);
function comparador() { 
	return Math.random() - 0.5; 
}
//final da lista aleatória de CARTAS

//link GIF com CARTA
for(x=0; x<cardsNumber; x++){
 
let imagex = chosenImages[x];
let cardx = chosenCards[x];
let baseCard = document.getElementById(cardx);
baseCard.setAttribute('src', imagex);

let baseCardParent = baseCard.parentElement.parentElement.parentElement;
baseCardParent.classList.remove("hidden");
}


//função para revelar a carta clicada
var intervalo = 0
var contador = 0;
let enable = true;

function showCard(clicked){
    if (timer === 0){
    intervalo = setInterval(somaTimer, 1000);;
    }
    if (enable === true){
    card = clicked;
        if (card.classList.contains("flip")){
            contador++
        } else{};
    card.classList.remove("flip");
    card.classList.add("fliped");
    } else{};
};


function countFlipedCards(){
showedCards = document.querySelectorAll(".fliped");
paridade = showedCards.length % 2;

var firstCard = showedCards[0];
var secondCard = showedCards [1];

var firstCardImage = firstCard.children[1].children[0];

var secondCardImage = secondCard.children[1].children[0];

if(paridade === 0){
    if(firstCardImage.getAttribute('src') === secondCardImage.getAttribute('src')){
        firstCard.classList.add("founded");
        secondCard.classList.add("founded");

        firstCard.classList.remove("fliped");
        secondCard.classList.remove("fliped");

        

    } else{
        allCards = document.querySelectorAll(".card");
        enable = false;
        function liberaClick(){
            enable = true;
        }
        setTimeout(resetCards, 1000);
        setTimeout(liberaClick, 1000);
        
        function resetCards(){
            firstCard.classList.add("flip");
            firstCard.classList.remove("fliped");
            secondCard.classList.add("flip");
            secondCard.classList.remove("fliped");
            
        }

    }

}
console.log("===============");
if(document.querySelectorAll(".founded").length === parseInt(cardsNumber)){
    function finish(){
        alert ("Você ganhou em " + contador + " jogadas! A duração do jogo foi de " + timer + " segundos!")
        const duration = timer;
        console.log(duration);
        
        while (resetAnswer !== "sim" || resetAnswer !== "não"){
            
            resetAnswer = prompt("Você quer jogar de novo?");
            
            if (resetAnswer === "sim"){
            location.reload();
            break;
            } else if (resetAnswer === "não"){
              timer = duration;
              clearInterval(intervalo);
             break;  

                }
        }
    }
    setTimeout( finish, 500);
}
}

