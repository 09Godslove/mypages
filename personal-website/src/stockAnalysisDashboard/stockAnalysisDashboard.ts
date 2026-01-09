import styled from 'styled-components'

export async function analyzeStock(stockToAnalyze: string){
    if (stockToAnalyze.length == 0){
        alert('Kindly input stock ticker to analyze')
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

export const PrimaryColor = '#366abf'
export const ThemeGreen = '#238a1a'
export const ThemeRed = '#c9352a'
export const ThemeYellow = '#e4fc28'

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
`
export const DashboardGridContent = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: 15px;
`
export const MarginSpace = styled.div`
    margin-bottom: 15px
`
export const DashboardTitle = styled.div`
    color: white;
    font-size: 20px;
    text-align: center;
    font-weight: Bolder
`
export const DashboardSubTitle = styled.div`
    color: white;
    font-size: 17px;
    text-align: center
`
export const LoadingOvalContainer = styled.div`
    width: fit-content;
    margin: 0 Auto
`
export const BackButton = styled.div`
    margin-left: 10px;
    width: fit-content;
    color: white;
    font-size: 17px;
    &:hover {
        cursor: pointer;
        font-weight: bold
    }
`
export const InputContainer = styled.div`
    width: fit-content;
    margin: 0 Auto;
    display: flex
`
export const AnalyzeInput = styled.input`
    padding: 10px;
    color: white;
    background: none;
    border: none;
    border-bottom: white solid 1px
`
export const AnalyzeButton = styled.button`
    margin-left: 15px;
    background: none;
    border: 1px solid white;
    border-radius: 8px;
    color: white;
    &:hover {
        cursor: pointer;
        background: white;
    }
`