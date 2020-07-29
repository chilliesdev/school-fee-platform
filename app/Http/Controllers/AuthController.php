<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class AuthController extends Controller
{
    public function login()
    {
        $loginData = request()->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if (!auth()->attempt($loginData)) {
            return response()->json(['message' => 'Invalid Credentials'],401);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;

        return response([
            'access_token' => $accessToken
        ]);
    }

    public function logout() {
        auth()->user()->tokens->each(function ($token, $key){
            $token->delete();
        });

        return response()->json([
            'message' => 'Loggout successfully'
        ]);
    }
}
