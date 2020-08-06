<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Transaction;
use App\CustomClass\Paystack;

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
        $validatedData = $this->validatePayment();

        Transaction::create($validatedData);

        return response()->json([ 'status' => true ]);
    }

    public function bankList()
    {
        $paystack = new Paystack();

        return $paystack->get('/bank');
    }

    public function verifyAccountNumber()
    {
        $url = '/bank/resolve?account_number=' . request()->account_number . '&bank_code=' . request()->bank_code;
        
        $paystack = new Paystack();
        
        $response = $paystack->get($url);

        $verifyAccount = json_decode($response->getBody(), true);
        
        if ($verifyAccount['status']) {

            $verifyAccount['data']['bank_code'] = request()->bank_code;

            $verifyAccount['data']['user_id'] = request()->user_id;
            
            event(new \App\Events\NewAccountNumberEvent($verifyAccount));
        } 

        // return $verifyAccount;
    }

    public function withdraw() 
    {

    }

    public function validatePayment()
    {
        return request()->validate([
            'user_id'           => 'required',
            'fee_id'            => 'required',
            'type'              => 'required',
            'reference'         => 'required',
            'transaction_no'    => 'required',
            'trxref'            => 'required',
            'message'           => 'required',
            'amount'            => 'required',
            'name'              => 'required',
            'email'             => 'required',
            'class'             => 'required',
        ]);
    }
}