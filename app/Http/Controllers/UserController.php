<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function index() 
    {
        return response()->json(User::with('fees')->get());
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
        return $user;
    }

    public function edit(User $user)
    {
        $validatedUser = $this->validateUser(true);

        $validatedUser['password'] = bcrypt(request()->password);

        return $user->update($validatedUser);
    }

    public function validateUser($update = false) 
    {
        $emailValidation = 'email|required';

        $update ?: $emailValidation = $emailValidation . '|unique:users';

        return request()->validate([
            'name' => 'required|max:55',
            'email' => $emailValidation,
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
