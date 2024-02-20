<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Stadium;

class StadiumController extends Controller
{
    function list(){
        return Stadium::all();
    }

    function stadium(Request $req){
        $stadium = new Stadium;
        $stadium->name = $req->input('name');
        $stadium->address = $req->input('address');
        $stadium->save();
        
        return $stadium;
}

function updateStadium(Request $req, $id)
{
    $stadium = Stadium::findOrFail($id);
    $stadium->name = $req->input('name');
    $stadium->address = $req->input('address');
    $stadium->save();

    return $stadium;
}



function deleteStadium($id)
{
    $stadium = Stadium::findOrFail($id);
    $stadium->delete();

    return response()->json(['message' => 'Stadium deleted successfully']);
}

function getStadium($id){
    return Stadium::find($id);
}
}