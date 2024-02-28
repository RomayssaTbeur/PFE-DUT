<?php

namespace App\Models;
use App\Models\Matche;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_ticket';
    protected $with =['matche'];

    public function matche(){
        //return $this->belongsTo(Stadium::class,'id_stad');
        return $this->belongsTo(Matche::class,'matche','id_match');
        
    }

    public function payment() {
        return $this->hasMany(Payment::class, 'ticket_id');
    }
    
    
}
