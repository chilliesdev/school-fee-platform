<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transaction;
use Carbon\Carbon;

class TransactionController extends Controller
{
    public function index()
    {
        $carbon = new Carbon();

        $filter = [
            ['user_id','=',request()->user()->id]
        ];

        function has($name){ 
            if (request()->has($name)){
                return request()->$name === 'true' ? true : false;
            }

            return false;
        }

        if (has('payment')){
            array_push($filter,['type','=','0']);
        }
        
        if (has('withdraw')){
            array_push($filter,['type','=','1']);
        }
        
        if (has('failed')){
            array_push($filter,['status','=','0']);
        }
        
        if (has('pending')){
            array_push($filter,['status','=','1']);
        }

        $from = null;
        $to = null;

        if (request()->has('from') || request()->has('to')){

            // it has and contains a date
            if (request()->has('from') && !empty(request()->from)){
                $from = date(request()->from);
            } else{
                // Set todays date if it is null
                $from = date('yy-m-d');
            }

            if (request()->has('to') && !empty(request()->to)){
                $to = date(request()->to);
            } else{
                // Set todays date if it is null
                $to = date('yy-m-d');
            }

            if (!empty(request()->from) || !empty(request()->to)) {
                // make sure it dose not contain an empty string
                return Transaction::where($filter)
                    ->whereBetween('created_at', [$from, $to])
                    ->paginate(20);
            }
        }

        if (has('month')){
            return Transaction::where($filter)
                ->whereMonth('created_at', $carbon->month)
                ->paginate(20);
        }
              
        if (has('month')){
            return Transaction::where($filter)
                ->whereMonth('created_at', $carbon->month)
                ->paginate(20);
        }

        if (has('today')){
            return Transaction::where($filter)
                ->whereDay('created_at', $carbon->today())
                ->paginate(20);
        }

        return Transaction::where($filter)
                ->paginate(20);
    }
}
