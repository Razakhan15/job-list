<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rule;

class StudentController extends Controller
{

    //FOR MAKING CUSTOM USERS 
    // 1 MODEL_NAME extends Authenticatable
    // 2 IN CONFIG/AUTH.PHP 
    // 'custom_guard_name' => [
    //     'driver' => 'session',
    //     'provider' => 'custom_provider_name', // Use your custom provider here.
    // ],
    // 3 'custom_provider_name' => [
    //     'driver' => 'eloquent',
    //     'model' => App\Models\Student::class, -> MODEL PATH
    // ],
    // 4 LOGIN BY BELOW CODE
    // if (Auth::guard('custom_guard_name')->attempt($formFields)) {
    //     $user = Auth::guard('custom_guard_name')->user();
    //     Session::put('user_id', $user);
    //     return $user->id;
    // }

    public function store(Request $req)
    {
        $formField = $req->validate([
            'email' => ['required', Rule::unique('students', 'email')],
            'password' => ['required', 'min:6'],
            'fname' => ['required', 'min:3'],
            'lname' => ['required', 'min:3'],
        ]);
        $formField['password'] = bcrypt($formField['password']);
        $userEmp = Student::create($formField);
        auth()->login($userEmp);
        return $formField;
    }

    public function authenticate(Request $req)
    {
        $formFields = $req->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);
        if (Auth::guard('students')->attempt($formFields)) {
            $user = Auth::guard('students')->user();
            Session::put('user_id', $user->id);
            return $user;
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
