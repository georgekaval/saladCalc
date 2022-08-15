let total = 0
let currentSaladPrices = []
let currentSaladNames = []
let smallSalad = 3.50
let largeSalad = 4.50
let sectionATopping = .75
let sectionBTopping = 1
let sectionCTopping = 1.50
let sectionDTopping = 3.25
let avocado = 1.75
let extraDressing = .75

//A function that adds a sectionA item to the array
const addSmallSizePrice = () => {
  currentSaladPrices.push(smallSalad)
}
const addLargeSaladPrice = () => {
  currentSaladPrices.push(largeSalad)
}
const addSectionAPrice = () => {
  currentSaladPrices.push(sectionATopping)
}
const addSectionBPrice = () => {
  currentSaladPrices.push(sectionBTopping)
}
const addSectionCPrice = () => {
  currentSaladPrices.push(sectionCTopping)
}
const addSectionDPrice = () => {
  currentSaladPrices.push(sectionDTopping)
}
const addAvocadoPrice = () => {
  currentSaladPrices.push(avocado)
}
const addDressingPrice = () => {
  currentSaladPrices.push(extraDressing)
}

//Need a function to list the names of the toppings added
const addItemName = () => {
  currentSaladNames.push(this.name)
}

//A function that totals the value of whats in the array
const addToppingsPrice = () => {
  sum = 0
  for(let i = 0; i < currentSaladPrices.length; i++){
    total += currentSaladPrices[i]
  }
  return total
}

//Need to clear the currentSalad array if button is clicked
const clearToppings = () => {
  currentSaladPrices = []
  currentSaladNames = []
}

//display total on page function
const displayTotal = () => {
  $("#total").text(` ${total}`)
}

//display toppings on page function

const displayToppings = () => {
  let fixSaladList = currentSaladNames
  $("#toppingsAddedList").text(  `${currentSaladNames}`)
  console.log(fixSaladList);
}

//Need to make a function that when a topping button is clicked, it is added to the currentSalad array

$(() => {
  $( "#small" ).click(function() {
    addSmallSizePrice()
    addToppingsPrice()
    currentSaladNames.push(this.name)
    displayTotal()
    displayToppings()
    total = 0
  })
  $( "#large" ).click(function() {
    addLargeSaladPrice()
    addToppingsPrice()
    currentSaladNames.push(this.name)
    displayTotal()
    displayToppings()
    total = 0
  })
  $( ".sectionA" ).click(function() {
    addSectionAPrice()
    addToppingsPrice()
    currentSaladNames.push(this.name)
    displayTotal()
    displayToppings()
    total = 0
  })
  $( ".sectionB" ).click(function() {
    addSectionBPrice()
    addToppingsPrice()
    currentSaladNames.push(this.name)
    displayTotal()
    displayToppings()
    total = 0
  })
  $( ".sectionC" ).click(function() {
    addSectionCPrice()
    addToppingsPrice()
    currentSaladNames.push(this.name)
    displayTotal()
    displayToppings()
    total = 0
  })
  $( ".sectionD" ).click(function() {
    addSectionDPrice()
    addToppingsPrice()
    currentSaladNames.push(this.name)
    displayTotal()
    displayToppings()
    total = 0
  })
  $( "#avocadoButton" ).click(function() {
    addAvocadoPrice()
    addToppingsPrice()
    currentSaladNames.push(this.name)
    displayTotal()
    displayToppings()
    total = 0
  })
  $( "#extraDressing" ).click(function() {
    addDressingPrice()
    addToppingsPrice()
    currentSaladNames.push(this.name)
    displayTotal()
    displayToppings()
    total = 0
  })
  $("#clear").click(function(){
    clearToppings()
    displayTotal()
    displayToppings()
  })
})
