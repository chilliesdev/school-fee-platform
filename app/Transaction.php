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
        'status',
    ];

    public function getTypeAttribute($attribute)
    {
        return [
            0 => 'Payment',
            1 => 'Withdraw'

        ][$attribute];
    }

    public function getStatusAttribute($attribute)
    {
        return [
            0 => 'failed',
            1 => 'pending'
        ][$attribute];
    }

    public function scopePayment($query, $user)
    {
        return $query->where([
            [ 'type', '=', 0 ],
            [ 'status', '=', 1 ],
            [ 'user_id', '=', $user->id ],
        ]);
    }
    
    public function scopeWithdraw($query, $user)
    {
        return $query->where([
            [ 'type', '=', 1 ],
            [ 'status', '=', 1 ],
            [ 'user_id', '=', $user->id ],
        ]);
    }
}
