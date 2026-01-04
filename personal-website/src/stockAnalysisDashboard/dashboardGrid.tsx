import { useEffect} from 'react';
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import { DashboardGridContent} from "./stockAnalysisDashboard"
import NumberStat from './numberStat';

function DashboardGrid({stockData}: {stockData: any}) {
  useEffect( ()=> {
    GridStack.init()
  })

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
            ></NumberStat>
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <NumberStat 
            value= {stockData.basicinfo.totalCash} 
            label='Total Revenue'
            ></NumberStat>
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <NumberStat 
            value= {stockData.basicinfo.trailingEps} 
            label='Earnings per share'
            ></NumberStat>
          </DashboardGridContent>
        </div>
      </div>
    </div>
  )
}

export default DashboardGrid
