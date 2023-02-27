//Space ship array 
let spaceship = [
    {
        hull: 20,
        firepower: 5,
        accuracy: 0.7,
        img: 'shipGIF/ship5.gif'
    }
]

// Alien spaceship empty array, for loop will populate the alien ships
let alien = []

//For loop creating the alien ships
for(let i=0;i<6;i++) {
    let img = ['shipGIF/ship2.gif','shipGIF/ship1.gif','shipGIF/ship3.gif','shipGIF/ship4.gif','shipGIF/ship6.gif','shipGIF/ship7.gif']
    let enemy = {
        hull: Math.floor(Math.random()*4)+3,
        firepower: Math.floor(Math.random()*3)+2,
        accuracy: Math.floor(Math.random()*3+6)/10,
        img: img[i]
    }
    alien.push(enemy)
}

// Initial USS status display
const hull1 = document.querySelector('.hull1')
hull1.innerHTML = `Hull: ${spaceship[0].hull}`
const firepower1 = document.querySelector('.firepower1')
firepower1.innerHTML = `Firepower: ${spaceship[0].firepower}`
const accuracy1 = document.querySelector('.accuracy1')
accuracy1.innerHTML = `Accuracy: ${spaceship[0].accuracy}`
const img1 = document.querySelector('.ussImg')
img1.setAttribute('src', spaceship[0].img)
let userButton = document.querySelector('.userAtk')

// Initial Enemy Status display
const hull2 = document.querySelector('.hull2')
hull2.innerHTML = `${alien[0].hull} :Hull`
const firepower2 = document.querySelector('.firepower2')
firepower2.innerHTML = `${alien[0].firepower} :Firepower`
const accuracy2 = document.querySelector('.accuracy2')
accuracy2.innerHTML = `${alien[0].accuracy} :Accuracy`
const img2 = document.querySelector('.alienImg')
img2.setAttribute('src', alien[0].img)
let enemyButton = document.querySelector('.enemyAtk')

const message = document.querySelector('.message')
const retreatButton = document.querySelector('.retreat')

//Acts as ON/OFF switch for USS and Enemy Turns
let ussTurn = true
let alienTurn = false

// Attack function for the USS will add to onclick
const userAttack = () => {
    if(ussTurn) {
        if(spaceship[0].accuracy > alien[0].accuracy) {
            alien[0].hull -= spaceship[0].firepower
            hull2.innerHTML = `${alien[0].hull} :Hull`
            if(alien[0].hull <= 0) {
                console.log(alien)
                alien.shift()
                if(alien.length === 0) {
                    console.log('You Win!')
                    message.innerHTML = 'You Win!'
                    ussTurn = false
                    userButton.style.backgroundColor = 'rgb(239, 29, 36)'
                    alienTurn = false
                    enemyButton.style.backgroundColor ='rgb(239, 29, 36)'
                    retreatButton.innerHTML = 'Play Again'
                    retreatButton.style.backgroundColor = 'rgb(103, 239, 103)'
                    img2.setAttribute('src','shipGIF/transparentImage.png')
                }else {
                    console.log('You destroyed the enemy spaceship! Attack or Retreat?')
                    message.innerHTML = 'You destroyed the enemy spaceship! Attack or Retreat?'
                    alien[0].accuracy = Math.floor(Math.random()*3+6)/10
                    hull2.innerHTML = `${alien[0].hull} :Hull`
                    firepower2.innerHTML = `${alien[0].firepower} :Firepower`
                    accuracy2.innerHTML = `${alien[0].accuracy} :Accuracy`
                    img2.setAttribute('src', alien[0].img)
                    retreatButton.style.backgroundColor = 'rgb(103, 239, 103)'
                }
            } else {
                console.log(`You hit the enemy. Enemy has ${alien[0].hull} hull remaining`)
                message.innerHTML = `You hit the enemy. Enemy has ${alien[0].hull} hull remaining`
                alien[0].accuracy = Math.floor(Math.random()*3+6)/10
                accuracy2.innerHTML = `${alien[0].accuracy} :Accuracy`
                ussTurn = false
                userButton.style.backgroundColor = 'rgb(239, 29, 36)'
                alienTurn = true
                enemyButton.style.backgroundColor = 'rgb(103, 239, 103)'
                retreatButton.style.backgroundColor = 'rgb(239, 29, 36)'
            }
        } else {
            console.log('You missed!')
            message.innerHTML = 'You missed!'
            ussTurn = false
            userButton.style.backgroundColor = 'rgb(239, 29, 36)'
            alienTurn = true
            enemyButton.style.backgroundColor = 'rgb(103, 239, 103)'
            retreatButton.style.backgroundColor = 'rgb(239, 29, 36)'
        }
        console.log(alien)
        console.log(spaceship)
    }

}

