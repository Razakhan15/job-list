<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Employer_personal_detail;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class EmpDetailsController extends Controller
{
    public function store(Request $req)
    {
        $formField = $req->validate([
            'user_id' => 'required',
            'fname' => 'required',
            'lname' => 'required',
            'email' => ['required', 'email', Rule::unique('employer_personal_details', 'email')],
            'contact' => ['required', 'min:10', 'max:10']
        ]);
        Employer_personal_detail::create($formField);
        return $formField;
    }

    public function show($id)
    {
        return Employer_personal_detail::where('user_id', $id)->get();
    }
}
