<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Stadium;

class StadiumController extends Controller
{
    function stadium(Request $req){
        $stadium = new Stadium;
        $stadium->name = $req->input('name');
        $stadium->address = $req->input('address');
        $stadium->save();
        
        return $stadium;
}
}