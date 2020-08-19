<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transaction;
use App\Account;
use Carbon\Carbon;
use App\CustomClass\Cash;

class DashboardController extends Controller
{
    public function index()
    {
        $carbon = new Carbon();

        $user = request()->user();

        $data = [
            'balance' => Cash::balance(),
            'today' => Transaction::where('user_id', $user->id)
                ->whereDay('created_at', $carbon->today())
                ->count(),
            'month' => Transaction::where('user_id', $user->id)
                ->whereMonth('created_at', $carbon->month)
                ->count(),
            'all' => Transaction::where('user_id', $user->id)
                ->count(),
            'payment' => Transaction::payment($user->id)
                ->paginate(20),
            'withdraw' => Transaction::withdraw($user->id)
                ->paginate(20),
            'account' => Account::where('user_id','=',$user->id)
                ->firstOrFail()
        ];

        return response()->json($data);
    }
}
