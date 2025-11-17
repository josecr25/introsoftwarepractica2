let sprite = game.createSprite(2, 2)
let direction = 1

input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})

basic.forever(function () {
    sprite.change(LedSpriteProperty.X, direction)

    if (sprite.get(LedSpriteProperty.X) <= 0 || sprite.get(LedSpriteProperty.X) >= 4) {
        direction = -direction
    }

    basic.pause(200)
})
