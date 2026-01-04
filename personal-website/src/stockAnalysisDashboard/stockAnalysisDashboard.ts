import styled from 'styled-components'

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

export const VerticalAlignContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: table;
`
export const VerticalAlignContent = styled.div`
    display: table-cell;
    vertical-align: middle
`
export const DashboardGridContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    border: 2px solid red
`
export const DashboardGridContent = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: 15px;
`