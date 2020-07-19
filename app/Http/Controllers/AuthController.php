<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;
use App\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $loginData = $request->validate([
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

    public function logout(Request $request) {
        auth()->user()->tokens->each(function ($token, $key){
            $token->delete();
        });

        return response()->json([
            'message' => 'Loggout successfully'
        ]);
    }

    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:55',
            'email' => 'email|required|unique:users',
            'password' => 'required'
        ]);

        $validatedData['password'] = bcrypt($request->password);

        $user = User::create($validatedData);

        $accessToken = $user->createToken('authToken')->accessToken;

        return response([
            'access_token' => $accessToken
        ]);
    }
}
