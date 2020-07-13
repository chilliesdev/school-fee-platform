<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// FOR PUBLIC USERS ONLY
Route::view('/', 'public');

// FOR VENDORS ONLY
Route::view('/vendor/{path?}', 'dashboard')
    ->where('path','.*')
    ->name('dashboard');