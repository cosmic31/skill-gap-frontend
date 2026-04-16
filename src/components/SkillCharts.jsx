import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SkillCharts = ({ extractedSkills, missingSkills }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const extractedCount = extractedSkills.length;
    const missingCount = missingSkills.length;
    const total = extractedCount + missingCount;

    const extractedPercent = total
      ? ((extractedCount / total) * 100).toFixed(1)
      : 0;

    const missingPercent = total
      ? ((missingCount / total) * 100).toFixed(1)
      : 0;

    chartInstance.current = new Chart(chartRef.current, {
      type: "pie",
      data: {
        labels: [
          `Extracted Skills (${extractedPercent}%)`,
          `Missing Skills (${missingPercent}%)`
        ],
        datasets: [
          {
            data: [extractedCount, missingCount],
            backgroundColor: ["#4CAF50", "#F87171"],
            borderColor: "#FFFFFF",
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: "#374151",
              font: {
                size: 13,
                weight: "500"
              }
            }
          },
          title: {
            display: true,
            text: "Skill Distribution",
            color: "#1F2937",
            font: {
              size: 18,
              weight: "600"
            }
          }
        }
      }
    });
  }, [extractedSkills, missingSkills]);

  return (
    <div className="skill-charts">
      <div className="chart-wrapper" style={{ height: "300px" }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default SkillCharts;
