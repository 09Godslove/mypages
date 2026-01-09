import { useEffect} from 'react';
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import { DashboardGridContent} from "./stockAnalysisDashboard"
import NumberStat from './numberStat';
import LineChartContent from './lineChartContent';
import NewsLinks from './newsLinks';
import NewsTextAnalysis from './newsSentimentAnalysis';

function DashboardGrid({stockData}: {stockData: any}) {
  useEffect( ()=> {
    GridStack.init({ cellHeight: 110 })
  }, [])

  return (
    <div>
      <div className="grid-stack">
        <div className="grid-stack-item"  gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <NumberStat 
            value= {stockData.basicinfo.marketCap} 
            label='Market Cap'
            center = {true}
            ></NumberStat>
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <NumberStat 
            value= {stockData.basicinfo.fullTimeEmployees} 
            label='Employees'
            center = {true}
            ></NumberStat>
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <NumberStat 
            value= {stockData.basicinfo.totalCash} 
            label='Total Revenue'
            center = {true}
            ></NumberStat>
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <NumberStat 
            value= {stockData.basicinfo.trailingEps} 
            label='Earnings per share'
            center = {true}
            ></NumberStat>
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item"  gs-w="10" gs-h="2.5">
          <DashboardGridContent className="grid-stack-item-content">
            <LineChartContent 
              priceHistory={stockData.PriceHistory}
            ></LineChartContent>
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item"  gs-w="2" gs-h="2">
          <DashboardGridContent className="grid-stack-item-content">
            <div style={{marginBottom: '10px'}}>Future Earnings Date</div>
            {stockData.futureEarningDates.map(
              (nextDate: string) =>(
                <div>{nextDate}</div>
              )
            )}
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item"  gs-w="5" gs-h="2">
          <DashboardGridContent className="grid-stack-item-content">
            <div>
              <NewsLinks
                news={stockData.newsArticles}
              ></NewsLinks>
            </div>
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item"  gs-w="4" gs-h="2">
          <DashboardGridContent className="grid-stack-item-content">
            <div>
              <NewsTextAnalysis
              positive={stockData.finalResult.data.sentiment.pos}
              negative={stockData.finalResult.data.sentiment.neg}
              neutral={stockData.finalResult.data.sentiment.neu}
              wordsAnalyzed={stockData.finalResult.metadata.TotalWords}
              sentAnalyzed={stockData.finalResult.metadata.TotalSentence}
              >
              </NewsTextAnalysis>
            </div>
          </DashboardGridContent>
        </div>
         <div className="grid-stack-item"  gs-w="3" gs-h="1.5">
          <img 
            src={`data:image/png;base64,${stockData.finalResult.data.EncodedWordcloud}`} 
            style={{height: '100%', width: '100%', borderRadius: '5px'}}
          />

        </div>
      </div>

    </div>
  )
}

export default DashboardGrid
