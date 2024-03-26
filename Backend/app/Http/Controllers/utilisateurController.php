<?php

namespace App\Http\Controllers;
use App\Models\Utilisateur;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class utilisateurController extends Controller
{
    function register(Request $req){
        $utilisateur = new Utilisateur;
        $utilisateur->firstname=$req->input('firstname');
        $utilisateur->lastname=$req->input('lastname');
        $utilisateur->password=Hash::make($req->input('password'));
        $utilisateur->email=$req->input('email');
        $utilisateur->continent=$req->input('continent');
        $utilisateur->gender=$req->input('gender');

        $utilisateur->save();
        return $utilisateur;
    }
}
