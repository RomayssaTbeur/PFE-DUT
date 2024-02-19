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

Route::post('addticket',[TicketController::class,'addTicket']);
Route::put('ticket/{id}', [TicketController::class, 'updateTicket']); 
Route::delete('ticket/{id}', [TicketController::class, 'deleteTicket']); 
Route::get('list',[TicketController::class,'list']);

Route::post('stadium',[StadiumController::class,'stadium']);
Route::put('stadium/{id}', [StadiumController::class, 'updateStadium']); 
Route::delete('stadium/{id}', [StadiumController::class, 'deleteStadium']); 

Route::post('equipe',[EquipeController::class,'equipe']);
Route::put('equipe/{id}', [EquipeController::class, 'updateEquipe']); 
Route::delete('equipe/{id}', [EquipeController::class, 'deleteEquipe']); 
Route::get('listTeam',[EquipeController::class,'list']);

Route::post('matche',[MatcheController::class,'matche']);
Route::delete('matche/{id}', [MatcheController::class, 'deleteMatche']); 
Route::put('matche/{id}', [MatcheController::class, 'updateMatche']); 
