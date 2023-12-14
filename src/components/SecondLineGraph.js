import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import CardRow from './CardRow';
import SecondCardRow from './SecondCardRow';

const SecondLineGraph = ({darkMode}) => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Actual',
        data: [
          {
            x: 'Jan',
            y: 1292,
            goals: [
              {
                name: 'Expected',
                value: 1500,
                strokeHeight: 3,
                strokeColor: '#FFBF00	',
                
              },
            ],
          },
          {
            x: 'Feb',
            y: 4432,
            goals: [
              {
                name: 'Expected',
                value: 4600,
                strokeHeight: 2,
                strokeColor: '#FFBF00	',
              },
            ],
          },
          {
            x: 'Mar',
            y: 5423,
            goals: [
              {
                name: 'Expected',
                value: 5000,
                strokeHeight: 3,
                strokeColor: '#FFBF00	',
              },
            ],
          },
          {
            x: 'Apr',
            y: 9500,
            goals: [
              {
                name: 'Expected',
                value: 9800,
                strokeHeight: 3,
                strokeColor: '#FFBF00	',
              }
            ]
          },
          {
            x: 'May',
            y: 8133,
            goals: [
              {
                name: 'Expected',
                value: 8400,
                strokeHeight: 3,
                strokeColor: '#FFBF00	',
              }
            ]
          },
          {
            x: 'Jun',
            y: 7132,
            goals: [
              {
                name: 'Expected',
                value: 7400,
                strokeHeight: 3,
                strokeColor: '#FFBF00	',
              }
            ]
          },
          {
            x: 'Jul',
            y: 6500,
            goals: [
              {
                name: 'Expected',
                value: 6800,
                strokeHeight: 3,
                strokeColor: '#FFBF00	',
              }
            ]
          },
        ],
      },
    ],
    options: {
      chart: {
        height: 128,
        type: 'bar',
        toolbar: {
          show:false
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '100%',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: [ '#FFBF00'],
          shadeIntensity: 1,
          type: 'vertical',
          opacityFrom: 0.6,
          opacityTo: 0.1,
          stops: [0, 100, 100, 100]
        },
      },
      colors: ['#fce8c1'],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
          fillColors: ['#00E396', '#775DD0'],
        },
      },
      grid: {
        show: false, 
        xaxis:{
          line:{
            show:false
          }
        }
      },
      markers: {
        show: false, 
      },
      xaxis: {
        axisBorder: {
          show: false, 
        },
        labels: {
          style: {
            colors: darkMode ? 'green':'#000000', 
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: darkMode ? 'green':'#000000', 
          },
        },
      },
    },
  });

  return (
    <div id="chart" className={`p-2${darkMode ? 'light-mode' : 'dark-mode'}`}>
       <SecondCardRow  darkMode={darkMode}/> 
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={128} />
    </div>
  );
};

export default SecondLineGraph;
