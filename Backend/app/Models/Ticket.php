<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    public function Matche(){
        return $this->belongsTo(Stadium::class,'id_stad');
        
        
    }
}
