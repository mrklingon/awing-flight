function Shift () {
    for (let index = 0; index <= 3; index++) {
        for (let I2 = 0; I2 <= 4; I2++) {
            led.plotBrightness(index, I2, led.pointBrightness(index + 1, I2))
        }
    }
}
input.onButtonPressed(Button.A, function () {
    Aw += -1
    if (Aw < 0) {
        Aw = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let I3 = 0; I3 <= 4; I3++) {
        led.plot(I3, Aw)
    }
    basic.pause(100)
    for (let I3 = 0; I3 <= 4; I3++) {
        led.unplot(I3, Aw)
    }
})
input.onButtonPressed(Button.B, function () {
    Aw += 1
    if (Aw > 4) {
        Aw = 4
    }
})
let Aw = 0
images.createBigImage(`
    . . . . . . . . . .
    . . # # # # . . . .
    . # # # # . . . . .
    . . # # # # . . . .
    . . . . . . . . . .
    `).scrollImage(1, 200)
basic.showString("A-Wing")
Aw = 2
basic.forever(function () {
    Shift()
    led.plot(0, Aw)
})
