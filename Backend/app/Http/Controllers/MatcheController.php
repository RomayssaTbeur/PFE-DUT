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
        $matche->date_match = $req->input('date_match ');

        $matche->save();
        
        return $matche;
}
function updateMatche(Request $req, $id)
{
        $matche = Matche::findOrFail($id);
        $matche->equipe_locale = $req->input('equipe_locale');
        $matche->equipe_visiteur = $req->input('equipe_visiteur');
        $matche->stadium= $req->input('stadium');
        $matche->date_match = $req->input('date_match ');

    $matche->save();

    return $matche;
}

function deleteMatche($id)
{
    $equipe = Matche::findOrFail($id);
    $equipe->delete();

    return response()->json(['message' => 'Matche deleted successfully']);
}

}
