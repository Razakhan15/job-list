<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class JobController extends Controller
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
            "description" => "required|min:500",
            "preference" => "nullable|min:500",
            "salary" => "required",
            "perks" => "nullable",
            "assessment1" => "nullable",
            "assessment2" => "nullable",
        ]);
        Job::create($formField);
        return $formField;
    }
    public function show($id)
    {
        return Job::where('cmp_id', $id)->get();
    }
}
