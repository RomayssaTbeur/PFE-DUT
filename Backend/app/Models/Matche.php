<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matche extends Model
{
    use HasFactory;
    public function Matche(){
    return $this->belongsTo(Equipe::class,'id');
    return $this->belongsTo(Stadium::class,'id_stad');
}
   protected $primaryKey = 'id_match';
}

