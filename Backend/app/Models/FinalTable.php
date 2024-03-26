<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FinalTable extends Model
{
    use HasFactory;
    protected $primaryKey = 'id';
    protected $with=['equipe_locale','equipe_visiteur'];

    public function equipe_locale()
    {
        return $this->belongsTo(Equipe::class, 'equipe_locale');
    }

    public function equipe_visiteur()
    {
        return $this->belongsTo(Equipe::class, 'equipe_visiteur');
    }
}
