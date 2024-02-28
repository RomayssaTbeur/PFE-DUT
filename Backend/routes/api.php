<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\StadiumController;
use App\Http\Controllers\EquipeController;
use App\Http\Controllers\MatcheController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register',[UserController::class,'register']);
Route::post('login',[UserController::class,'login']);
Route::get('listAdmin',[UserController::class,'list']);
Route::delete('deleteAdmin/{id}',[UserController::class,'deleteAdmin']);
Route::get('admin/{id}', [UserController::class, 'getAdmin']); 
Route::put('admin/{id}', [UserController::class, 'updateAdmin']); 

Route::post('addticket',[TicketController::class,'addTicket']);
Route::put('ticket/{id}', [TicketController::class, 'updateTicket']); 
Route::delete('deleteticket/{id}', [TicketController::class, 'deleteTicket']); 
Route::get('listticket',[TicketController::class,'list']);
Route::get('getticket/{id}', [TicketController::class, 'getTicket']);

Route::post('stadium',[StadiumController::class,'stadium']);
Route::get('listStadium',[StadiumController::class,'list']);
Route::put('stadium/{id}', [StadiumController::class, 'updateStadium']); 
Route::delete('stadium/{id}', [StadiumController::class, 'deleteStadium']); 
Route::get('stadium/{id}', [StadiumController::class, 'getStadium']); 

Route::post('equipe',[EquipeController::class,'equipe']);
Route::put('equipe/{id}', [EquipeController::class, 'updateEquipe']); 
Route::delete('equipe/{id}', [EquipeController::class, 'deleteEquipe']); 
Route::get('listTeam',[EquipeController::class,'list']);
Route::get('equipe/{id}', [EquipeController::class, 'getTeam']);

Route::post('matche',[MatcheController::class,'matche']);
Route::delete('deletematche/{id}', [MatcheController::class, 'deleteMatche']); 
Route::put('updatematche/{id}', [MatcheController::class, 'updateMatche']); 
Route::get('listmatch',[MatcheController::class,'list']);
Route::get('getmatch/{id}', [MatcheController::class, 'getMatch']);