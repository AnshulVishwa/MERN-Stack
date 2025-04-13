import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function ChartOverview({data , showChart}) {
  const chartRef = useRef(null); 
  let myChart = null;

  useEffect(() => {
  const ctx = chartRef.current.getContext('2d');

  // Create gradients
  const gradient1 = ctx.createLinearGradient(0, 0, 400, 400);
  gradient1.addColorStop(0, '#92C5F9');
  gradient1.addColorStop(1, '#4394E5');

  const gradient2 = ctx.createLinearGradient(0, 0, 400, 400);
  gradient2.addColorStop(0, '#4394E5');
  gradient2.addColorStop(1, '#0066CC');

  const gradient3 = ctx.createLinearGradient(0, 0, 400, 400);
  gradient3.addColorStop(0, '#0066CC');
  gradient3.addColorStop(1, '#004D99');

  const gradient4 = ctx.createLinearGradient(0, 0, 400, 400);
  gradient4.addColorStop(0, '#004D99');
  gradient4.addColorStop(1, '#003366');

  const gradient5 = ctx.createLinearGradient(0, 0, 400, 400);
  gradient5.addColorStop(0, '#003366');
  gradient5.addColorStop(1, '#001f33');

  if ((myChart || !showChart) && data) {
    myChart.destroy();
  }
  const stars = [0, 0, 0, 0, 0];
data.reviews.forEach((v) => stars[v.stars - 1]++);

const labels = [];
const filteredStars = [];

stars.forEach((v, i) => {
  if (v !== 0) {
    labels.push(`${i + 1} Star`);
    filteredStars.push(v);
  }
});

myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: labels,
    datasets: [
      {
        label: `Out of ${data.reviews.length} People`,
        data: filteredStars,
        backgroundColor: [
          gradient1,
          gradient2,
          gradient3,
          gradient4,
          gradient5,
        ],
        hoverOffset: 4,
      },
    ],
  },
});


  return () => {
    myChart.destroy();
  };
}, [showChart]);

  return (
    <div className="overviewCOntainer flex">
      <div className='flex' style={{ width: '50%', height: '60%' }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

export default ChartOverview;
