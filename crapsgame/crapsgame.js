//Main Data
let username = ''

//Game stats
let beginMoney = 1000
let BeginRounds = 0
//HTML elements ID
const usernameInput = 'username-input'
const resistrationPane = 'craps-game-username-input'
const mainSection = 'crapsgame-main-section'
const crapsUsername = 'craps-user'
const startMoney = 'craps-money'
const startRound = 'craps-rounds'
const CrapsBet = "craps-user-bet-amount"
const Bets = {
    even: 'EVEN',
    odd: 'ODD'
}
const minimumBet = 100

//in-game variables
let currentRounds = BeginRounds
let currentMoney = beginMoney
let currentBet = Bets.even
let currentBetAmount = minimumBet
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
function removeRegistration (){
    document.getElementById(resistrationPane).style.display = 'none'
}
function showMainsection(){
    document.getElementById(mainSection).style.display = 'block'
}
function DisplayData (){
    document.getElementById(crapsUsername).innerHTML = username
    currentMoney = beginMoney
    currentRounds = BeginRounds
    DisplayMoney(currentMoney)
    DisplayRounds(currentRounds)
    betEven()
    setBetAmount(minimumBet)
}
function DisplayMoney (money){
    document.getElementById(startMoney).innerHTML = money
}
function DisplayRounds (round){
    document.getElementById(startRound).innerHTML = round
}
function betEven (){
   chooseBet(Bets.even)
}
function betOdd (){
    chooseBet(Bets.odd)
}
function chooseBet(bet){
    currentBet = bet
    document.getElementById(bet).style.backgroundColor = 'red'
    const betDeselect = bet == Bets.even? Bets.odd : Bets.even
    document.getElementById(betDeselect).style.backgroundColor = 'transparent'
}
function increaseBet (){
    setBetAmount(Math.min(currentBetAmount + minimumBet, currentMoney))
}
function reduceBet(){
    setBetAmount(Math.max(currentBetAmount - minimumBet, minimumBet))
}
function setBetAmount (betAmount){
    currentBetAmount = betAmount
    document.getElementById(CrapsBet).innerHTML = '$' + betAmount
}