//HTML elements ID
const usernameInput = 'username-input'
const resistrationPane = 'craps-game-username-input'
const mainSection = 'crapsgame-main-section'

//get and validate username
function registerCrapsPlayer (){
        let username = document.getElementById(usernameInput).value
        let firstCharIsDigit = /^[0-9]|[^a-zA-Z0-9_]/g
        if (username.length < 5 || firstCharIsDigit.test(username)) {
            alert('Username has to be alphanumeric, greater than 5 and does not contain special characters')
        }else{
            removeRegistration()
            showMainsection()
        }


}
function removeRegistration (){
    document.getElementById(resistrationPane).style.display = 'none'
}
function showMainsection(){
    document.getElementById(mainSection).style.display = 'block'
}