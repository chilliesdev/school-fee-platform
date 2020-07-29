<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use App\User;

class UsersController extends Controller
{
    public function create()
    {
        $validatedData = $this->validateRequest();

        $validatedData['password'] = bcrypt(request()->password);

        // return $validatedData;
        $user = User::create($validatedData);

        $this->storeImage($user);

        $accessToken = $user->createToken('authToken')->accessToken;

        return response([
            'access_token' => $accessToken
        ]);
    }

    public function validateRequest() 
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

            Image::make(storage_path('app/public/pictures/'.request()->picture))
                ->resize(250, 300, function($constraint) {
                        $constraint->aspectRatio();
                })
                ->save();
        }
    }
}
