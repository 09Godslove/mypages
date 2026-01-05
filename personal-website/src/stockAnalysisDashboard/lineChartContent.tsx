import { Line } from "react-chartjs-2"
import { PrimaryColor } from "./stockAnalysisDashboard"

function LineChartContent({priceHistory}:{priceHistory: any}) {
    const lineChartData = {
        labels: priceHistory.Date,
        datasets: [
            {   data: priceHistory.Price,
                borderColor: PrimaryColor,
                borderWidth: 2,
                pointRadius: 0
            }
        ]
    }
  return (
    <Line
        key={priceHistory.Date?.length} 
        data = {lineChartData}
        options={{
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: "Historical Stock Data"
                },
                legend: {
                    display: false
                }
            }
        }}
    />

  )
}

export default LineChartContent
