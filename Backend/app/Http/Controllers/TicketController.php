<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;

class TicketController extends Controller
{
    //*********************************************ADD TICKET ********************************************** */

    function addTicket(Request $req){
        $ticket = new Ticket;
        $ticket->matche=$req->input('matche');
       // $ticket->name=$req->input('name');
       // $ticket->stadium_name=$req->input('stadium_name');
        $ticket->description=$req->input('description');
        $ticket->price=$req->input('price');
        $ticket->type=$req->input('type');
        $ticket->image=$req->file('image')->store('tickets');
        $ticket->save();

        return $ticket;
    }


    //*********************************************UPDATE TICKET ********************************************** */


    function updateTicket(Request $req, $id)
{
    $ticket = Ticket::findOrFail($id);
    if ($req->has('matche')) {
        $req->validate([
            'matche' => 'required', 
        ]);
        $ticket->matche=$req->input('matche');
    }
    /*if ($req->has('name')) {
        $req->validate([
            'name' => 'required', 
        ]);
        $ticket->name=$req->input('name');
    }
    if ($req->has('stadium_name')) {
        $req->validate([
            'stadium_name' => 'required', 
        ]);
        $ticket->stadium_name=$req->input('stadium_name');
    }*/
    if ($req->has('description')) {
        $req->validate([
            'description' => 'required', 
        ]);
        $ticket->description=$req->input('description');
    }
    if ($req->has('price')) {
        $req->validate([
            'price' => 'required', 
        ]);
        $ticket->price=$req->input('price');
    }
    if ($req->has('type')) {
        $req->validate([
            'type' => 'required', 
        ]);
        $ticket->type=$req->input('type');
    }
    if ($req->hasFile('image')) {
        $ticket->image=$req->file('image')->store('tickets');
    }
    $ticket->save();

    return $ticket;
}


    //*********************************************GET TICKET ********************************************** */


public function getTicket($id)
{
    $ticket = Ticket::findOrFail($id);

    return response()->json($ticket);
}



//*********************************************LIST TICKET ********************************************** */


function list(){
    return ticket::all();
}


//*********************************************DELETE TICKET ********************************************** */



function deleteTicket($id)
{
    $ticket = Ticket::findOrFail($id);
    $ticket->delete();

    return response()->json(['message' => 'Ticket deleted successfully']);
}
}
