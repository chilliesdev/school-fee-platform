<?php

use Illuminate\Database\Seeder;

class WithdrawSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Transaction::class,40)->create([
            'name' => null,
            'type' => 1
        ]);
    }
}