//Attack function for the alien ship add to onclick
const enemyAttack = () => {
    if(alienTurn) {
        if(spaceship[0].accuracy < alien[0].accuracy) {
            spaceship[0].hull -= alien[0].firepower
            hull1.innerHTML = `Hull: ${spaceship[0].hull}`
            if(spaceship[0].hull <= 0) {
                console.log('You have been defeated!')
                message.innerHTML = 'You have been defeated!'
                ussTurn = false
                userButton.style.backgroundColor = 'rgb(239, 29, 36)'
                alienTurn = false
                enemyButton.style.backgroundColor ='rgb(239, 29, 36)'
                retreatButton.style.backgroundColor = 'rgb(103, 239, 103)'
                retreatButton.innerHTML = 'Play Again'
                img1.setAttribute('src','shipGIF/transparentImage.png')
            } else {
                console.log(`You have been hit! You have ${spaceship[0].hull} hull remaining`)
                message.innerHTML = `You have been hit! You have ${spaceship[0].hull} hull remaining`
                alienTurn = false
                enemyButton.style.backgroundColor = 'rgb(239, 29, 36)'
                ussTurn = true
                userButton.style.backgroundColor = 'rgb(103, 239, 103)'
            }
        } else {
            console.log('The enemy missed!')
            message.innerHTML = 'The enemy missed!'
            alienTurn = false
            enemyButton.style.backgroundColor = 'rgb(239, 29, 36)'
            ussTurn = true
            userButton.style.backgroundColor = 'rgb(103, 239, 103)'
        }
        alien[0].accuracy = Math.floor(Math.random()*3+6)/10  //Changes the accuracy of enemy
        accuracy2.innerHTML = `${alien[0].accuracy} :Accuracy`
        console.log(alien)
        console.log(spaceship)
    }
}

//Function used in the retreat loop to restart the game, resets all conditions
const startGame = () => {
    spaceship = [
        {
            hull: 20,
            firepower: 5,
            accuracy: 0.7,
            img: 'shipGIF/ship5.gif'
        }
    ]
    alien = []
    
    for(let i=0;i<6;i++) {
        let img = ['shipGIF/ship2.gif','shipGIF/ship1.gif','shipGIF/ship3.gif','shipGIF/ship4.gif','shipGIF/ship6.gif','shipGIF/ship7.gif']
        let enemy = {
            hull: Math.floor(Math.random()*4)+3,
            firepower: Math.floor(Math.random()*3)+2,
            accuracy: Math.floor(Math.random()*3+6)/10,
            img: img[i]
        }
        alien.push(enemy)
    }
    // User status display
    hull1.innerHTML = `Hull: ${spaceship[0].hull}`
    firepower1.innerHTML = `Firepower: ${spaceship[0].firepower}`
    accuracy1.innerHTML = `Accuracy: ${spaceship[0].accuracy}`
    img1.setAttribute('src', spaceship[0].img)
    
    // Enemy Status display
    hull2.innerHTML = `${alien[0].hull} :Hull`
    firepower2.innerHTML = `${alien[0].firepower} :Firepower`
    accuracy2.innerHTML = `${alien[0].accuracy} :Accuracy`
    img2.setAttribute('src', alien[0].img)
    
    ussTurn = true
    alienTurn = false
    message.innerHTML = ''
    userButton.style.backgroundColor = 'rgb(103, 239, 103)'
    enemyButton.style.backgroundColor = 'rgb(239, 29, 36)'
    retreatButton.innerHTML = 'Retreat'
    retreatButton.style.backgroundColor = 'rgb(239, 29, 36)'
}

//Retreat function add onclick. Acts as a retreat button and Play again function
const retreat = () => {
    if(retreatButton.innerHTML === 'Play Again') {
        startGame()
    }
    if(ussTurn && retreatButton.style.backgroundColor !=='rgb(239, 29, 36)') {
        if(alien.length < 6) {
            retreatButton.style.backgroundColor = 'rgb(103, 239, 103)'
            ussTurn = false
            userButton.style.backgroundColor = 'rgb(239, 29, 36)'
            alienTurn = false
            enemyButton.style.backgroundColor ='rgb(239, 29, 36)'
            message.innerHTML = 'You retreated. GAME OVER!'
            retreatButton.innerHTML = "Play Again"
        }
    }

}
