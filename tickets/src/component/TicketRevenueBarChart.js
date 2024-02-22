import Chart from "react-apexcharts";
import { useState } from "react";
function TicketRevenueBarChart(){
const [data,setData]=useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['week 1', 'week 2','week 3', 'week 4', 'week 5', 'week 6', 'week 7', 'week 8', 'week 9']
      },
      colors:['#664499','#d5a0bb'],
      
      
      
    },
    series: [
      {
        name: "vip",
        data: [30, 40, 30, 20, 40, 10, 70, 50]
      },
      {
        name: "normal",
        data: [50, 70, 45, 50, 49, 60, 80, 91]
      }
    ]
  }
)
return(
    <>
      
            <Chart
              options={data.options}
              series={data.series}
              type="bar"
              width="500"
            />

            <apexchart
             width="380" 
             type="donut"
             options={data.options} 
             series={data.series}
            />
      
    </>
)

}
export default TicketRevenueBarChart