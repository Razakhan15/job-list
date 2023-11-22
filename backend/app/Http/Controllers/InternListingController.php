<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Internship;

class InternListingController extends Controller
{
    public function index()
    {
        return Internship::with('cmp')->get();
    }

    public function show($id)
    {
        return Internship::with('cmp')->find($id);
    }
}
