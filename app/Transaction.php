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
            0 => 'payment',
            1 => 'withdraw'

        ][$attribute];
    }

    public function getStatusAttribute($attribute)
    {
        return [
            0 => 'failed',
            1 => 'pending'
        ][$attribute];
    }

    public function getCreatedAtAttribute($attribute)
    {
        $attribute = new \Carbon\Carbon($attribute);
        return $attribute->diffForHumans();
    }

    public function scopePayment($query, $user_id)
    {
        return $query->where([
            [ 'type', '=', 0 ],
            [ 'status', '=', 1 ],
            [ 'user_id', '=', $user_id ],
        ])->latest();
    }
    
    public function scopeWithdraw($query, $user_id)
    {
        return $query->where([
            [ 'type', '=', 1 ],
            // [ 'status', '=', 1 ],
            [ 'user_id', '=', $user_id ],
        ])->latest();
    }
}
