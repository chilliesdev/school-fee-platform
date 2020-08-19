<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Transaction;
use Faker\Generator as Faker;

$factory->define(Transaction::class, function (Faker $faker) {
    $user = \App\User::where(['type' => 1])
        ->inRandomOrder()
        ->first();

    $type = array_rand([0,1]);
    
    $class = [
        "PRIMARY 1",
        "PRIMARY 2",
        "PRIMARY 3",
        "PRIMARY 4",
        "PRIMARY 5",
        "JSS 1",
        "JSS 2",
        "JSS 3",
        "SSS 1",
        "SSS 2",
        "SSS 3",    
    ];
    $classIndex = array_rand($class);

    return [
        'user_id' => $user->id,
        'fee_id' => null,
        'type' => $type,
        'reference' => null,
        'transaction_no' => null,
        'trxref' => null,
        'message' => null,
        'amount' => $faker->numberBetween($min = 1000, $max = 40000),
        'name' => $faker->name,
        'email' => $type == 0 ? $faker->unique()->safeEmail : null,
        'class' => $class[$classIndex],
        'status' => 1
    ];
});
