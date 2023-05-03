input.onButtonPressed(Button.A, function () {
    Aw += -1
    if (Aw < 0) {
        Aw = 0
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
    led.plot(0, Aw)
})
