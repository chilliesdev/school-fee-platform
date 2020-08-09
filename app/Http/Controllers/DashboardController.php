<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transaction;
use Carbon\Carbon;
use App\CustomClass\Cash;

class DashboardController extends Controller
{
    public function index()
    {
        $carbon = new Carbon();
        // $carbon->timezone('GMT');

        $data = [
            'balance' => Cash::balance(),
            'today' => Transaction::whereDay('created_at', $carbon->today())->count(),
            'month' => Transaction::whereMonth('created_at', $carbon->month)->count(),
            'all' => Transaction::where('user_id', request()->user()->id)->count(),
            'payment' => Transaction::payment(request()->user())->get(),
            'withdraw' => Transaction::withdraw(request()->user())->get(),
        ];

        return response()->json($data);
    }
}
