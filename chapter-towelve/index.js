var rect = {
    width: 100,
    height: 100,

    draw: function() {
        console.log('I am a rectAngle')
    this.printProperties()
    console.log(this)
    },
    printProperties: function() {
        console.log('My width is' + ' ' + this.width)
        console.log('My width is' + ' ' + this.height)

    
    }
}

rect.draw()

// rect.height = 120
// rect.draw()

function myFunc () {
    console.log(this)
}

myFunc()

var another = {
    width: 79,
    height: 87,
    print: rect.printProperties
}

console.log(another.print)
another.print()

//factory pattern

var createRect = function (width, height) {
    return {
        width: width,
        height: height,
    
        draw : function() {
            console.log('I am a rectAngle')
        this.printProperties()
        console.log(this)
        },
        printProperties: function() {
            console.log('My width is' + ' ' + this.width)
            console.log('My width is' + ' ' + this.height)
    
        
        }
    }
}

var rect1 = createRect(10,5)
rect1.draw()

var rect2 = createRect(40,6)
rect2.draw()

//const pattern

var Constfactor = function (width, height) {
        
            this.width = width
            this.height = height
        
            this.draw = function() {
                console.log('I am a rectAngle')
            this.printProperties()
            console.log(this)
            },
            this.printProperties= function() {
                console.log('My width is' + ' ' + this.width)
                console.log('My width is' + ' ' + this.height)
        
            
            }
        }
    

    var rect3 = new Constfactor(10,5)
rect1.draw()

