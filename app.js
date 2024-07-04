let userScore = 0
let compScore = 0


const choices = document.querySelectorAll('.choice')


const msg = document.querySelector('#msg')


const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#computer-score')


const drawGame = () => {
    msg.innerText="Game was draw"
     msg.style.backgroundColor = '#081b31'
}

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random()*3)
    return options[randomIndex]
}




const playgame = (userChoice) => {
    const compChoice = genCompChoice()

    if(userChoice === compChoice){
        drawGame()
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper'? false:true
        }
        else if(userChoice === 'paper'){
            userWin = compChoice === 'scissors'? false:true
        }
        else{
            userWin = compChoice === 'rock'? false:true
        }
    showWinner(userWin, compChoice, userChoice)
    }
}



function showWinner(userWin, compChoice, userChoice){
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = 'green'
    }
    else{
        compScore++;
        compScorePara.innerText = compScore
        msg.innerText=`Computer wins, ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = 'brown'
    }
}



choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("Id")
            playgame(userChoice)
    })
}) 