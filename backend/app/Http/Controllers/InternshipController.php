<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Internship;

class InternshipController extends Controller
{
    public function store(Request $req)
    {
        $formField = $req->validate([
            'cmp_id' => 'required',
            "profile" => "required",
            "skills" => "required",
            "type" => "required",
            "period" => "required",
            "city" => "nullable",
            "no_openings" => "required",
            "duration" => "required",
            "responsibilites" => "required|min:500",
            "stipend_type" => "required",
            "stipend" => "nullable",
            "stipend_paid_for" => "nullable",
            "perks" => "nullable",
            "ppo" => "nullable",
        ]);
        Internship::create($formField);
        return $formField;
    }

    public function show($id)
    {
        return Internship::where('cmp_id', $id)->get();
    }
}
