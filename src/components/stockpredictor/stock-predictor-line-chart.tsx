'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { Stock, Attributes, TickerSymbol, Predictions } from '../../interfaces/interfaces';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function StockPredictorLineChart({ attributes } : Stock) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as "top"
      },
      title: {
        display: true,
        text: attributes?.company_name + " Predictions"
      }
    }
  }
  const data = {
    datasets: [
      {
        label: attributes?.ticker_symbol,
        data: attributes?.predictions,
        borderColor: 'rgb(46, 204, 113)',
        backgroundColor: 'rgba(46, 204, 113, 0.5)'
      }
    ]
  }
  return <Line options={options} data={data} height={100} width={50} />
}