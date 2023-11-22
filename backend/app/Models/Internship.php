<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Internship extends Model
{
    use HasFactory;
    public $fillable = [
        'cmp_id',
        "profile",
        "skills",
        "type",
        "city",
        "period",
        "no_openings",
        "duration",
        "responsibilites",
        "stipend_type",
        "stipend",
        "stipend_paid_for",
        "perks",
        "ppo",
    ];

    public function cmp()
    {
        return $this->belongsTo(Company_detail::class, 'cmp_id');
    }
}
