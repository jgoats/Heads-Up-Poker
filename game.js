// create 52 card deck and store into a global array
var deck = [];
var cardRanks = ["A" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "T" , "J" , "Q" , "K"];
var cardSuits = ["spades" , "hearts" , "clubs" , "diamonds"];
var players = 2;
var playerTurn;
var button;
var playerStackLocation = document.getElementById("chipsForPlayer");
var AIStackLocation = document.getElementById("chipsForAI");
var playerChips;
var AIChips;
var chipStartingAmount = 20;


function createDeck () {
    cardRanks.forEach(ranks => {
        for(i = 0; i < cardSuits.length; i++) {
            var card = ranks + " " + "of" + " " + cardSuits[i];
            deck.push(card);
        }
    });
}
 function createFaceUpCards () {
     var table = document.getElementsByClassName("allCards")[0];
// create the physical cards for the game
    deck.forEach(cards => {
        let card = document.createElement("div");
        card.setAttribute("class" , "cards");
        for (i = 0; i < cards.length; i++) {
            if (cards[i].match("A")) {
                let number = document.createElement("p");
                let textNode = document.createTextNode("A");
                number.append(textNode);
                number.setAttribute("class" , "number");
                card.append(number);
            }
            else if (cards[i].match("2")) {
                let number = document.createElement("p");
                let textNode = document.createTextNode("2");
                number.append(textNode);
                number.setAttribute("class" , "number");
                card.append(number);
            }
            else if (cards[i].match("3")) {
                let number = document.createElement("p");
                let textNode = document.createTextNode("3");
                number.append(textNode);
                number.setAttribute("class" , "number");
                card.append(number);
            }
            else if (cards[i].match("4")) {
                let number = document.createElement("p");
                let textNode = document.createTextNode("4");
                number.append(textNode);
                number.setAttribute("class" , "number");
                card.append(number);
            }
            else if (cards[i].match("5")) {
                let number = document.createElement("p");
                let textNode = document.createTextNode("5");
                number.append(textNode);
                number.setAttribute("class" , "number");
                card.append(number);
            }
            else if (cards[i].match("6")) {
                let number = document.createElement("p");
                let textNode = document.createTextNode("6");
                number.append(textNode);
                number.setAttribute("class" , "number");
                card.append(number);
            }
            else if (cards[i].match("7")) {
                let number = document.createElement("p");
                let textNode = document.createTextNode("7");
                number.append(textNode);
                number.setAttribute("class" , "number");
                card.append(number);
            }
            else if (cards[i].match("8")) {
                let number = document.createElement("p");
                let textNode = document.createTextNode("8");
                number.append(textNode);
                number.setAttribute("class" , "number");
                card.append(number);
            }
            else if (cards[i].match("9")) {
                let number = document.createElement("p");
                let textNode = document.createTextNode("9");
                number.append(textNode);
                number.setAttribute("class" , "number");
                card.append(number);
            }
            else if (cards[i].match("T")) {
                let number = document.createElement("p");
                let textNode = document.createTextNode("10");
                number.append(textNode);
                number.setAttribute("class" , "number");
                card.append(number);
            }
            
            else if (cards[i].match("J")) {
                let number = document.createElement("p");
                let textNode = document.createTextNode("J");
                number.append(textNode);
                number.setAttribute("class" , "number");
                card.append(number);
            }
            else if (cards[i].match("Q")) {
                let number = document.createElement("p");
                let textNode = document.createTextNode("Q");
                number.append(textNode);
                number.setAttribute("class" , "number");
                card.append(number);
            }
            else if (cards[i].match("K")) {
                let number = document.createElement("p");
                let textNode = document.createTextNode("K");
                number.append(textNode);
                number.setAttribute("class" , "number");
                card.append(number);
            }
        }
       
       if (cards.match("spades")) {
            let imageTopLeft = document.createElement("img");
            imageTopLeft.setAttribute("class" , "image-top-left");
            imageTopLeft.setAttribute("src" , "./assets/images/spade.png");
            card.append(imageTopLeft);

            let imageBottomRight = document.createElement("img");
            imageBottomRight.setAttribute("class" , "image-bottom-right");
            imageBottomRight.setAttribute("src" , "./assets/images/spade.png");
            card.append(imageBottomRight);

       }
      else if (cards.match("hearts")) {
        let imageTopLeft = document.createElement("img");
        imageTopLeft.setAttribute("class" , "image-top-left");
        imageTopLeft.setAttribute("src" , "./assets/images/heart.png");
        card.append(imageTopLeft);

        let imageBottomRight = document.createElement("img");
        imageBottomRight.setAttribute("class" , "image-bottom-right");
        imageBottomRight.setAttribute("src" , "./assets/images/heart.png");
        card.append(imageBottomRight);

   }
   if (cards.match("diamonds")) {
    let imageTopLeft = document.createElement("img");
    imageTopLeft.setAttribute("class" , "image-top-left");
    imageTopLeft.setAttribute("src" , "./assets/images/diamond.png");
    card.append(imageTopLeft);

    let imageBottomRight = document.createElement("img");
    imageBottomRight.setAttribute("class" , "image-bottom-right");
    imageBottomRight.setAttribute("src" , "./assets/images/diamond.png");
    card.append(imageBottomRight);

}
else if (cards.match("clubs")) {
    let imageTopLeft = document.createElement("img");
    imageTopLeft.setAttribute("class" , "image-top-left");
    imageTopLeft.setAttribute("src" , "./assets/images/club.png");
    card.append(imageTopLeft);

    let imageBottomRight = document.createElement("img");
    imageBottomRight.setAttribute("class" , "image-bottom-right");
    imageBottomRight.setAttribute("src" , "./assets/images/club.png");
    card.append(imageBottomRight);

}
        table.append(card);
    });
 }

 createDeck();
 createFaceUpCards();

 
 //  function that shuffles and updates the deck
 let shuffleDeck = function (arr) {
        arr.sort(() => Math.random() - 0.5);
        deck.forEach(e => {
            e = arr;
        });
        cards = document.getElementsByClassName("cards");
        while(cards.length > 0) {
            cards[0].remove();
        }
        createFaceUpCards();
      }

