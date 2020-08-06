<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Fee;

class UsersController extends Controller
{
    public function index() 
    {
        return response()->json(User::with('fees')->get());
    }

    public function create()
    {
        $validatedUser = $this->validateUser();

        $validatedFees = $this->validateFee();

        $validatedUser['password'] = bcrypt(request()->password);

        $user = User::create($validatedUser);

        $feesMappedToUser = $this->mapUserToFees($user,$validatedFees);

        Fee::insert($feesMappedToUser);

        $this->storeImage($user);

        return response($user);
    }

    public function mapUserToFees($user,$fees)
    {
        foreach ($fees as &$row){
            $row['user_id'] = $user['id'];
        }

        return $fees;
    }

    public function validateFee()
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

    public function validateUser() 
    {
        return request()->validate([
            'name' => 'required|max:55',
            'email' => 'email|required|unique:users',
            'password' => 'required',
            'type' => 'required',
            'picture' => 'sometimes|file|image|max:5000'
        ]);
    }

    public function storeImage($user) 
    {
        if (request()->hasFile('picture')) {
            $user->update([
                'picture' => request()->picture->store('pictures','public'),
            ]);

            event(new \App\Events\NewPictureUploadEvent($user));
        }
    }
}
