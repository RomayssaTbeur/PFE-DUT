<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    public function Matche(){
        return $this->belongsTo(Stadium::class,'id_stad');
        return $this->belongsTo(Matche::class,'id_match');
        
    }
    protected $primaryKey = 'id_ticket';
}
