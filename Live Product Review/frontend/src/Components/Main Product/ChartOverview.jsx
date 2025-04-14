import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function ChartOverview({ data, showChart }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    console.log("Rendering ChartOverview");
    if (!chartRef.current) {
      console.warn("Canvas ref is null!");
      return;
    }

    if (!data || !data.reviews || !Array.isArray(data.reviews)) {
      console.warn("Invalid or missing data:", data);
      return;
    }

    if (!showChart) {
      console.log("Chart not visible, skipping render.");
      return;
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) {
      console.warn("Failed to get 2D context from canvas.");
      return;
    }

    // Destroy any previous chart instance
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create gradients
    const makeGradient = (start, end) => {
      const gradient = ctx.createLinearGradient(0, 0, 400, 400);
      gradient.addColorStop(0, start);
      gradient.addColorStop(1, end);
      return gradient;
    };

    const gradients = [
      makeGradient('#92C5F9', '#4394E5'),
      makeGradient('#4394E5', '#0066CC'),
      makeGradient('#0066CC', '#004D99'),
      makeGradient('#004D99', '#003366'),
      makeGradient('#003366', '#001f33'),
    ];

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

    chartInstanceRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          label: `Out of ${data.reviews.length} People`,
          data: filteredStars,
          backgroundColor: gradients.slice(0, filteredStars.length),
          hoverOffset: 4,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [data, showChart]);

  return (
    <div className="overviewCOntainer flex">
      <div className='flex' style={{ width: '100%', height: '400px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

export default ChartOverview;
