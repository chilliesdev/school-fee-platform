<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fee extends Model
{
    protected $fillable = [ 'user_id', 'name', 'amount' ];
}