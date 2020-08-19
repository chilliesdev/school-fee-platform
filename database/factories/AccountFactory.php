<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Account;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Account::class, function (Faker $faker) {
    $user = factory(\App\User::class)->create();

    return [
        'user_id' => $user,
        'integration' => Str::random(10),
        'name' => $user->name,
        'recipient_code' => Str::random(10),
        'type' => Str::random(10),
        'account_number' => $faker->numberBetween($min = 1000000000, $max = 9999999999),
        'bank_code' => $faker->numberBetween($min = 100, $max = 999),
        'bank_name' => $faker->company.' Bank',
    ];
});