// sets specified card to be face down
function createFaceDownCardOnTopOfDeck (cardNumber) {
    var cards = document.getElementsByClassName("cards");
        while(cards[cards.length - cardNumber].firstChild) {
            cards[cards.length - cardNumber].removeChild(cards[cards.length - cardNumber].firstChild);
        }
        let faceDownImage = document.createElement("img");
        faceDownImage.setAttribute("src" , "./assets/images/faceDownCard.PNG");
        faceDownImage.setAttribute("class" , ".cardsFaceDown");
        faceDownImage.setAttribute("width" , "40px");
        cards[cards.length - cardNumber].append(faceDownImage);
}


// resets all cards to be face up
function createFaceUpCardOnTopOfDeck () {
    cards = document.getElementsByClassName("cards");
        while(cards.length > 0) {
            cards[0].remove();
        }
        createFaceUpCards();
}

function dealHighCardToPlayer (inc) {
    var cards = document.getElementsByClassName("cards");
    var playerHighCard = document.getElementById("highcardPlayerOne");
    var topCard = cards[cards.length - inc];
    topCard.style.position = "relative";
    topCard.style.left = "-1%";
    topCard.style.top = "1%";
    playerHighCard.append(topCard);
}

function dealHighCardToAI (inc) {
    var cards = document.getElementsByClassName("cards");
    var playerHighCard = document.getElementById("highcardPlayerTwo");
    var topCard = cards[cards.length - inc];
    topCard.style.position = "relative";
    topCard.style.left = "-1%";
    topCard.style.top = "1%";
    playerHighCard.append(topCard);
}

function CreateButton (highCard) {
    var button = document.createElement("div");
    button.setAttribute("id" , "button");
    if (highCard === 2) {
        document.getElementById("playerButtonLocation").append(button);
        document.getElementById("aiButtonLocation").innerHTML = "";
        
    }
    else if (highCard === 1) {
        document.getElementById("aiButtonLocation").append(button);
        document.getElementById("playerButtonLocation").innerHTML = "";
    }
}

function rankCards (rank) {
    if (rank === "T") return 10;
    else if (rank === "J") return 11;
    else if (rank === "Q") return 12;
    else if (rank === "K") return 13;
    else if (rank === "A") return 14;
    else {return rank}
}

function HandleChipStacks (location, amount) {
    this.location = location;
    this.amount = amount;
    if (location === playerStackLocation) {
        var image = document.createElement("img");
        image.setAttribute("src" , "./assets/images/chipStack.png");
        image.setAttribute("width" , "60px");
        image.setAttribute("height" , "60px");
        playerStackLocation.append(image);
    }
    else if (location === AIStackLocation) {
        var image = document.createElement("img");
        image.setAttribute("src" , "./assets/images/chipStack.png");
        image.setAttribute("width" , "60px");
        image.setAttribute("height" , "60px");
        AIStackLocation.append(image);
    }
}


function handleHighCard () {
shuffleDeck(deck);
setTimeout(() => dealHighCardToPlayer(1) , 1000);
setTimeout(() => dealHighCardToAI(2) , 2000);
createFaceDownCardOnTopOfDeck(3);
var cards = document.getElementsByClassName("number");
var playerCard = cards[cards.length - 1].innerHTML;
var AiCard = cards[cards.length - 2].innerHTML;

 if (parseInt(rankCards(playerCard)) > parseInt(rankCards(AiCard))) {
    button = new CreateButton(2);
 }
 else if (parseInt(rankCards(AiCard)) > parseInt(rankCards(playerCard))) {
     button = new CreateButton(1);
 }
 else {
     console.log("tie");
 }
if (playerChips === undefined) {
    playerChips = new HandleChipStacks(playerStackLocation , chipStartingAmount);
}
if (AIChips === undefined) {
    AIChips = new HandleChipStacks(AIStackLocation , chipStartingAmount);
}
    
    



}
createFaceDownCardOnTopOfDeck(1);
document.getElementById("startGame").addEventListener("click" , handleHighCard , false);
