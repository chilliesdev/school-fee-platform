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
Route::get('/pay/constant', 'PaymentController@getPaymentConstant');
Route::post('/payment/callback', 'PaymentController@handleGatewayCallback');
Route::get('/payment/bank', 'PaymentController@bankList');
Route::post('/payment/verifyAccountNumber', 'PaymentController@verifyAccountNumber');

// Users
Route::get('/users','UsersController@index');