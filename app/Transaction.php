<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = [
        'user_id',
        'fee_id',
        'type',
        'reference',
        'transaction_no',
        'trxref',
        'message',
        'amount',
        'name',
        'email',
        'class',
    ];

    public function getTypeAttribute($attribute)
    {
        return [
            0 => 'Payment',
            1 => 'Withdraw'

        ][$attribute];
    }
}
