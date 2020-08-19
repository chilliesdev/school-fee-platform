<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function index() 
    {
        return response()->json(User::with('fees')->orderBy('name')->paginate(10));
    }

    public function store()
    {
        $validatedUser = $this->validateUser();

        $validatedUser['password'] = bcrypt(request()->password);

        $user = User::create($validatedUser);

        $this->storeImage($user);

        return response($user);
    }

    public function show(User $user)
    {
        $user['fees'] = $user->fees;
        return $user;
    }

    public function edit(User $user)
    {
        $validatedUser = $this->validateUser(true);

        if (request()->has('password')){
            $validatedUser['password'] = bcrypt(request()->password);
        }

        $user->update($validatedUser);
        return $user;
    }

    public function validateUser($update = false) 
    {
        $validationRules = [
            'name' => 'required|max:55',
            'email' => 'email|required|unique:users',
            'password' => 'required',
            'address' => 'required',
            'type' => 'required',
            'picture' => 'sometimes|image|mimes:jpeg,jpg,png,gif|max:2000'
        ];

        if ($update) {
            $validationRules['email'] = 'email|required';
            $validationRules['password'] = 'sometimes';
            $validationRules['address'] = 'sometimes';
        }

        return request()->validate($validationRules);
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
