<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Internship;
use Illuminate\Http\Request;

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

    public function search($key)
    {
        // $query = $req->input('query');

        // Use Eloquent to search in the database
        $results = Internship::where('profile', 'like', '%' . $key . '%')->get();

        return response()->json($results);
    }
}
