//Main Data
let username = ''

//Game stats
let beginMoney = 1000
let BeginRounds = 0
const Bets = {
    even: 'EVEN',
    odd: 'ODD'
}
const minimumBet = 100
const noOfDIceToRoll = 2
const diceDelayMs = 100000000
const resultDelayMS = 1500
//HTML elements ID
const usernameInput = 'username-input'
const resistrationPane = 'craps-game-username-input'
const mainSection = 'crapsgame-main-section'
const crapsUsername = 'craps-user'
const startMoney = 'craps-money'
const startRound = 'craps-rounds'
const CrapsBet = "craps-user-bet-amount"
const bettingGrid = 'crpas-betting-grid-container'
const CraspsDiceRolButton = 'crapsDiceRollButton'
const CrapsAnimationRoll = "craps-dice-animation-contanier"
const CrapsRoundFinsihed = 'crpas-round-finished-grid-container'
const roundFinishedMessage = 'round-finshed-message'
const notAllowedBtn = 'not-allowed'
const nextRoundAllowedBtn = 'allowed'


//in-game variables
let currentRounds = BeginRounds
let currentMoney = beginMoney
let currentBet = Bets.even
let currentBetAmount = minimumBet
let canChaangeBet = true
//get and validate username
function registerCrapsPlayer (){
        username = document.getElementById(usernameInput).value
        let firstCharIsDigit = /^[0-9]|[^a-zA-Z0-9_]/g
        if (username.length < 5 || firstCharIsDigit.test(username)) {
            alert('Username has to be alphanumeric, greater than 5 and does not contain special characters')
        }else{
            removeRegistration()
            showMainsection()
            DisplayData()
        }


}
// Manipulate HTML elements

function showElement(elementId) {
    document.getElementById(elementId).style.display = 'block'
}
function hideElement(elementId) {
    document.getElementById(elementId).style.display = 'none'
}
function removeRegistration (){
    hideElement(resistrationPane)
}
function showRegistration (){
    showElement(resistrationPane)
}
function showMainsection(){
    showElement(mainSection)
    hideElement(CrapsRoundFinsihed)
}
function removeMainsection(){
    hideElement(mainSection)
    hideElement(CrapsRoundFinsihed)
}
// show user rounds data

function DisplayData (){
    document.getElementById(crapsUsername).innerHTML = username
    DisplayMoney(beginMoney)
    hideElement(notAllowedBtn)
    DisplayRounds(BeginRounds)
    betEven()
    setBetAmount(minimumBet)
    DisplayNextRound()
}

function DisplayNextRound (){
    canChaangeBet = true
    hideElement(CrapsAnimationRoll)
    showElement(bettingGrid)
    showElement(CraspsDiceRolButton)
    hideElement(CrapsRoundFinsihed)
    setBetAmount(minimumBet)
}
// Manage current data
function DisplayMoney (money){
    currentMoney = money
    document.getElementById(startMoney).innerHTML = money
}
function DisplayRounds (round){
    currentRounds = round
    document.getElementById(startRound).innerHTML = round
}
function betEven (){
   chooseBet(Bets.even)
}
function betOdd (){
    chooseBet(Bets.odd)
}
function chooseBet(bet){
    if (canChaangeBet) {
        currentBet = bet
        document.getElementById(bet).style.backgroundColor = 'red'
        const betDeselect = bet == Bets.even? Bets.odd : Bets.even
        document.getElementById(betDeselect).style.backgroundColor = 'transparent'
    }

}
function increaseBet (){
    setBetAmount(Math.min(currentBetAmount + minimumBet, currentMoney))
}
function reduceBet(){
    setBetAmount(Math.max(currentBetAmount - minimumBet, minimumBet))
}
function setBetAmount (betAmount){
    if (canChaangeBet){
        currentBetAmount = betAmount
        document.getElementById(CrapsBet).innerHTML = '$' + betAmount
    }
    
}
// Roll dice and compute result

function rollDice (){
    showElement(CrapsAnimationRoll)
    canChaangeBet = false
    formatDiceScale()
    hideElement(CraspsDiceRolButton)
    const diceRollElement = document.getElementById(CrapsAnimationRoll)
    rollADie({ element: diceRollElement, numberOfDice: noOfDIceToRoll, callback: delayedProcessedDiceresult, delay: diceDelayMs });
}
window.addEventListener('resize', formatDiceScale)
function formatDiceScale (){
    const vh = window.innerHeight * 0.8
    const vw = window.innerWidth * 0.8
    const widthScale = Math.min(700, vw, vh)
    const heightScale = widthScale * 0.714
    const scale = heightScale / 366.7104
    document.getElementById(CrapsAnimationRoll).style.transform = 'scale(' + scale + ') '

}
function delayedProcessedDiceresult (diceResult) {
    setTimeout(function(){processDiceResult(diceResult) }, resultDelayMS)
}
function processDiceResult (diceResult){
    let diceSum = Bets.odd
    let solution = diceResult.reduce((partialSum, a) => partialSum + a, 0)
    let setFinishedMessage = ''
    if (solution % 2 === 0){
        diceSum = Bets.even
    }
    DisplayRounds(currentRounds + 1)
    if(diceSum === currentBet){
        setFinishedMessage = 'YOU WIN!'
        DisplayMoney(currentMoney + currentBetAmount)
    }else{
        setFinishedMessage = 'YOU LOSE'
        DisplayMoney(currentMoney= currentMoney - currentBetAmount)
    }
    if (currentMoney === 0){
        setFinishedMessage = "YOU'RE OUT OF MONEY"
        showElement(notAllowedBtn)
        hideElement(nextRoundAllowedBtn)
    }
    hideElement(bettingGrid)
    showElement(CrapsRoundFinsihed)
    document.getElementById(roundFinishedMessage).innerHTML = setFinishedMessage
}
// exit game funsction

function exitGame(){
    alert('After paying ' + currentRounds + ' rounds you leave with $' + currentMoney)
    removeMainsection()
    showRegistration()
    document.getElementById(usernameInput).value = ''
    showElement(nextRoundAllowedBtn)
}