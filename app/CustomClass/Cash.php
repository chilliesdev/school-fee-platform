<?php 

namespace App\CustomClass;

use App\Transaction;

class Cash 
{
  public static function balance()
  {
    $allPayments = Transaction::payment(request()->user()->id)->sum('amount');

    $allWithdraw = Transaction::withdraw(request()->user()->id)->sum('amount');

    return abs($allWithdraw - $allPayments);
  }
}