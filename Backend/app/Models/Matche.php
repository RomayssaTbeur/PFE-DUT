<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matche extends Model
{
    use HasFactory;
   /* public function Matche(){
        return $this->belongsTo(Equipe::class,'id');
        return $this->belongsTo(Stadium::class,'id_stad');
    }*/
       protected $primaryKey = 'id_match';
    
    // Define the relationships with equipe and stadium
    public function localTeam()
    {
        return $this->belongsTo(Equipe::class, 'equipe_locale');
    }

    public function visitorTeam()
    {
        return $this->belongsTo(Equipe::class, 'equipe_visiteur');
    }

    public function stadium()
    {
        return $this->belongsTo(Stadium::class, 'stadium');
    }
    public function tickets() {
        return $this->hasMany(Ticket::class, 'matche');
    }
}
