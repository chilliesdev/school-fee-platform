<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Fee;

class FeeController extends Controller
{
    public function index()
    {
        return Fee::get();
    }

    public function store()
    {
        $validatedFees = $this->validateMultiFee();

        $feesMappedToUser = $this->mapUserToFees(request()->user,$validatedFees);

        return response()->json(Fee::insert($feesMappedToUser));
    }

    public function show(Fee $fee)
    {
        return $fee;
    }

    public function edit(Fee $fee)
    {
        return $fee->update($this->validateFee());
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

    public function validateMultiFee()
    {
        $allRequest = request()->all();
        $fees = [];

        function checkSuffix($currentKey,$prefix)
        {
            // extract and return the suffix eg. fee_1 return 1
            $point = strlen($currentKey) - 1;
            if (substr($currentKey,0,$point) === $prefix . '_'){

                return substr($currentKey,$point,$point);
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
                    // Make sure it has not been added before and result has fee and amount 
                    array_push($fees,$result);
                }
            }
        }

        return $fees;
    }
}
