import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const MarketAnalysis = ({ marketData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!marketData) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: ["Demand", "Supply"],
        datasets: [
          {
            data: [marketData.demand, marketData.supply],
            backgroundColor: "#93C5FD",
            borderRadius: 8,
            barThickness: 60
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: `Job Market Analysis`,
            color: "#1F2937",
            font: {
              size: 18,
              weight: "600"
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: "#374151",
              font: { size: 13 }
            }
          },
          y: {
            beginAtZero: true,
            grid: { color: "#E5E7EB" },
            ticks: {
              color: "#6B7280",
              font: { size: 12 }
            }
          }
        }
      }
    });
  }, [marketData]);

  if (!marketData) return null;

  return (
    <div className="market-analysis">
      <div className="market-grid">
        <div className="chart-wrapper">
          <canvas ref={chartRef}></canvas>
        </div>

        <div className="market-insight">
          <h4>Status: {marketData.status}</h4>
          <p>{marketData.insight}</p>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
