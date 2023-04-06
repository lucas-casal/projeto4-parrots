var card = 0;
var showedCards = 0;
var paridade = 0;
const availableImages = ["images/bobrossparrot.gif", "images/explodyparrot.gif", "images/fiestaparrot.gif", "images/metalparrot.gif", "images/revertitparrot.gif", "images/tripletsparrot.gif", "images/unicornparrot.gif"];
const availableCards = ["a", "b", "g", "h", "c", "i", "d", "j", "e", "k", "f", "l"];


var cardsNumber = prompt("Você gostaria de jogar com quantas cartas? (escolha um número par de 4 a 12)")
console.log (cardsNumber % 2)


while (cardsNumber % 2 === 1 || cardsNumber <  4 || cardsNumber > 14){
    cardsNumber = prompt("Você gostaria de jogar com quantas cartas? (escolha um número par de 4 a 12)")
}

alert ("let's play!!!");


// criando uma lista aleatória com a quantidade necessária de GIFs
availableImages.sort(comparador);
const chosenImages = availableImages.slice(0,cardsNumber / 2);
function comparador() { 
	return Math.random() - 0.5; }

    for (x=0; x < cardsNumber / 2; x++) {
    chosenImages.push(chosenImages[x])
    console.log(chosenImages);
    }
console.log(chosenImages);

// final da lista aleatória de GIFs criada

//criando uma lista aleatória com a quantidade necessária de CARTAS
const chosenCards = availableCards.slice(0,cardsNumber);
chosenCards.sort(comparador);
function comparador() { 
	return Math.random() - 0.5; 
}
console.log(chosenCards);
//final da lista aleatória de CARTAS

//link GIF com CARTA
for(x=0; x<cardsNumber; x++){
 
let imagex = chosenImages[x];
let cardx = chosenCards[x];
let baseCard = document.getElementById(cardx);
console.log(cardx);
baseCard.setAttribute('src', imagex);

let baseCardParent = baseCard.parentElement.parentElement.parentElement;
console.log(baseCardParent);
baseCardParent.classList.remove("hidden");
}


//função para revelar a carta clicada
let enable = true;
function showCard(clicked){
    if (enable === true){
    card = clicked;
    card.classList.remove("flip");
    card.classList.add("fliped");
    console.log(enable);
} else{}
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
        setTimeout(resetCards, 1000);
        setTimeout(liberaClick, 1000);
        
        function resetCards(){
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
