import { useState } from 'react'
import { analyzeStock, VerticalAlignContainer, VerticalAlignContent, DashboardGridContainer, DashboardTitle, DashboardSubTitle, MarginSpace, BackButton, LoadingOvalContainer, InputContainer, AnalyzeInput, AnalyzeButton} from "./stockAnalysisDashboard"
import { Oval } from 'react-loader-spinner'
import './stockAnalysisDashboard.css'
import DashboardGrid from './dashboardGrid'

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
          <DashboardGridContainer>
            <DashboardTitle>
              {finalData.basicinfo.longName}
            </DashboardTitle>
            <DashboardSubTitle>
              {finalData.basicinfo.sector}
            </DashboardSubTitle>
            <MarginSpace></MarginSpace>
            <BackButton onClick={() => goBack()}>Back to search</BackButton>
            <div>
              <DashboardGrid stockData={finalData}>
                
              </DashboardGrid>
            </div>
          </DashboardGridContainer>

        </VerticalAlignContent>
      </VerticalAlignContainer>
    )
  }
  return (
    <VerticalAlignContainer>
      <VerticalAlignContent>
        <div>
            <DashboardTitle id="stock-analysis-dashboard-title">Stock Analysis Dashboard</DashboardTitle>
            {isLoading ? (
              <LoadingOvalContainer>
                <MarginSpace></MarginSpace>
                <Oval
                  height={80}
                  width={80}
                  color="white"
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="white"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              </LoadingOvalContainer>
            ) : (
              <div>
                <DashboardSubTitle id="stock-analysis-dashboard-title">Enter the symbol of the stock you wish to analyze. E.g MSFT.</DashboardSubTitle>
                <MarginSpace></MarginSpace>
                <InputContainer>
                  <AnalyzeInput 
                    value={stockSymbol}
                    onChange={e => setStockSymbol(e.target.value)}
                  ></AnalyzeInput>
                  <AnalyzeButton className="stock-analysis-btn" onClick={() => runStockAnalysis()}>Analyze</AnalyzeButton>
                </InputContainer>
              </div>
            )}
           
            
        </div>
      </VerticalAlignContent>
    </VerticalAlignContainer>
  )
}

export default StockAnalysisDashboard
