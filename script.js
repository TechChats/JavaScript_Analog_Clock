setInterval(clock, 1000)


let hourHand = document.querySelector('.hour')
let minuteHand = document.querySelector('.minute')
let secondHand = document.querySelector('.second')


function clock(){
    let date = new Date()
    let secondsRatio = date.getSeconds() / 60 
    let minutesRatio = (secondsRatio + date.getMinutes()) / 60
    let hoursRation = (minutesRatio + date.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRation)
}

clock()

function setRotation(element,rotationRation) {
    element.style.setProperty('--rotation', rotationRation * 360)
} 