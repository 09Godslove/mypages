import { useState } from 'react'
import { analyzeStock, VerticalAlignContainer, VerticalAlignContent} from "./stockAnalysisDashboard"
import { Oval } from 'react-loader-spinner'
import './stockAnalysisDashboard.css'

function StockAnalysisDashboard() {
  const [finalData, setFinaldata] = useState<any>(null)
  const [stockSymbol, setStockSymbol] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [gotData, setGotData] = useState(false)

  function goBack(){
    setIsLoading(false)
    setGotData(false)
  }

  async function runStockAnalysis() {
    setIsLoading(true)
    const stockData = await analyzeStock(stockSymbol)
    if(stockData){
      setFinaldata(stockData)
      setGotData(true)
      setIsLoading(false)
    }else{
      goBack()
    }

  }

  if(gotData){
    return(
      <VerticalAlignContainer>
        <VerticalAlignContent>
          <div onClick={() => goBack()}>Back</div>
          <div>
            <div>{JSON.stringify(finalData)}</div>
          </div>
        </VerticalAlignContent>
      </VerticalAlignContainer>
    )
  }
  return (
    <VerticalAlignContainer>
      <VerticalAlignContent>
        <div>
            <div id="stock-analysis-dashboard-title">stock Analysis Dashboard</div>
            {isLoading ? (
              <div>
                <Oval
                height={80}
                width={80}
                color="#4fa94d"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
              </div>
            ) : (
              <div>
                 <div id="stock-analysis-dashboard-title">Enter the symbol of the stock you wish to analyze. E.g MSFT.</div>
            
                <input 
                  value={stockSymbol}
                  onChange={e => setStockSymbol(e.target.value)}
                ></input>
                <button className="stock-analysis-btn" onClick={() => runStockAnalysis()}>Analyze</button>
              </div>
            )}
           
            
        </div>
      </VerticalAlignContent>
    </VerticalAlignContainer>
  )
}

export default StockAnalysisDashboard
