<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Equipe;

class EquipeController extends Controller
{
    //*********************************************ADD EQUIPE ********************************************** */
    function equipe(Request $req)
    {
        $equipe = new Equipe;
        $equipe->name = $req->input('name');
        $equipe->image = $req->file('image')->store('tickets');
        $equipe->save();

        return $equipe;
    }


    //*********************************************UPDATE EQUIPE ********************************************** */

    
    function updateEquipe(Request $req, $id)
    {
        $equipe = Equipe::findOrFail($id);
    
       
        if ($req->has('name')) {
            $req->validate([
                'name' => 'required', 
            ]);
            $equipe->name = $req->input('name');
        }
    
        if ($req->hasFile('image')) {
            $equipe->image = $req->file('image')->store('tickets');
        }
    
        $equipe->save();
    
        return $equipe;
    }
    
 //*********************************************GET EQUIPE ********************************************** */



    public function getTeam($id)
    {
        $equipe = Equipe::findOrFail($id);

        return response()->json($equipe);
    }

    //*********************************************LIST EQUIPE ********************************************** */


    function list(){
        return equipe::all();
    }



    //*********************************************DELETE EQUIPE ********************************************** */


    function deleteEquipe($id)
    {
        $equipe = Equipe::findOrFail($id);
        $equipe->delete();

        return response()->json(['message' => 'Equipe deleted successfully']);
    }
}
