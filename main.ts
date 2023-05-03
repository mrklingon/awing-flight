function Shift () {
    if (!(game.isGameOver())) {
        for (let index = 0; index <= 3; index++) {
            for (let I2 = 0; I2 <= 4; I2++) {
                led.plotBrightness(index, I2, led.pointBrightness(index + 1, I2))
            }
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
    blast()
})
input.onButtonPressed(Button.B, function () {
    Aw += 1
    if (Aw > 4) {
        Aw = 4
    }
})
function blast () {
    let I3 = 0
    if (0 != led.pointBrightness(I3, Aw)) {
        game.addScore(randint(3, 10))
    }
    for (let I3 = 0; I3 <= 4; I3++) {
        led.plot(I3, Aw)
    }
    basic.pause(100)
    for (let I3 = 0; I3 <= 4; I3++) {
        led.unplot(I3, Aw)
    }
}
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
game.setScore(0)
game.setLife(5)
basic.forever(function () {
    Shift()
    if (0 != led.pointBrightness(0, Aw)) {
        game.removeLife(1)
    }
    led.plot(0, Aw)
    basic.pause(200)
})
basic.forever(function () {
    if (!(game.isGameOver())) {
        for (let index = 0; index <= 4; index++) {
            led.unplot(4, index)
        }
        for (let index = 0; index < 2; index++) {
            led.plotBrightness(4, randint(0, 4), randint(30, 200))
        }
        basic.pause(500)
    }
})
