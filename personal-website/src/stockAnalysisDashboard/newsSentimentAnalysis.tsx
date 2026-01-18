import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import styled from "styled-components";
import NumberStat from "./numberStat";
import { ThemeGreen, ThemeRed, ThemeYellow } from "./stockAnalysisDashboard";

ChartJS.register(ArcElement, Tooltip);

type SentimentDonutProps = {
  positive: number;
  neutral: number;
  negative: number;
  sentAnalyzed: number;
  wordsAnalyzed: number;
};
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Flex = styled.div`
  width: 40%;
`

const Legend = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-size: 7px;
  white-space: nowrap;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Dot = styled.span<{ color: string }>`
  width: 12px;
  height: 8px;
  background-color: ${({ color }) => color};
`;
const Right = styled.div`
`

function NewsTextAnalysis({
  positive,
  neutral,
  negative,
  sentAnalyzed,
  wordsAnalyzed,
}: SentimentDonutProps) {
  const data = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        data: [positive, neutral, negative],
        backgroundColor: [
          ThemeGreen, // green
          ThemeYellow, // yellow
          ThemeRed, // red
        ],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (ctx: any) =>
            `${ctx.label}: ${ctx.raw.toLocaleString()}`,
        },
      },
    },
  };

  return (
    <Row>
      <Flex>
        <div>
          <Doughnut data={data} options={options} />
        </div>
        <Legend>
          <LegendItem>
            <Dot color={ThemeGreen} />
            <span>Positive</span>
          </LegendItem>

          <LegendItem>
            <Dot color={ThemeYellow} />
            <span>Neutral</span>
          </LegendItem>

          <LegendItem>
            <Dot color={ThemeRed} />
            <span>Negative</span>
          </LegendItem>
        </Legend>
      </Flex>
      <Right>
        News Text Analysis
        <NumberStat
          value={sentAnalyzed}
          label="Sentences Analyzed"
          center
        >
        </NumberStat>
        <NumberStat
          value={wordsAnalyzed}
          label="Words Analyzed"
          center
        ></NumberStat>
      </Right>
    </Row>
  );
}

export default NewsTextAnalysis;
