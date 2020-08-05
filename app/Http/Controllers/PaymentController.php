<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class PaymentController extends Controller
{
    public function getPaymentConstant()
    {
        $schools =  User::where([
            [ 'type', '=', 1],
        ])
        ->with('fees')
        ->get();

        $schools->makeHidden(['password','type','email','email_verified_at','created_at','updated_at'])
            ->toArray();

        return response()->json([
            'publicKey' => getenv('PAYSTACK_PUBLIC_KEY'),
            'currency' => 'NGN',
            'schools' => $schools,
        ]);
    }

    public function handleGatewayCallback()
    {
        return request();
    }
}
