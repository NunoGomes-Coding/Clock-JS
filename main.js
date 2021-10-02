setInterval(SetClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

const digitalHour = document.querySelector('[digital-hour]')
const digitalminute = document.querySelector('[digital-minute]')
const digitalsecond = document.querySelector('[digital-second]')

function SetClock() {
	const currentDate = new Date()
	const secondsRatio = currentDate.getSeconds() / 60
	const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
	const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
	
	SetRotation(hourHand, hoursRatio)
	SetRotation(minuteHand, minutesRatio)
	SetRotation(secondHand, secondsRatio)

	setDigital(digitalHour, (hoursRatio * 12))
	setDigital(digitalminute, (minutesRatio * 60))
	setDigital(digitalsecond, (secondsRatio * 60))
}

function SetRotation(element, rotationRatio) {
	element.style.setProperty('--rotation', rotationRatio * 360)
}

function setDigital(element, time) {
	if (time < 10) {
		element.innerHTML = '0' + time.toFixed(0)
	} else {
		element.innerHTML = time.toFixed(0)
	}
}

SetClock()