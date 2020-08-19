<?php

namespace App\Listeners;

use App\Events\NewAccountNumberEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\CustomClass\Paystack;
use Illuminate\Support\Facades\Validator;
use App\Account;

class CreateRecipientListener
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
     * @param  NewAccountNumberEvent  $event
     * @return void
     */
    public function handle(NewAccountNumberEvent $event)
    {
        $paystack = new Paystack();

        $accountDetails = $event->accountDetails;

        $bankInfo = [
            'type' => 'nuban',
            'name' => $accountDetails['data']['account_name'],
            'account_number' => $accountDetails['data']['account_number'],
            'bank_code' => request()->bank_code,
            'currency' => 'NGN'
        ];

        $response = $paystack->post('/transferrecipient',$bankInfo);

        $recipient = json_decode($response->getBody(), true);

        $data = $recipient['data'];

        $validatedRecipient = [
            'user_id' =>  request()->user,
            'integration' => $data['integration'],
            'name' => $data['name'],
            'recipient_code' => $data['recipient_code'],
            'type' => $data['type'],
            'account_number' => $data['details']['account_number'],
            'bank_code' => request()->bank_code,
            'bank_name' => $data['details']['bank_name'],
        ];

        Account::create($validatedRecipient);
    }
}
