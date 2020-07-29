<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login','AuthController@login');
Route::middleware('auth:api')->get('/logout','AuthController@logout');
Route::post('/register','UsersController@create');

// Payment routes
Route::post('/pay', 'PaymentController@redirectToGateway');
Route::get('/pay/constant', 'PaymentController@getPaymentConstant');