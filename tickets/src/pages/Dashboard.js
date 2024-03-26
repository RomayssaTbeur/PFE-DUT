import { useState, useEffect } from 'react';
import PaymentPieChart from '../component/PaymentPieChart';
import TicketRevenueBarChart from '../component/TicketRevenueBarChart';
import ContinentBubble from '../component/ContinentBubble';
function Dashboard() {
  /*const [paymentData, setPaymentData] = useState({
      method:['vip','normal'],
      percentage:[50,80,30,40]
  });
  
  function fetchPayement(){
      fetch('/api/payment-data')
        .then(response => {
          return response.json();
        })
        .then(paymentData => {
          setPaymentData(paymentData);
        });
  }
  useEffect(() => {
      fetchPayement();
    }, []);*/


  return (
    <>
      <div class="container">
        <h1>Dashboard User</h1>

        <div class="content">
          <div class="section earning">
            <h2>Users</h2>
            <p>$ 628</p>
          </div>
          <div class="section share">
            <h2>Income</h2>
            <p>2434</p>
          </div>
          <div class="section followers">
            <h2>ticket reserve</h2>
            <p>201</p>
          </div>

        </div>
      </div>

      <div>
        <h5>Revenue by Ticket Type </h5>
        <TicketRevenueBarChart />
      </div>


      <div className="row" >
        <div className="col-4 chart" >
          <h5>Sales by continent</h5>
          <ContinentBubble />
        </div>
        
        <div className="col-4 chart" >
          <h5>percentage of payement method</h5>
          <PaymentPieChart />
        </div>

      </div>






    </>
  )

}
export default Dashboard