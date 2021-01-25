// create 52 card deck and store into a global array
var deck = [];
var cardRanks = ["A" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "T" , "J" , "Q" , "K"];
var cardSuits = ["spades" , "hearts" , "clubs" , "diamonds"];
var players = 2;
var playerTurn;
var button;
var playerStackLocation = document.getElementById("chipsForPlayer");
var AIStackLocation = document.getElementById("chipsForAI");
var AIChips;
var AIChipAmount = 20;
var playerChips;
var playerChipAmount = 20;
var playersHand = {
    card1 : undefined,
    card2 : undefined
}
var AIsHand = {
    card1 : undefined,
    card2 : undefined
}
var smallBlind = 0.25;
var bigBlind = 0.50;
var currentBet = bigBlind;
var currentPot = 0;


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


// takes the specified card and recreates the face up card to match the deck array
function createFaceUpCardOnTopOfDeck (cardNumber) {
    var cards = document.getElementsByClassName("cards");
        while(cards[cards.length - cardNumber].firstChild) {
            cards[cards.length - cardNumber].removeChild(cards[cards.length - cardNumber].firstChild);
        }
        var specificCard = deck[deck.length - cardNumber];
        let card = document.getElementsByClassName("cards")[cards.length - cardNumber];
        if (specificCard.match("A")) {
            let number = document.createElement("p");
            let textNode = document.createTextNode("A");
            number.append(textNode);
            number.setAttribute("class" , "number");
            card.append(number);
        }
        else if (specificCard.match("2")) {
            let number = document.createElement("p");
            let textNode = document.createTextNode("2");
            number.append(textNode);
            number.setAttribute("class" , "number");
            card.append(number);
        }
        else if (specificCard.match("3")) {
            let number = document.createElement("p");
            let textNode = document.createTextNode("3");
            number.append(textNode);
            number.setAttribute("class" , "number");
            card.append(number);
        }
        else if (specificCard.match("4")) {
            let number = document.createElement("p");
            let textNode = document.createTextNode("4");
            number.append(textNode);
            number.setAttribute("class" , "number");
            card.append(number);
        }
        else if (specificCard.match("5")) {
            let number = document.createElement("p");
            let textNode = document.createTextNode("5");
            number.append(textNode);
            number.setAttribute("class" , "number");
            card.append(number);
        }
        else if (specificCard.match("6")) {
            let number = document.createElement("p");
            let textNode = document.createTextNode("6");
            number.append(textNode);
            number.setAttribute("class" , "number");
            card.append(number);
        }
        else if (specificCard.match("7")) {
            let number = document.createElement("p");
            let textNode = document.createTextNode("7");
            number.append(textNode);
            number.setAttribute("class" , "number");
            card.append(number);
        }
        else if (specificCard.match("8")) {
            let number = document.createElement("p");
            let textNode = document.createTextNode("8");
            number.append(textNode);
            number.setAttribute("class" , "number");
            card.append(number);
        }
        else if (specificCard.match("9")) {
            let number = document.createElement("p");
            let textNode = document.createTextNode("9");
            number.append(textNode);
            number.setAttribute("class" , "number");
            card.append(number);
        }
        else if (specificCard.match("T")) {
            let number = document.createElement("p");
            let textNode = document.createTextNode("10");
            number.append(textNode);
            number.setAttribute("class" , "number");
            card.append(number);
        }
        
        else if (specificCard.match("J")) {
            let number = document.createElement("p");
            let textNode = document.createTextNode("J");
            number.append(textNode);
            number.setAttribute("class" , "number");
            card.append(number);
        }
        else if (specificCard.match("Q")) {
            let number = document.createElement("p");
            let textNode = document.createTextNode("Q");
            number.append(textNode);
            number.setAttribute("class" , "number");
            card.append(number);
        }
        else if (specificCard.match("K")) {
            let number = document.createElement("p");
            let textNode = document.createTextNode("K");
            number.append(textNode);
            number.setAttribute("class" , "number");
            card.append(number);
        }

        if (specificCard.match("diamonds")) {
    let imageTopLeft = document.createElement("img");
    imageTopLeft.setAttribute("class" , "image-top-left");
    imageTopLeft.setAttribute("src" , "./assets/images/diamond.png");
    card.append(imageTopLeft);

    let imageBottomRight = document.createElement("img");
    imageBottomRight.setAttribute("class" , "image-bottom-right");
    imageBottomRight.setAttribute("src" , "./assets/images/diamond.png");
    card.append(imageBottomRight);
        }
    if (specificCard.match("clubs")) {
        let imageTopLeft = document.createElement("img");
        imageTopLeft.setAttribute("class" , "image-top-left");
        imageTopLeft.setAttribute("src" , "./assets/images/club.png");
        card.append(imageTopLeft);
    
        let imageBottomRight = document.createElement("img");
        imageBottomRight.setAttribute("class" , "image-bottom-right");
        imageBottomRight.setAttribute("src" , "./assets/images/club.png");
        card.append(imageBottomRight);
    }
    if (specificCard.match("spades")) {
        let imageTopLeft = document.createElement("img");
            imageTopLeft.setAttribute("class" , "image-top-left");
            imageTopLeft.setAttribute("src" , "./assets/images/spade.png");
            card.append(imageTopLeft);

            let imageBottomRight = document.createElement("img");
            imageBottomRight.setAttribute("class" , "image-bottom-right");
            imageBottomRight.setAttribute("src" , "./assets/images/spade.png");
            card.append(imageBottomRight);
    }
    if (specificCard.match("hearts")) {
        let imageTopLeft = document.createElement("img");
        imageTopLeft.setAttribute("class" , "image-top-left");
        imageTopLeft.setAttribute("src" , "./assets/images/heart.png");
        card.append(imageTopLeft);

        let imageBottomRight = document.createElement("img");
        imageBottomRight.setAttribute("class" , "image-bottom-right");
        imageBottomRight.setAttribute("src" , "./assets/images/heart.png");
        card.append(imageBottomRight);
    }

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

function dealFirstCardToPlayer (increment) {
    var cards = document.getElementsByClassName("cards");
    var playerFirstCard = document.getElementById("cardholderThree");
    var topCard = cards[cards.length - increment];
    topCard.style.position = "relative";
    topCard.style.left = "-1%";
    topCard.style.top = "1%";
    playerFirstCard.append(topCard);
}
function dealSecondCardToPlayer (increment) {
    var cards = document.getElementsByClassName("cards");
    var playerFirstCard = document.getElementById("cardholderFour");
    var topCard = cards[cards.length - increment];
    topCard.style.position = "relative";
    topCard.style.left = "-1%";
    topCard.style.top = "1%";
    playerFirstCard.append(topCard);
}
function dealFirstCardToAI (increment) {
    var cards = document.getElementsByClassName("cards");
    var AIFirstCard = document.getElementById("cardholderOne");
    var topCard = cards[cards.length - increment];
    topCard.style.position = "relative";
    topCard.style.left = "-1%";
    topCard.style.top = "1%";
    AIFirstCard.append(topCard);
}
function dealSecondCardToAI (increment) {
    var cards = document.getElementsByClassName("cards");
    var AIFirstCard = document.getElementById("cardholderTwo");
    var topCard = cards[cards.length - increment];
    topCard.style.position = "relative";
    topCard.style.left = "-1%";
    topCard.style.top = "1%";
    AIFirstCard.append(topCard);
}


function dealHighCardToAI (inc) {
    var cards = document.getElementsByClassName("cards");
    var AIHighCard = document.getElementById("highcardPlayerTwo");
    var topCard = cards[cards.length - inc];
    topCard.style.position = "relative";
    topCard.style.left = "-1%";
    topCard.style.top = "1%";
    AIHighCard.append(topCard);
}

function CreateButton (highCard) {
    var button = document.createElement("div");
    button.setAttribute("id" , "button");
    if (highCard === 2) {
        document.getElementById("playerButtonLocation").append(button);
        document.getElementById("aiButtonLocation").innerHTML = "";
       setTimeout(() => dealCards("player") , 3000);
    }
    else if (highCard === 1) {
        document.getElementById("aiButtonLocation").append(button);
        document.getElementById("playerButtonLocation").innerHTML = "";
       setTimeout(() => dealCards("AI") , 3000);
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
        var chipCount = document.createElement("p");
        chipCount.setAttribute("id" , "playerChipCount");
        var chipCountNode = document.createTextNode(playerChipAmount);
        chipCount.append(chipCountNode);
        document.body.append(chipCount);

    }
    else if (location === AIStackLocation) {
        var image = document.createElement("img");
        image.setAttribute("src" , "./assets/images/chipStack.png");
        image.setAttribute("width" , "60px");
        image.setAttribute("height" , "60px");
        AIStackLocation.append(image);
        var chipCount = document.createElement("p");
        chipCount.setAttribute("id" , "AIChipCount");
        var chipCountNode = document.createTextNode(AIChipAmount);
        chipCount.append(chipCountNode);
        document.body.append(chipCount);
    }
}


function handleHighCard () {
shuffleDeck(deck);
setTimeout(() => dealHighCardToPlayer(1), 1000);
setTimeout(() => dealHighCardToAI(2), 2000);
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
    playerChips = new HandleChipStacks(playerStackLocation , playerChipAmount);
}
if (AIChips === undefined) {
    AIChips = new HandleChipStacks(AIStackLocation , AIChipAmount);
}
    
}

