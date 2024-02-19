<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;

class TicketController extends Controller
{
    //

    function addTicket(Request $req){
        $ticket = new Ticket;
        $ticket->matche=$req->input('matche');
        $ticket->name=$req->input('name');
        $ticket->stadium_name=$req->input('stadium_name');
        $ticket->description=$req->input('description');
        $ticket->price=$req->input('price');
        $ticket->type=$req->input('type');
        $ticket->image=$req->file('image')->store('tickets');
        $ticket->save();

        return $ticket;
    }
    function list(){
        return ticket::all();
    }

    function updateTicket(Request $req, $id)
{
    $ticket = Ticket::findOrFail($id);
    $ticket->matche=$req->input('matche');
    $ticket->name=$req->input('name');
    $ticket->stadium_name=$req->input('stadium_name');
    $ticket->description=$req->input('description');
    $ticket->price=$req->input('price');
    $ticket->type=$req->input('type');
    $ticket->image=$req->file('image')->store('tickets');
    $ticket->save();

    return $ticket;
}

function deleteTicket($id)
{
    $ticket = Ticket::findOrFail($id);
    $ticket->delete();

    return response()->json(['message' => 'Ticket deleted successfully']);
}
}
