const inputEl = document.getElementById("input-el")
const convert = document.getElementById("convert")

const meterFeet = document.getElementById("meter-feet")
const feetMeter = document.getElementById("feet-meter")

const literGallon = document.getElementById("liter-gallon")
const gallonLiter = document.getElementById("gallon-liter")

const kiloPound = document.getElementById("kilo-pound")
const poundKilo = document.getElementById("pound-kilo")

convert.addEventListener("click", function() {
    let meterToFeet = `${inputEl.value} meter = ${ (inputEl.value * 3.28084).toFixed(3) } feet`
    meterFeet.textContent = meterToFeet
    
    let feetToMeter = `${inputEl.value} feet = ${ (inputEl.value * 0.3048).toFixed(3) } meter`
    feetMeter.textContent = feetToMeter
    
    let literToGallon = `${inputEl.value} liters = ${ (inputEl.value * 0.264172).toFixed(3)} gallons`
    literGallon.textContent = literToGallon
    
    let gallonToLiter = `${inputEl.value} gallons = ${ (inputEl.value * 3.785411).toFixed(3)} liters`
    gallonLiter.textContent = gallonToLiter
    
    let kiloToPound = `${inputEl.value} kilo = ${ (inputEl.value * 2.20462).toFixed(3) } pound`
    kiloPound.textContent = kiloToPound
    
    let poundToKilo = `${inputEl.value} pound = ${ (inputEl.value * 0.453592).toFixed(3) } kilogram`
    poundKilo.textContent = poundToKilo
    
})


