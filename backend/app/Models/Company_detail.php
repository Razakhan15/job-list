<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company_detail extends Model
{
    use HasFactory;
    public $fillable = [
        'user_id',
        'name',
        'description',
        'city',
        'industry',
        'employee_cnt',
        'personal_web',
        'social_media',
        'business_license',
    ];
    
    public function listings()
    {
        return $this->hasMany(Internship::class, 'cmp_id');
    }
}
