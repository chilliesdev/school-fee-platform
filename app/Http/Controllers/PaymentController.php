<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Transaction;
use App\CustomClass\Paystack;
use App\Account;

class PaymentController extends Controller
{
    public function getPaymentConstant()
    {
        $schools =  User::schools()
        ->with('fees')
        ->get();

        $schools->makeHidden(['password', 'type', 'email', 'email_verified_at', 'created_at', 'updated_at'])
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
        $url = '/bank/resolve?account_number=' . request()->account . '&bank_code=' . request()->bank;
        
        $paystack = new Paystack();
        
        $response = $paystack->get($url);
        
        if ($response['status']) {

            event(new \App\Events\NewAccountNumberEvent($response));
        } 

        return $response;
    }

    public function withdraw() 
    {
        event(new \App\Events\WithdrawEvent());

        return response()->json([ 'status' => true ]);
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