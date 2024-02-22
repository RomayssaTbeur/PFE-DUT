import { useState, useEffect } from 'react';
import PaymentPieChart from '../component/PaymentPieChart';
import TicketRevenueBarChart from '../component/TicketRevenueBarChart';
import ContinentBubble from '../component/ContinentBubble';
function Dashboard(){
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


   return(
    <>
         <div className="row">
           <div className="col-4">
             <h5>Revenue by Ticket Type </h5>
             <TicketRevenueBarChart />
           </div>
           <div className="col-4">
           <h5>Sales by continent</h5>
           <ContinentBubble />
            
           </div>

           
        </div>
        <div className="row">
        <div className="col-4">
        <h5>percentage of payement method</h5>
        <PaymentPieChart />
           </div>
        </div>
        

       
    </>
   )

}
export default Dashboard