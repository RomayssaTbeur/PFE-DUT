<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Equipe;

class EquipeController extends Controller
{
    //
    function equipe(Request $req){
        $equipe = new Equipe;
        $equipe->name = $req->input('name');
        $equipe->image = $req->file('image')->store('tickets');
        $equipe->save();
        
        return $equipe;
}
}