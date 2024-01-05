import React from 'react'
import { Line } from 'react-chartjs-2'
import { useState, useEffect } from 'react';
import { Chart as ChartJS} from 'chart.js/auto';
import { LinePlot } from '@mui/x-charts/LineChart';

function LineGraph({username}) {

  const sugarLevel =[];
  const sugarDate = [];

  const [ userData, setData ] = useState({
    labels: '',
    datasets: [],
  }) 


  useEffect(() => {
    fetch('http://localhost:3000/api/homepage/bloodsugar')
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          if (Object.hasOwn(data[i],'bloodSugar') && data[i].username===username) {
            sugarLevel.push(data[i].bloodSugar)
            const dateObject = new Date(data[i].date);
            const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
            const formattedDate = dateObject.toLocaleString('en-US', options)
            sugarDate.push(formattedDate)
          }
        }
        const chartData = {
          labels: sugarDate,
          datasets: [
            {
              label: 'Blood Sugar Level Today',
              data: sugarLevel,
            }
          ]
        }
        // const chartData = {
          
        // }
        setData(chartData)
      })
    })
    
  return (
    // <div class="sugGraph" style={{width: 700, height: 600}} >
    <div class="sugGraph">
      <Line data={userData} />
      {/* <LinePlot data={userData}/>  */}
    </div>
  )
}

export default LineGraph



