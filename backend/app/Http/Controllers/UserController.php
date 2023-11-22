<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Company_detail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function store(Request $req)
    {
        $formField = $req->validate([
            'email' => ['required', Rule::unique('users', 'email')],
            'password' => ['required', 'min:6'],
            'fname' => ['required', 'min:3'],
            'lname' => ['required', 'min:3'],
            'phone' => ['required', 'min:10', 'max:10'],
        ]);
        $formField['password'] = bcrypt($formField['password']);
        $userEmp = User::create($formField);
        auth()->login($userEmp);
        // Session::put('user_id', $userEmp->id);
        // return  response()->json(['user_id' => session('user_id')]);
        return $userEmp;
    }

    public function authenticate(Request $req)
    {
        $formFields = $req->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);
        if (Auth::attempt($formFields)) {
            $user = Auth::user(); // Get the authenticated user
            // Session::put('user_id', $user->id);
            // return  response()->json(['user_id' => session('user_id')]);
            return response()->json(['user_id' => $user->id]); // IF USER DOES'NT FILL CMP DETAILS LOGIN THROWS ERROR
        }
        return response("incorrect credentials", 404);
    }

    public function logout(Request $req)
    {
        auth()->logout();
        $req->session()->invalidate();
        $req->session()->regenerateToken();
    }
}
