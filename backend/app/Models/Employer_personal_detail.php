<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employer_personal_detail extends Model
{
    use HasFactory;
    public $fillable=[
        'user_id',
        'fname',
        'lname',
        'email',
        'contact',
    ];
}
