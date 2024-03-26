<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Equipe extends Model
{
    use HasFactory;

    // Define the relationship with matches (local and visitor)
    public function localMatches()
    {
        return $this->hasMany(Matche::class, 'equipe_locale');
    }

    public function visitorMatches()
    {
        return $this->hasMany(Matche::class, 'equipe_visiteur');
    }

    public function localFinal()
    {
        return $this->hasMany(FinalTable::class, 'equipe_locale');
    }

    public function visitorFinal()
    {
        return $this->hasMany(FinalTable::class, 'equipe_visiteur');
    }

}
