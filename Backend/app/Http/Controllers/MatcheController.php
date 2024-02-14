<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Matche;

class MatcheController extends Controller
{
    function matche(Request $req){
        $matche = new Matche;
        $matche->equipe_locale = $req->input('equipe_locale');
        $matche->equipe_visiteur = $req->input('equipe_visiteur');
        $matche->stadium= $req->input('stadium');
        $matche->date_match  = $req->input('date_match ');



         
        $matche->save();
        
        return $matche;
}
}
