let firstCard = getRandomCard()
let secondCard = getRandomCard()
const cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


// GET ELEMENTS FROM HTML FILE

const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")


// MAIN GAME FUNCTION

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


// FUNCTIONS

function getRandomCard () {
    let randomCard = Math.floor(Math.random() * 13) + 1
    return randomCard
}

function startGame() {
    renderGame()
}

function newCard() {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
}





