<?php

use App\Http\Controllers\CompanyDetailController;
use App\Http\Controllers\EmpDetailsController;
use App\Http\Controllers\InternListingController;
use App\Http\Controllers\InternshipController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\PusherController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/addnewemployer', [UserController::class, 'store']);
Route::post('/loginemp', [UserController::class, 'authenticate']);
Route::post('/addempdetails', [EmpDetailsController::class, 'store']);
Route::get('/getempdetails/{id}', [EmpDetailsController::class, 'show']);
Route::post('/addcmpdetails', [CompanyDetailController::class, 'store']);
Route::get('/getcmpdetails/{id}', [CompanyDetailController::class, 'show']);
Route::post('/postinternship', [InternshipController::class, 'store']);
Route::get('/getinternship/{id}', [InternshipController::class, 'show']);
Route::post('/postjob', [JobController::class, 'store']);
Route::get('/getjob/{id}', [JobController::class, 'show']);
Route::post('/logoutemp', [UserController::class, 'logout']);
Route::post('/addnewstudent', [StudentController::class, 'store']);
Route::post('/loginstudent', [StudentController::class, 'authenticate']);
Route::get('/internshiplists', [InternListingController::class, 'index']);
Route::get('/internship/detail/{id}', [InternListingController::class, 'show']);
Route::post('/logoutemp', [StudentController::class, 'logout']);
