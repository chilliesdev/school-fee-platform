<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Fee;
use App\User;

class FeeController extends Controller
{
    public function index()
    {
        return Fee::get();
    }

    public function store(User $user)
    {
        $validatedFees = $this->validateMultipleFee();

        $feesMappedToUser = $this->mapUserToFees($user->id,$validatedFees);

        return response()->json(Fee::insert($feesMappedToUser));
    }

    public function show(Fee $fee)
    {
        return $fee;
    }

    public function edit($user)
    {
        // delete previous fees by user
        Fee::where('user_id',$user)->delete();

        $validatedFees = $this->validateMultipleFee();

        $feesMappedToUser = $this->mapUserToFees($user,$validatedFees);

        return response()->json(Fee::insert($feesMappedToUser));

    }

    public function destory(Fee $fee){
        $fee->delete();
    }

    public function validateFee()
    {
        return request()->validate([
            'name' => 'required',
            'amount' => 'required'
        ]);
    }

    public function mapUserToFees($user,$fees)
    {
        foreach ($fees as &$row){
            $row['user_id'] = $user;
        }

        return $fees;
    }

    public function validateMultipleFee()
    {
        $allRequest = request()->all();
        $fees = [];

        function checkSuffix($currentKey,$suffix)
        {
            // extract and return the suffix eg. fee_1 return 1
            $point = strlen($suffix);
            if (substr($currentKey,0,$point) === $suffix){

                return substr($currentKey,$point + 1,strlen($currentKey));
            }

            return false;
        }

        foreach ($allRequest as $key => &$value){
            $suffix = checkSuffix($key,'name');
            if ($suffix){
                // if the suffix match add it to the request
                request()->request->add(['name' => $allRequest['name_'.$suffix]]);
                request()->request->add(['amount' => $allRequest['amount_'.$suffix]]);
            
                // validate current fee and 
                $result = request()->validate([
                    'name' => 'sometimes',
                    'amount' => 'sometimes|numeric'
                ]);

                if ($result !== end($fees) && count($result) === 2) {
                    // Make sure it has not been added before and 
                    // result has fee and amount 
                    array_push($fees,$result);
                }
            }
        }

        return $fees;
    }
}
