<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Payment;

class PaymentController extends Controller
{
      //*********************************************CREATE PAYMENT ********************************************** */

     function payment(Request $req)
    {
        $payment = new Payment;
        $payment ->ticket_id = $req->input('ticket_id');
        $payment ->amount = $req->input('amount');
        $payment ->payment_date = $req->input('payment_date');
        $payment ->payment_method = $req->input('payment_method');
        $payment ->transaction_id = $req->input('transaction_id');
        $payment->save();

        return $payment;
    }

   //*********************************************LIST PAYMENT ********************************************** */
    public function listPayment()
    {
        $payments = Payment::all();

        return response()->json($payments);
    }
   //*********************************************GET PAYMENT ********************************************** */

   
    public function getPayment($id)
    {
        $payment = Payment::findOrFail($id);

        return response()->json($payment);
    }

  
   //*********************************************DELETE PAYMENT ********************************************** */

    
    public function deletePayment($id)
    {
        $payment = Payment::findOrFail($id);
        $payment->delete();

        return response()->json(['message' => 'Payment deleted successfully']);
    }
}
