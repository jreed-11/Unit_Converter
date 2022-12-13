const input = document.getElementById("num__input")
const convertBtn = document.getElementById("convert__btn")
const outputLength = document.getElementById("output__length")
const volumeLength = document.getElementById("volume__length")
const massLength = document.getElementById("mass__length")



convertBtn.addEventListener("click", function() {
    const inputValue = input.value
    let meter = input.value * 3.281
    let feet = input.value * 0.3048
    let liter = input.value * 0.264172
    let gallon = input.value * 3.78541
    let kilo = input.value * 2.204 
    let pounds = input.value * 0.453592
    

    let paraOne = `${inputValue} meters = ${meter.toFixed(3)} feet | ${inputValue} feet = ${feet.toFixed(3)} meters `
    let paraTwo = `${inputValue} liters = ${liter.toFixed(3)} gallons | ${inputValue} gallons = ${gallon.toFixed(3)} liters `
    let paraThree = `${inputValue} kilos = ${kilo.toFixed(3)} pounds | ${inputValue} pounds = ${pounds.toFixed(3)} kilos `

    outputLength.innerHTML = paraOne
    volumeLength.innerHTML = paraTwo
    massLength.innerHTML = paraThree
    
})

console.log(convertBtn)