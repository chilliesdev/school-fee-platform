<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Paystack;

class PaymentController extends Controller
{
    public function getPaymentConstant()
    {
        return response()->json([
            'genTranxRef' => Paystack::genTranxRef(),
            'currency' => 'NGN',
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
