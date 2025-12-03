const randomQuoteGeneratorID = document.getElementById('random-quote-generator')
const randomQuoteTextID = document.getElementById('random-quote-text')
const randomQuoteAuthorID = document.getElementById('random-quote-author')

const colors = [
    ['#AB274F','#7C0902'],
    ['#FE6F5E','#BF4F51'],
    ['#660000','#FB607F'],
    ['#FFD700','#EDC9AF'],
    ['#FF7F50','#FF5800'],
    ['#AB4E52','#BC8F8F'],
    ['#A91101','#44362F'],
    ['#882D17','#55872f'],
    ['#FACA16','#FFFACD'],
    ['#12FaF0','#004225'],
    ['#66FF00','#FF9966']

]

function getRandomColor(arr){
    colorArr = arr[Math.floor(Math.random() * arr.length)]
    return colorArr[Math.floor(Math.random() * colorArr.length)]
}

async function getQuote(){
    const response = await fetch('https://api.quotable.io/quotes/random')
    let c1 = getRandomColor(colors)
    let c2 = getRandomColor(colors)
    randomQuoteGeneratorID.style.background = `linear-gradient(45deg, ${c1}, ${c2})`
    if(!response.ok){
        throw new Error('Network response was not ok')
    }
    const data = await response.json()
    const quoteText = data[0].content
    const quoteAuthor = data[0].author
    randomQuoteTextID.innerHTML = quoteText
    randomQuoteAuthorID.innerHTML = quoteAuthor
}
