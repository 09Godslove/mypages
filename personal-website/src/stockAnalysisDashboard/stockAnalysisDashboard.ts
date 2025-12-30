
export async function analyzeStock(stockToAnalyze: string){
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
    return data
}