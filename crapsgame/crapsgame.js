//HTML elements ID
const usernameInput = 'username-input'
const resistrationPane = 'craps-game-username-input'
const mainSection = 'crapsgame-main-section'


function registerCrapsPlayer (){
        let username = document.getElementById(usernameInput).value
        removeRegistration()
        showMainsection()
}
function removeRegistration (){
    document.getElementById(resistrationPane).style.display = 'none'
}
function showMainsection(){
    document.getElementById(mainSection).style.display = 'block'
}