const inputEl = document.getElementById('input-el')
const convertBtn = document.getElementById('convert-btn')
let length = document.getElementById('length_para')
let volume = document.getElementById('volume_para')
let mass = document.getElementById('mass_para')
const meterConv = 3.281
const literConv = 0.264
const kiloConv = 2.204
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

convertBtn.addEventListener('click', function(num){
    // change each <p> to reflect conversion
    // 

    // Feet to Meters
     num = Number(inputEl.value)
     let meters = (num * meterConv).toFixed(2)
     let feet = (num / 3.281).toFixed(2)
    length.textContent = `${num} meters = ${meters} feet | ${num} feet = ${feet} meters`

    // Liters to Gallons
    let liters = (num * literConv).toFixed(2)
    let gallons = (num / literConv).toFixed(2)
    volume.textContent = `${num} liters = ${liters} gallons | ${num} gallons = ${gallons} liters`

    // Kilos to Pounds
    let kilos = (num * kiloConv).toFixed(2)
    let pounds = (num / kiloConv).toFixed(2)
    mass.textContent = `${num} kilos = ${kilos} pounds | ${num} pounds = ${pounds} kilos`


   
})

