var rect = {
    width: 100,
    height: 100,

    draw: function() {
        console.log('I am a rectAngle')
        console.log('My width is' + ' ' + this.width)
        console.log('My width is' + ' ' + this.height)
    }
}

rect.draw()

rect.height = 120
rect.draw()