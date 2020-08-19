<?php

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

// Authentication
Route::post('/login','AuthController@login');
Route::middleware('auth:api')->get('/logout','AuthController@logout');
Route::middleware('auth:api')->get('/auth', function () {
    $user = request()->user();
    $user['fees'] = $user->fees;
    return $user;
});

// Payment
Route::get('/pay/constant', 'PaymentController@getPaymentConstant');
Route::post('/payment/callback', 'PaymentController@handleGatewayCallback');
Route::middleware('auth:api')->get('/payment/bank', 'PaymentController@bankList');
Route::middleware('auth:api')->post('/payment/verifyAccountNumber', 'PaymentController@verifyAccountNumber');
Route::middleware('auth:api')->post('/payment/withdraw', 'PaymentController@withdraw');

// Users
Route::middleware('auth:api')->get('/user','UserController@index');
Route::middleware('auth:api')->post('/user','UserController@store');
Route::middleware('auth:api')->get('/user/{user}','UserController@show');
Route::middleware('auth:api')->post('/user/{user}/edit','UserController@edit');

// Fee
Route::middleware('auth:api')->get('/fee','FeeController@index');
Route::middleware('auth:api')->post('/fee/{user}','FeeController@store');
Route::middleware('auth:api')->get('/fee/{fee}','FeeController@show');
Route::middleware('auth:api')->post('/fee/{fee}/edit','FeeController@edit');
Route::middleware('auth:api')->delete('/fee/{fee}','FeeController@destory');

// Dashboard
Route::middleware('auth:api')->get('/dashboard','DashboardController@index');

// Transaction
Route::middleware('auth:api')->get('/transaction','TransactionController@index');