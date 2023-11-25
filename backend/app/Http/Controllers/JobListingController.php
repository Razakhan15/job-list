<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Job;
use Illuminate\Http\Request;

class JobListingController extends Controller
{
    public function index()
    {
        return Job::with('cmp')->get();
    }

    public function show($id)
    {
        return Job::with('cmp')->find($id);
    }
}
