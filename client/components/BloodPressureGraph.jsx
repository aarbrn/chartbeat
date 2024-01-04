import React from 'react'
import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

//setter function and initializing state
function BloodPressureGraph({username}) {
  const [userData, setData] = useState({
    labels: "",
    datasets: [],
  });

  //initializing variables as empty arrays for tracking data
  const systolicPressures = [];
  const diabolicPressures = [];
  const bpDates = [];
  //make an API call
  useEffect(() => {
    fetch("http://localhost:3000/api/homepage/bloodsugar")
      .then((response) => response.json())
      .then((data) => {
        //loops through JSON data and checks if data[i] has a sysPressure element and that the username property matches the username parameter
        for (let i = 0; i < data.length; i++) {
          if (
            Object.hasOwn(data[i], "sysPressure") &&
            data[i].username === username
          ) {
            //push information to respective arrays on lines 13 and 14
            systolicPressures.push(data[i].sysPressure);
            diabolicPressures.push(data[i].diaPressure);
            // Format the date and push it to the 'bpDates' array
            const dateObject = new Date(data[i].date);
            const options = {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            };
            const formattedDate = dateObject.toLocaleString("en-Us", options);
            bpDates.push(formattedDate);
          }
        }
        // Create chartData object with labels and datasets properties
        const chartData = {
          labels: bpDates,
          datasets: [
            { label: "Systolic Blood Pressure", data: systolicPressures },
            {
              label: "Diabolic Blood Pressure",
              data: diabolicPressures,
            },
          ],
        };
        setData(chartData);
      });
  });

  //renders a line chart based on the data above using Chart.js
  return (
    <div style={{ width: 700 }}>
      <Line data={userData} />
    </div>
  );
}

export default BloodPressureGraph
