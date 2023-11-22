<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Company_detail;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class CompanyDetailController extends Controller
{
    public function store(Request $req)
    {
        $formField = $req->validate([
            'user_id' => ['required', Rule::unique('company_details', 'user_id')],
            'name' => ['required', Rule::unique('company_details', 'name')],
            'description' => ['required', 'min:1000'],
            'city' => 'required',
            'industry' => 'required',
            'employee_cnt' => 'required',
            'personal_web' => 'nullable',
            'social_media' => 'nullable',
            'business_license' => 'nullable'
        ]);
        $cmp = Company_detail::create($formField);
        return $cmp;
    }

    public function show($id)
    {
        return Company_detail::where('user_id', $id)->get();
    }
}
