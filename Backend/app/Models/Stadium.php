<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stadium extends Model
{
    use HasFactory;

    protected $table = 'stadiums';
    protected $primaryKey = 'id_stad';

    // Define the relationship with matches
    public function matches() {
        return $this->hasMany(Matche::class, 'stadium');
    }

    public function tickets() {
        return $this->hasMany(Ticket::class, 'stadium_name');
    }
}

