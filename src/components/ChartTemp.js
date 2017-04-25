import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class ChartTemp extends Component {
  render() {
    const { temperature, hours } = this.props;
    
    const data = (canvas) => {
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, 450);
      gradient.addColorStop(0, 'rgba(228, 150,131, 1)');
      gradient.addColorStop(0.5, 'rgba(228, 150, 131, 0.5)');
      gradient.addColorStop(1, 'rgba(228, 150, 131, 0)');
      return {
        labels: hours,
        datasets: [{
          label: '°C',
          data: temperature,
          borderColor: '#E49683',
          backgroundColor: 'transparent',
          borderWidth: 1.5}]
      };
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        point: {
          radius: 0
        }
      },
      scales: {
        xAxes: [{
          display: true,
          ticks: {
            maxTicksLimit: 13
          },
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            display: false
          }
        }]
      }
    };
    return (
      <div className="chart">
        <h3>Temperatura 24h</h3>
        <Line 
          data={data}
          height={100}
          options={options}
        />
      </div>
    );
  }
}

export default ChartTemp;
