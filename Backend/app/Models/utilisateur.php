<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class utilisateur extends Model
{
    use HasFactory;
    protected $table = 'utilisateur'; 
    protected $primaryKey = 'id';
    protected $fillable = ['firstname', 'lastname', 'password', 'email', 'continent', 'gender'];

}
