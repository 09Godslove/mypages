import React, { useEffect} from 'react';
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import { DashboardGridContent} from "./stockAnalysisDashboard"

function DashboardGrid({stockData}: {stockData: any}) {
  useEffect( ()=> {
    GridStack.init()
  })

  return (
    <div>
      <div className="grid-stack">
        <div className="grid-stack-item"  gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <div>{stockData.basicinfo.marketCap}</div>
            <div>Market Cap</div>
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <div>{stockData.basicinfo.fullTimeEmployees}</div>
            <div>Employees</div>
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <div>{stockData.basicinfo.totalCash}</div>
            <div>Total Revenue</div>
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <div>{stockData.basicinfo.trailingEps}</div>
            <div>Earnings per share</div>
          </DashboardGridContent>
        </div>
      </div>
    </div>
  )
}

export default DashboardGrid
