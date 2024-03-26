<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FinalTable;

class FinalTableController extends Controller
{
    
    function Final(Request $req){
        $final = new FinalTable;
        $final->equipe_locale = $req->input('IdTeam1');
        $final->equipe_visiteur = $req->input('IdTeam2');
        $final->step= $req->input('step');
        

        $final->save();
        
        return $final;
}
}
