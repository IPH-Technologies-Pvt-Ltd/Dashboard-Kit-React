import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import CardRow from './CardRow';

const FirstLineGraph = ({darkMode}) => {
  console.log("darkMode",darkMode)
  const [chartData, setChartData] = useState({
    series: [
      {
        data: [
          {
            x: 'Jan',
            y: 1292,
            goals: [
              {
                name: 'Expected',
                value: 1600,
                strokeHeight: 2,
                strokeColor: '#00E396	',
              
              },
            ],
          },
          {
            x: 'Feb',
            y: 4432,
            goals: [
              {
                name: 'Expected',
                value: 4700,
                strokeHeight: 2,
                strokeColor: '#00E396	',
              },
            ],
          },
          {
            x: 'Mar',
            y: 7132,
            goals: [
              {
                name: 'Expected',
                value: 7450,
                strokeHeight: 2,
                strokeColor: '#00E396	',
              }
            ]
          },
        
          {
            x: 'Apr',
            y: 5423,
            goals: [
              {
                name: 'Expected',
                value: 5750,
                strokeHeight: 2,
                strokeColor: '#00E396	',
              },
            ],
          },
          {
            x: 'May',
            y: 8133,
            goals: [
              {
                name: 'Expected',
                value: 8450,
                strokeHeight: 2,
                strokeColor: '#00E396	',
              }
            ]
          },
          {
            x: 'Jun',
            y: 6653,
            goals: [
              {
                name: 'Expected',
                value: 6850,
                strokeHeight: 2,
                strokeColor: '#00E396	',
              }
            ]
          },
          {
            x: 'Jul',
            y: 4432,
            goals: [
              {
                name: 'Expected',
                value: 4750,
                strokeHeight: 2,
                strokeColor: '#00E396	',
              },
            ],
          },
          {
            x: 'Aug',
            y: 8133,
            goals: [
              {
                name: 'Expected',
                value: 8450,
                strokeHeight: 2,
                strokeColor: '#00E396	',
              }
            ]
          },
          {
            x: 'Sep',
            y: 4432,
            goals: [
              {
                name: 'Expected',
                value: 4750,
                strokeHeight: 2,
                strokeColor: '#00E396	',
              },
            ],
          },
          {
            x: 'Oct',
            y: 7132,
            goals: [
              {
                name: 'Expected',
                value: 7450,
                strokeHeight: 2,
                strokeColor: '#00E396	',
              }
            ]
          },
          {
            x: 'Nov',
            y: 8133,
            goals: [
              {
                name: 'Expected',
                value: 8450,
                strokeHeight: 2,
                strokeColor: '#00E396	',
              }
            ]
          },
          {
            x: 'Dec',
            y: 7332,
            goals: [
              {
                name: 'Expected',
                value: 7650,
                strokeHeight: 2,
                strokeColor: '#00E396	',
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
          gradientToColors: [ '#00E396'],
          shadeIntensity: 1,
          type: 'vertical',
          opacityFrom: 0.6,
          opacityTo: 0.1,
          stops: [0, 100, 100, 100]
        },
      },
      colors: ['#00E396'],
      
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
       
      },
      grid: {
        show: false,
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
       <CardRow  darkMode={darkMode}/>
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={128} />
    </div>
  );
};
export default FirstLineGraph;
