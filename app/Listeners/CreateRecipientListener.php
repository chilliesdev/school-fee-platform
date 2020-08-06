<?php

namespace App\Listeners;

use App\Events\NewAccountNumberEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\CustomClass\Paystack;
use Illuminate\Support\Facades\Validator;

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
            'bank_code' => $accountDetails['data']['bank_code'],
            'currency' => 'NGN'
        ];

        $response = $paystack->post('/transferrecipient',$bankInfo);

        $recipient = json_decode($response->getBody(), true);

        // merge recipient['data'] and $recipient['data']['details'] for validation
        $toValidate = array_merge($recipient['data'],$recipient['data']['details']);

        $toValidate['user_id'] = $accountDetails['data']['user_id'];

        $validatedRecipient = Validator::make($toValidate,[
            'user_id' => 'required',
            'integration' => 'required',
            'name' => 'required',
            'recipient_code' => 'required',
            'type' => 'required',
            'account_number' => 'required',
            'bank_code' => 'required',
            'bank_name' => 'required'
        ]);

        var_dump($validatedRecipient);
    }
}
