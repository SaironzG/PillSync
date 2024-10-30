import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

import './AdherenceChart.scss';

// Register components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const AdherenceChart = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        label: 'Adherence (%)',
        data: [75, 85, 60, 90, 80, 95],
        backgroundColor: 'rgba(146, 230, 240, 0.3)',
        borderColor: '#4a90e2',
        pointBackgroundColor: '#a67d2f',
        pointBorderColor: '#ffffff',
        pointHoverBackgroundColor: '#4a90e2',
        pointHoverBorderColor: '#a67d2f',
        borderWidth: 3,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: '#4a90e2',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        padding: 10,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div className="adherence-chart">
      <h2>Adherence Over Time</h2>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
      <div className="chart-actions">
        <button className="btn-tooltip" title="View Details">
          📊 Details
        </button>
        <button className="btn-download" title="Download Chart">
          ⬇️ Download
        </button>
      </div>
    </div>
  );
};

export default AdherenceChart;
