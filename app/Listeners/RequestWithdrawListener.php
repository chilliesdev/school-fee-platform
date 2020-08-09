<?php

namespace App\Listeners;

use App\Events\WithdrawEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\CustomClass\Paystack;
use App\CustomClass\Cash;
use App\Account;
use App\Transaction;

class RequestWithdrawListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  WithdrawEvent  $event
     * @return void
     */
    public function handle(WithdrawEvent $event)
    {
        function fail($message) {
            Transaction::create([
                'user_id' => request()->user()->id,
                'type' => 1,
                'message' => $message,
                'amount' => request()->amount,
                'status' => 0
            ]);
        }

        if (request()->amount > Cash::balance()) {
            return fail('Insufficient Balance');
        }

        $account = Account::find(request()->user()->id);

        $request = [
            'source' => 'balance',
            // multipled by 100 to include kobo
            'amount' => request()->amount * 100,
            'recipient' => $account['recipient_code'],
            'reason' => 'PAYMYSCHOOLFEE ACCOUNT WITHDRAW'
        ];

        $paystack = new Paystack();

        $response = $paystack->post('/transfer',$request);
        
        // $response = json_decode($response, true);

        if ($response['status']){
            $data = $response['data'];

            return Transaction::create([
                'user_id' => request()->user()->id,
                'type' => 1,
                'reference' => $data['reference'],
                'transaction_no' => $data['transfer_code'],
                'message' => $response['message'],
                'amount' => $response['amount'] / 100,
                'status' => 1
            ]);
        }

        return fail($response['body']->message);
    }
}
