// import { useState } from 'react'

function StockAnalysisDashboard() {
  // const [count, setCount] = useState(0)

  async function runStockAnalysis() {
    alert('runner')
  }

  return (
    <>
        <div>
            <div id="stock-analysis-dashboard-title">stock Analysis Dashboard</div>
            <div id="stock-analysis-dashboard-title">Enter the symbol of the stock you wish to analyze. E.g MSFT.</div>
            <input type="text" className="stock-anaysis-input" id="stock-analysis-input"></input>
            <button className="stock-analysis-btn" onClick={() => runStockAnalysis()}>Analyze</button>
            <div id="stock-analysis-dashboard-data"></div>
        </div>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default StockAnalysisDashboard
