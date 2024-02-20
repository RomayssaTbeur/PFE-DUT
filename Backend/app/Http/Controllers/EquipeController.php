<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Equipe;

class EquipeController extends Controller
{
    //
    function equipe(Request $req)
    {
        $equipe = new Equipe;
        $equipe->name = $req->input('name');
        $equipe->image = $req->file('image')->store('tickets');
        $equipe->save();

        return $equipe;
    }

    function updateEquipe(Request $req, $id)
    {
        $equipe = Equipe::findOrFail($id);
        $equipe->name = $req->input('name');
        if ($req->hasFile('image')) {
            $equipe->image = $req->file('image')->store('tickets');
        }
        $equipe->save();

        return $equipe;
    }

    function deleteEquipe($id)
    {
        $equipe = Equipe::findOrFail($id);
        $equipe->delete();

        return response()->json(['message' => 'Equipe deleted successfully']);
    }
    
    function list(){
        return Equipe::all();
    }

    function getTeam($id){
        return Equipe::find($id);
    }
}
