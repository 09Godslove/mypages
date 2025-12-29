const stockToAnalyzeId = 'stock-analysis-input'
const stockAnalyzedData = document.getElementById('stock-analysis-dashboard-data')

async function analyzeStock(){
    const stockToAnalyze = document.getElementById(stockToAnalyzeId).value
    if (stockToAnalyze.length == 0){
        alert('Kingdly imput stock ticker to analyze')
        return
    }
    const url = 'http://127.0.0.1:5000/analyze-stock/' + stockToAnalyze
    const response = await fetch(url)
    if(!response.ok){
        alert('Something went wrong with analysis')
    }
    const data = await response.json()
    console.log(data)
    stockAnalyzedData.innerHTML = JSON.stringify(data)

}