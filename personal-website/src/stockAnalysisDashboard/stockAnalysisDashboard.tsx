import { useState } from 'react'
import { analyzeStock } from "./stockAnalysisDashboard"

function StockAnalysisDashboard() {
  const [finalData, setFinaldata] = useState<any>(null)
  const [stockSymbol, setStockSymbol] = useState<any>(null)

  async function runStockAnalysis() {
    const stockData = await analyzeStock(stockSymbol)
    setFinaldata(stockData)
  }

  return (
    <>
        <div>
            <div id="stock-analysis-dashboard-title">stock Analysis Dashboard</div>
            <div id="stock-analysis-dashboard-title">Enter the symbol of the stock you wish to analyze. E.g MSFT.</div>
            <input 
              value={stockSymbol}
              onChange={e => setStockSymbol(e.target.value)}
            ></input>
            <button className="stock-analysis-btn" onClick={() => runStockAnalysis()}>Analyze</button>
            <div>{JSON.stringify(finalData)}</div>
        </div>
    </>
  )
}

export default StockAnalysisDashboard
