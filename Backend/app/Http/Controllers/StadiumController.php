<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Stadium;

class StadiumController extends Controller
{

 //*********************************************ADD STADIUM ********************************************** */

    function stadium(Request $req){
        $stadium = new Stadium;
        $stadium->name = $req->input('name');
        $stadium->address = $req->input('address');
        $stadium->save();
        
        return $stadium;
}

 //*********************************************UPDATE STADIUM ********************************************** */


function updateStadium(Request $req, $id)
{
    $stadium = Stadium::findOrFail($id);
    if ($req->has('name')) {
        $req->validate([
            'name' => 'required', 
        ]);
        $stadium->name = $req->input('name');
    }
    if ($req->has('address')) {
        $req->validate([
            'address' => 'required', 
        ]);
        $stadium->address = $req->input('address');
    }
    $stadium->save();

    return $stadium;
}


 //*********************************************GET STADIUM ********************************************** */


public function getStadium($id)
{
    $stadium = Stadium::findOrFail($id);

    return response()->json($stadium);
}


 //*********************************************LIST STADIUM ********************************************** */


function list(){
    return stadium::all();
}


 //*********************************************DELETE STADIUM ********************************************** */



function deleteStadium($id)
{
    $stadium = Stadium::findOrFail($id);
    $stadium->delete();

    return response()->json(['message' => 'Stadium deleted successfully']);
}
}