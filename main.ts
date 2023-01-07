basic.forever(function () {
	
})
control.inBackground(function () {
    while (true) {
        if (input.buttonIsPressed(Button.AB)) {
            music.playTone(988, music.beat(BeatFraction.Breve))
            if (input.buttonIsPressed(Button.AB)) {
                music.playTone(988, music.beat(BeatFraction.Breve))
                if (input.buttonIsPressed(Button.AB)) {
                    music.playTone(988, music.beat(BeatFraction.Breve))
                    if (input.buttonIsPressed(Button.AB)) {
                        music.playMelody("E B C5 A B G A F ", 1500)
                    }
                }
            }
        }
    }
})
control.inBackground(function () {
    while (true) {
        basic.showLeds(`
            . . . # #
            . . # . #
            . # . . #
            # # . . #
            # . . . #
            `)
        basic.showLeds(`
            # # . . .
            # . # . .
            # . . # .
            # . . # #
            # . . . #
            `)
    }
})
