var card = 0;
var showedCards = 0;
var paridade = 0;
const images = ["images/bobrossparrot.gif", "images/explodyparrot.gif", "images/fiestaparrot.gif", "images/metalparrot.gif", "images/revertitparrot.gif", "images/tripletsparrot.gif", "images/unicornparrot.gif"];

function begins(){
var cardsNumber = prompt("Você gostaria de jogar com quantas cartas? (escolha um número par de 4 a 12)")
console.log (cardsNumber % 2)
function nada(){};


while (cardsNumber % 2 === 1 || cardsNumber <  4 || cardsNumber > 14){
    cardsNumber = prompt("Você gostaria de jogar com quantas cartas? (escolha um número par de 4 a 12)")
}

alert ("let's play!!!")
}

function preGame(){

}
function hideCards(){
    firstCard.classList.add("flip")
    firstCard.classList.remove("fliped")
    secondCard.classList.add("flip")
    secondCard.classList.remove("fliped")
}
let enable = true;


function showCard(clicked){
    if (enable === true){
    card = clicked;
    card.classList.remove("flip");
    card.classList.add("fliped");
    console.log(enable);
} else{}
}

function hideCards(){
    firstCard.classList.add("flip");
    firstCard.classList.remove("fliped");
    secondCard.classList.add("flip");
    secondCard.classList.remove("fliped");
}


function countFlipedCards(){
showedCards = document.querySelectorAll(".fliped");
paridade = showedCards.length % 2;
var firstCard = showedCards[0];
var secondCard = showedCards [1];

var firstCardImage = firstCard.children[1].children[0];

var secondCardImage = secondCard.children[1].children[0];


console.log(firstCardImage.getAttribute('src'));
console.log(secondCardImage.getAttribute('src'));


if(paridade === 0){
    if(firstCardImage.getAttribute('src') == secondCardImage.getAttribute('src')){
        console.log("são iguais");
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
        setTimeout(hideCards, 1000);
        setTimeout(liberaClick, 1000);
        
        function hideCards(){
            console.log(firstCard);
            firstCard.classList.add("flip");
            firstCard.classList.remove("fliped");
            secondCard.classList.add("flip");
            secondCard.classList.remove("fliped");
            
        }
        console.log(firstCard)
        console.log("são diferentes");

    }

}

}
