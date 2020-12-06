var matchcartas = 0;
var restart;

function validateForm() {
var temafilme = document.getElementById("myform").elements.namedItem("tema").value;

var corcartas = document.getElementById("myform").elements.namedItem("cores").value;

 
    if (temafilme == "" ||  corcartas =="" ) {
      showerro();
      return false;
    }else {





if (corcartas == "vermelho"){
  document.getElementById("cback1").src="images/back.jpg";
  document.getElementById("cback2").src="images/back.jpg";
  document.getElementById("cback3").src="images/back.jpg";
  document.getElementById("cback4").src="images/back.jpg";
  document.getElementById("cback5").src="images/back.jpg";
  document.getElementById("cback6").src="images/back.jpg";
  document.getElementById("cback1a").src="images/back.jpg";
  document.getElementById("cback2a").src="images/back.jpg";
  document.getElementById("cback3a").src="images/back.jpg";
  document.getElementById("cback4a").src="images/back.jpg";
  document.getElementById("cback5a").src="images/back.jpg";
  document.getElementById("cback6a").src="images/back.jpg";
  
}

if (corcartas == "verde"){
  document.getElementById("cback1").src="images/backverde.jpg";
  document.getElementById("cback2").src="images/backverde.jpg";
  document.getElementById("cback3").src="images/backverde.jpg";
  document.getElementById("cback4").src="images/backverde.jpg";
  document.getElementById("cback5").src="images/backverde.jpg";
  document.getElementById("cback6").src="images/backverde.jpg";
  document.getElementById("cback1a").src="images/backverde.jpg";
  document.getElementById("cback2a").src="images/backverde.jpg";
  document.getElementById("cback3a").src="images/backverde.jpg";
  document.getElementById("cback4a").src="images/backverde.jpg";
  document.getElementById("cback5a").src="images/backverde.jpg";
  document.getElementById("cback6a").src="images/backverde.jpg";

}


if (corcartas == "azul"){
  document.getElementById("cback1").src="images/backazul.jpg";
  document.getElementById("cback2").src="images/backazul.jpg";
  document.getElementById("cback3").src="images/backazul.jpg";
  document.getElementById("cback4").src="images/backazul.jpg";
  document.getElementById("cback5").src="images/backazul.jpg";
  document.getElementById("cback6").src="images/backazul.jpg";
  document.getElementById("cback1a").src="images/backazul.jpg";
  document.getElementById("cback2a").src="images/backazul.jpg";
  document.getElementById("cback3a").src="images/backazul.jpg";
  document.getElementById("cback4a").src="images/backazul.jpg";
  document.getElementById("cback5a").src="images/backazul.jpg";
  document.getElementById("cback6a").src="images/backazul.jpg";

}

  if (temafilme == "cinema") {
    document.getElementById("card1").src="images/avatar.jpg";
    document.getElementById("card1a").src="images/avatar.jpg";
    document.getElementById("card2").src="images/matrix_revolutions.jpg";
    document.getElementById("card2a").src="images/matrix_revolutions.jpg";
    document.getElementById("card3").src="images/spider_man.jpg";
    document.getElementById("card3a").src="images/spider_man.jpg";
    document.getElementById("card4").src="images/lord_of_the_rings.jpg";
    document.getElementById("card4a").src="images/lord_of_the_rings.jpg";
    document.getElementById("card5").src="images/forrest_gump.jpg";
    document.getElementById("card5a").src="images/forrest_gump.jpg";
    document.getElementById("card6").src="images/wonder_woman.jpg";
    document.getElementById("card6a").src="images/wonder_woman.jpg";
  }
 
   if (temafilme == "serie") {
    document.getElementById("card1").src="images/queen_gambit.jpg";
    document.getElementById("card1a").src="images/queen_gambit.jpg";
    document.getElementById("card2").src="images/simpsons.jpg";
    document.getElementById("card2a").src="images/simpsons.jpg";
    document.getElementById("card3").src="images/big_bang.jpg";
    document.getElementById("card3a").src="images/big_bang.jpg";
    document.getElementById("card4").src="images/good_doctor.jpg";
    document.getElementById("card4a").src="images/good_doctor.jpg";
    document.getElementById("card5").src="images/breaking_bad.jpg";
    document.getElementById("card5a").src="images/breaking_bad.jpg";
    document.getElementById("card6").src="images/flash.jpg";
    document.getElementById("card6a").src="images/flash.jpg";
  }
  

  if (temafilme == "infantil") {
    document.getElementById("card1").src="images/spongebob.jpg";
    document.getElementById("card1a").src="images/spongebob.jpg";
    document.getElementById("card2").src="images/frozen.jpg";
    document.getElementById("card2a").src="images/frozen.jpg";
    document.getElementById("card3").src="images/crods.jpg";
    document.getElementById("card3a").src="images/crods.jpg";
    document.getElementById("card4").src="images/spies_disguise.jpg";
    document.getElementById("card4a").src="images/spies_disguise.jpg";
    document.getElementById("card5").src="images/coco.jpg";
    document.getElementById("card5a").src="images/coco.jpg";
    document.getElementById("card6").src="images/hotel_transylvania.jpg";
    document.getElementById("card6a").src="images/hotel_transylvania.jpg";
  }

        show();
    }  
  }

  function showerro() {
    var erro = document.getElementById("mensagemerro");
    if (erro.style.display === "none") {
      erro.style.display = "block";
    } else {
      erro.style.display = "none";
    }
   mensagemerro();
  }





function show() {

    var abertura = document.getElementById("abertura");
  abertura.remove();
    document.getElementById('memory-game').removeAttribute("style");
  }

const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;



function flipCard() {
    if (lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        matchcartas = matchcartas +1
        console.log(matchcartas);

        if (matchcartas == 6) {
          finalcards();
        }
        return;
    }
    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// embaralha as cartas

// IMEDIATELY INVOKED FUNCTION
(function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
})();

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});

function finalcards() {
  restart = setTimeout(refreshgame, 2000);
}

function mensagemerro() {
  restart = setTimeout(refreshgame, 3000);
}

function refreshgame() {
  
  location.reload();
}








