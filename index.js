const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
// because the direction of the character is changing we need to track it with a variable
let direction = null;
// helpful to keep track of the characters current position with variables x and y
let x = 100;
let y = 250;

function moveCharacter() {
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }

    // update characters left and bottom position using the defined variables x and y
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}

// The setInterval function takes a callback function as its first argument and a certain number of milliseconds as its second argument. 
// It then calls the callback repeatedly, waiting the specified number of milliseconds between each call.
setInterval(moveCharacter, 1)
move(character).to(100, 250)

// change the direction whenever the user presses one of the arrow keys. 
// There is a DOM event we can listen for named keydown, which will fire anytime the user presses a key:
// "e" is an object containing details about the event that fired
// Inside our callback function, we will need to check which key was pressed. We can do this using e.key. 
// We will check e.key and, depending on its value, change the character's direction accordingly:

document.addEventListener('keydown', function(e){   
    // use this line to skip any repeat events.
    if (e.repeat) return;
    
    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})

// event listener to stop the character when the user releases a key:
document.addEventListener('keyup', function(e){
    direction = null
})


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)
