<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Paystack;

class PaymentController extends Controller
{
    public function getPaymentConstant()
    {
        $schools =  User::where([
            [ 'type', '=', 1],
        ])
        ->with('fees')
        ->get();

        return response()->json([
            'genTranxRef' => Paystack::genTranxRef(),
            'currency' => 'NGN',
            'schools' => $schools,
        ]);
    }

    public function redirectToGateway() 
    {
        return Paystack::getAutorizationUrl()->redirectNow();
    }

    public function handleGatewayCallback()
    {
        $paymentDetails = Paystack::getPaymentData();

        dd($paymentDetails);
    }
}
