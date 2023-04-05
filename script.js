var card = 0;
var showedCards = 0;
var paridade = 0;
function showCard(clicked){
    card = clicked;
    card.classList.remove("flip");
    card.classList.add("fliped");
    console.log(card);


}

function countFlipedCards(){
showedCards = document.querySelectorAll(".fliped");
console.log(showedCards);
paridade = showedCards.length % 2;
console.log(paridade);

var firstCard = showedCards[0];
var secondCard = showedCards [1];

var firstCardImage = firstCard.children[1].children[0];

var secondCardImage = secondCard.children[1].children[0];

console.log(firstCardImage);
console.log(secondCardImage);

if(paridade === 0){
    if(firstCardImage.innerHTML === secondCardImage.innerHTML){
        console.log("são iguais");
        firstCard.classList.add("founded");
        secondCard.classList.add("founded");

        firstCard.classList.remove("fliped");
        secondCard.classList.remove("fliped");
        console.log(firstCard.classList.contains("fliped"));

        firstCard = 0;
        secondCard = 0;

    } else{
        console.log("são diferentes");
    }
    console.log("ok");

    //conferir as cartas
    //caso negativo, contar tempo, bloquear a função showCard e virar de volta
    //caso positivo, manter as cartas
}


}
