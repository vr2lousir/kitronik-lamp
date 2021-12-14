input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1023; index++) {
        x += 2
        pins.analogWritePin(AnalogPin.P0, x)
        basic.pause(1)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1023; index++) {
        x += -2
        pins.analogWritePin(AnalogPin.P0, x)
        basic.pause(1)
    }
})
let x = 0
x = 0
basic.forever(function () {
	
})