function dealCards (buttonLocation) {
if (buttonLocation === "player") {
    shuffleDeck(deck);
    createFaceDownCardOnTopOfDeck(1);
    setTimeout(() => dealFirstCardToAI(1) , 1000);
    createFaceUpCardOnTopOfDeck(2)
    setTimeout(() => dealFirstCardToPlayer(2) , 2000);
    createFaceDownCardOnTopOfDeck(3);
    setTimeout(() => dealSecondCardToAI(3) , 3000);
    createFaceUpCardOnTopOfDeck(4);
    setTimeout(() => dealSecondCardToPlayer(4) , 4000);
    createFaceDownCardOnTopOfDeck(5);
    playersHand.card1 = deck[deck.length - 2];
    playersHand.card2 = deck[deck.length - 4];
console.log(playersHand);
AIsHand.card1 = deck[deck.length - 1];
AIsHand.card2 = deck[deck.length - 3];
console.log(AIsHand);
// small blind goes to player
playerChipAmount = playerChipAmount - smallBlind;
document.getElementById("playerChipCount").innerHTML = playerChipAmount;
// big blind goes to AI
AIChipAmount = AIChipAmount - bigBlind;
document.getElementById("AIChipCount").innerHTML = AIChipAmount;
currentPot = currentPot + smallBlind + bigBlind;
document.getElementById("pot-text").innerHTML = smallBlind + bigBlind;
}
else if (buttonLocation === "AI") {
    shuffleDeck(deck);
    createFaceUpCardOnTopOfDeck(1);
    setTimeout(() => dealFirstCardToPlayer(1) , 1000);
    createFaceDownCardOnTopOfDeck(2)
    setTimeout(() => dealFirstCardToAI(2) , 2000);
    createFaceUpCardOnTopOfDeck(3);
    setTimeout(() => dealSecondCardToPlayer(3) , 3000);
    createFaceDownCardOnTopOfDeck(4);
    setTimeout(() => dealSecondCardToAI(4) , 4000);
    createFaceDownCardOnTopOfDeck(5);
    console.log(deck);
    playersHand.card1 = deck[deck.length - 1];
    playersHand.card2 = deck[deck.length - 3];
console.log(playersHand);
AIsHand.card1 = deck[deck.length - 2];
AIsHand.card2 = deck[deck.length - 4];
console.log(AIsHand);
// small blind goes to AI
AIChipAmount = AIChipAmount - smallBlind;
document.getElementById("AIChipCount").innerHTML = AIChipAmount;
// big blind goes to player
playerChipAmount = playerChipAmount - bigBlind;
document.getElementById("playerChipCount").innerHTML = playerChipAmount;
currentPot = currentPot + smallBlind + bigBlind;
document.getElementById("pot-text").innerHTML = smallBlind + bigBlind;
}
}
function createPot () {
    var pot = document.createElement("img");
    pot.setAttribute("id" , "pot");
    pot.setAttribute("width" , "50px");
    pot.setAttribute("height" , "50px");
    pot.setAttribute("src" , "./assets/images/chipStack.png");
    document.body.append(pot);
    var textContainer = document.createElement("p");
    textContainer.setAttribute("id" , "pot-text");
    var textNode = document.createTextNode(currentPot + "");
    textContainer.append(textNode);
    document.body.append(textContainer);
}
function createControlContainer () {
    var container = document.createElement("div");
    container.setAttribute("id" , "control-container");
    document.body.append(container);
}
createControlContainer();
createCallButton();
createFoldButton();
createCheckButton();
createRaiseButton();
createPot();
function createCallButton () {
    var button = document.createElement("button");
    button.setAttribute("id" , "call-button");
    var textNode = document.createTextNode("Call");
    button.append(textNode);
    document.getElementById("control-container").append(button);
}
function createFoldButton () {
    var button = document.createElement("button");
    button.setAttribute("id" , "fold-button");
    var textNode = document.createTextNode("Fold");
    button.append(textNode);
    document.getElementById("control-container").append(button);
}
function createRaiseButton () {
    var button = document.createElement("button");
    button.setAttribute("id" , "raise-button");
    var textNode = document.createTextNode("Raise");
    button.append(textNode);
    document.getElementById("control-container").append(button);
    var slideContainer = document.createElement("div");
    slideContainer.setAttribute("class" , "slidecontainer");

    var input = document.createElement("input");
    input.setAttribute("type" , "range");
    input.setAttribute("min" , currentBet + "");
    input.setAttribute("max" , playerChipAmount + "");
    input.setAttribute("value" , "0.50");
    input.setAttribute("id" , "myRange");
    input.setAttribute("class" , "slider");

    slideContainer.append(input);
    document.getElementById("control-container").append(slideContainer);
    var demo = document.createElement("p");
    demo.setAttribute("id" , "demo");
    document.getElementById("control-container").append(demo);
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    document.getElementById("myRange").step = "0.5";
  output.innerHTML = this.value;
}
}
function createCheckButton () {
    var button = document.createElement("button");
    button.setAttribute("id" , "check-button");
    var textNode = document.createTextNode("Check");
    button.append(textNode);
    document.getElementById("control-container").append(button);
}
function deleteCheckButton () {

}

createFaceDownCardOnTopOfDeck(1);
document.getElementById("startGame").addEventListener("click" , handleHighCard , false);
