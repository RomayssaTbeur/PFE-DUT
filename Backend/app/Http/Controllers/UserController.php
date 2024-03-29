<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    function register(Request $req){
        $user = new User;
        $user->name=$req->input('name');
        $user->email=$req->input('email');
        $user->password=Hash::make($req->input('password'));
        $user->save();
        return $user;
    }

    function login(Request $req){
        $user = User::Where('email',$req->email)->first();
        if(!$user || !Hash::check($req->password,$user->password)){
            return["error"=>"Email or Password is not matched"];
        }
        return $user;
    }

    function list(){
        return User::all();
    }

    function deleteAdmin($id)
{
    $admin = User::findOrFail($id);
    $admin->delete();

    return response()->json(['message' => 'admin deleted successfully']);
}

function updateAdmin(Request $req, $id)
{
    $admin = User::findOrFail($id);
    $admin->name = $req->input('name');
    $admin->email = $req->input('email');
    $admin->save();

    return $admin;
}

function getAdmin($id){
    return User::find($id);
}
    
}
