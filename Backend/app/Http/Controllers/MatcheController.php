<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Matche;

class MatcheController extends Controller
{

        //*********************************************ADD MATCHE ********************************************** */

    function matche(Request $req){
        $matche = new Matche;
        $matche->equipe_locale = $req->input('equipe_locale');
        $matche->equipe_visiteur = $req->input('equipe_visiteur');
        $matche->stadium= $req->input('stadium');
        $matche->date_matche= $req->input('date_matche');
        $matche->time_matche= $req->input('time_matche');

        $matche->save();
        
        return $matche;
}


        //*********************************************UPDATE MATCHE ********************************************** */


function updateMatche(Request $req, $id)
{
        $matche = Matche::findOrFail($id);
        if ($req->has('equipe_locale')) {
            $req->validate([
                'equipe_locale' => 'required', 
            ]);
            $matche->equipe_locale = $req->input('equipe_locale');
        }
        if ($req->has('equipe_visiteur')) {
            $req->validate([
                'equipe_visiteur' => 'required', 
            ]);
            $matche->equipe_visiteur = $req->input('equipe_visiteur');
        }

        if ($req->has('stadium')) {
            $req->validate([
                'stadium' => 'required', 
            ]);
            $matche->stadium= $req->input('stadium');
        }
        
        if ($req->has('date_matche')) {
            $req->validate([
                'date_matche' => 'required', 
            ]);
            $matche->date_matche= $req->input('date_matche');
        }

        if ($req->has('time_matche')) {
            $req->validate([
                'time_matche' => 'required', 
            ]);
            $matche->time_matche= $req->input('time_matche');
        }

    $matche->save();

    return $matche;
}


   //*********************************************GET MATCHE ********************************************** */


public function getMatch($id)
{
    $matche = Matche::findOrFail($id);

    return response()->json($matche);
}

  //*********************************************ADD MATCHE ********************************************** */


function list(){
    return matche::all();
}

//*********************************************DELETE MATCHE ********************************************** */


function deleteMatche($id)
{
    $equipe = Matche::findOrFail($id);
    $equipe->delete();

    return response()->json(['message' => 'Matche deleted successfully']);
}

}
