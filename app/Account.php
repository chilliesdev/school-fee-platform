<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $fillable = [
        'user_id',
        'integration',
        'name',
        'recipient_code',
        'type',
        'account_number',
        'bank_code',
        'bank_name',
    ];
}
