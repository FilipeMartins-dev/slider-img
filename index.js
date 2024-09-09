const previousButton = document.querySelector(".previous-button")
const nextButton = document.querySelector(".next-button")
// const cards = document.querySelectorAll(".card-img")
const card0 = document.querySelector(".card0")
const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")
const card4 = document.querySelector(".card4")
const cards = [card0, card1, card2, card3, card4]

const containerBg = document.querySelector(".section-content")
const sliderTexts = document.querySelectorAll(".slider-text")
const containerButtons = document.querySelector(".container-buttons")

previousButton.addEventListener("click", changePrevious)
nextButton.addEventListener("click", changeNext)

document.addEventListener("keydown", handleKey)
document.addEventListener("keydown", handleButton)
document.addEventListener("click", handleButton)

function handleButton(event){
    const icon = document.getElementsByClassName("button-icon")
    
    const targetIsButton = event.target === previousButton || event.target === nextButton || event.target === icon[0] || event.target === icon[1] || event.target == containerButtons;

    if(!targetIsButton){
        previousButton.classList.remove("button-active")
        nextButton.classList.remove("button-active")
    }
}

function handleKey(event){
    if(event.key === "ArrowLeft") changePrevious()
    if(event.key === "ArrowRight") changeNext()
}

for(let item of cards){
    item.addEventListener("click", cardClick)
}

function activateLastItems(){
    cards[activeCard].classList.remove("card-active")
    cards[cards.length - 1].classList.add("card-active")
    
    sliderTexts[activeCard].classList.add("hidden")
    sliderTexts[activeCard].classList.remove("slider-active")
    
    activeCard = cards.length - 1
    
    containerBg.classList.remove("bg0")
    containerBg.classList.add(`bg${activeCard}`)
    
    sliderTexts[activeCard].classList.remove("hidden")
    sliderTexts[activeCard].classList.add("slider-active")
}

function activatePreviousItems(){
    cards[activeCard].classList.remove("card-active")
    containerBg.classList.remove(`bg${activeCard}`)
    
    sliderTexts[activeCard].classList.add("hidden")
    sliderTexts[activeCard].classList.remove("slider-active")
    
    activeCard--
    cards[activeCard].classList.add("card-active")
    containerBg.classList.add(`bg${activeCard}`)
    
    sliderTexts[activeCard].classList.remove("hidden")
    sliderTexts[activeCard].classList.add("slider-active")
}

let activeCard = 0

function changePrevious(){
    nextButton.classList.remove("button-active")
    previousButton.classList.add("button-active")
    if(activeCard === 0){
        activateLastItems()
        
        return
    }

    activatePreviousItems()    
}

function activateFirstItems(){
    cards[activeCard].classList.remove("card-active")
    containerBg.classList.remove(`bg${activeCard}`)
    cards[0].classList.add("card-active")
    
    sliderTexts[activeCard].classList.add("hidden")
    sliderTexts[activeCard].classList.remove("slider-active")

    activeCard = 0

    containerBg.classList.add(`bg${activeCard}`)

    sliderTexts[activeCard].classList.remove("hidden")
    sliderTexts[activeCard].classList.add("slider-active")
}

function activateNextItems(){
    cards[activeCard].classList.remove("card-active")
    containerBg.classList.remove(`bg${activeCard}`)

    sliderTexts[activeCard].classList.add("hidden")
    sliderTexts[activeCard].classList.remove("slider-active")

    activeCard++

    sliderTexts[activeCard].classList.remove("hidden")
    sliderTexts[activeCard].classList.add("slider-active")

    cards[activeCard].classList.add("card-active")
    containerBg.classList.add(`bg${activeCard}`)
}

function changeNext(){
    previousButton.classList.remove("button-active")
    nextButton.classList.add("button-active")
    
    if(activeCard === cards.length - 1){
        activateFirstItems()
        return
   } 

   activateNextItems()
}

function cardClick(event){
    cards[activeCard].classList.remove("card-active")
    const targetIndex = cards.indexOf(event.currentTarget)

    sliderTexts[activeCard].classList.add("hidden")
    sliderTexts[activeCard].classList.remove("slider-active")

    containerBg.classList.remove(`bg${activeCard}`)
    
    activeCard = targetIndex
    cards[activeCard].classList.add("card-active")
    
    sliderTexts[activeCard].classList.remove("hidden")
    sliderTexts[activeCard].classList.add("slider-active")

    containerBg.classList.add(`bg${activeCard}`)
}