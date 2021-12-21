(function ininit(){
    const inputElm = document.querySelector('#input')
const formElm = document.querySelector('form')
const winScoreElm = document.querySelector('.winS')
const p1ScoreElm = document.querySelector('.p1')
const p2ScoreElm = document.querySelector('.p2')
const p1btnElm = document.querySelector('.p1btn')
const p2btnElm = document.querySelector('.p2btn')
const resetBtn = document.querySelector('.reset')

let winScore = 10
let p1Score = 0
let p2Score = 0
let turn = 'player1'

winScoreElm.textContent = winScore
p1ScoreElm.textContent = p1Score
p2ScoreElm.textContent = p2Score

formElm.addEventListener('submit', e => {
    e.preventDefault()
    const validInput= +inputElm.value
    if(validInput===''||validInput<1){
        
        if(document.querySelector('.winmsg')){
            (document.querySelector('.winmsg')).remove()
            if(!document.querySelector(".invalid")){
                formElm.insertAdjacentHTML('beforebegin', `<p class="invalid"> Please Input Valid Winning Score </p>`)
                inputElm.value = ''
    
            }
    
        }
        else if(!document.querySelector(".invalid")){
            formElm.insertAdjacentHTML('beforebegin', `<p class="invalid"> Please Input Valid Winning Score </p>`)
            inputElm.value = ''

        }
        

    }

    else{
        if(document.querySelector('.invalid')){
            document.querySelector('.invalid').remove()

        }
        
        winScoreElm.textContent = inputElm.value
        winScore = +inputElm.value  //convert inputElm.value to number value from string
        inputElm.value = ''
        initialPlaystate()

    }
   

})

p1btnElm.addEventListener('click', e => {
    if (turn === 'player1') {
        p1Score=genRanNum(winScore)
        p1ScoreElm.textContent = p1Score
        turn = 'player2'
        p1btnElm.setAttribute('disabled', 'disabled')
        p2btnElm.removeAttribute('disabled')
        checkWinner()

    }

})


p2btnElm.addEventListener('click', e => {

    if (turn === 'player2') {
        p2Score=genRanNum(winScore)
        p2ScoreElm.textContent = p2Score
        turn = 'player1'
        p2btnElm.setAttribute('disabled', 'disabled')
        p1btnElm.removeAttribute('disabled')
        checkWinner()


    }


})


function checkWinner() {
    const isP1 = winScore === p1Score
    const isP2 = winScore === p2Score
    if (isP1 || isP2) {
        p1btnElm.setAttribute('disabled', 'disabled')
        p2btnElm.setAttribute('disabled', 'disabled')

    }
    displayWineer(isP1, isP2)
}

function displayWineer(p1, p2) {
    if (p1 === true) {
        formElm.insertAdjacentHTML('beforebegin', `<p class="winmsg"> Player 1 win!!!! </p>`)
    }
    else if (p2 === true) {
        formElm.insertAdjacentHTML('beforebegin', `<p class="winmsg"> Player 2 win!!!! </p>`)
    }

}

resetBtn.addEventListener('click', e => {
    winScore = 10
    initialPlaystate()
   

})

function initialPlaystate(){
    p1Score = 0
    p2Score = 0
    turn = 'player1'

    winScoreElm.textContent = winScore
    p1ScoreElm.textContent = p1Score
    p2ScoreElm.textContent = p2Score
    p1btnElm.removeAttribute('disabled')
    p2btnElm.removeAttribute('disabled')
    if(document.querySelector('.winmsg')){
        (document.querySelector('.winmsg')).remove()

    }
}

function genRanNum(max){
    return Math.ceil(Math.random()*max)
}

}) ()

