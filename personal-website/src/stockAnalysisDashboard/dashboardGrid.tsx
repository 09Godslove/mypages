import { useEffect} from 'react';
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import { DashboardGridContent} from "./stockAnalysisDashboard"
import NumberStat from './numberStat';
import LineChartContent from './lineChartContent';

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
        <div className="grid-stack-item"  gs-w="10" gs-h="3">
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
      </div>

    </div>
  )
}

export default DashboardGrid
