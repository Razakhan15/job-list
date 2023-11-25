<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;
    public $fillable = [
        'cmp_id',
        "profile",
        "skills",
        "type",
        "period",
        "city",
        "no_openings",
        "description",
        "preference",
        "salary",
        "perks",
        "assessment1",
        "assessment2",
    ];
    public function cmp()
    {
        return $this->belongsTo(Company_detail::class, 'cmp_id');
    }
}
