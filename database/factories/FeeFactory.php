<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Fee;
use App\User;
use Faker\Generator as Faker;

$factory->define(Fee::class, function (Faker $faker) {
    $user = User::where(['type' => 1])
        ->inRandomOrder()
        ->first();
        
    $names = [
        'SCHOOL FEE',
        'LESSON FEE',
        'PTA FEE',
    ];

    return [
        'user_id' => $user->id,
        'name' => $names[array_rand($names)],
        'amount' => $faker->numberBetween($min = 1000, $max = 40000),
    ];
});