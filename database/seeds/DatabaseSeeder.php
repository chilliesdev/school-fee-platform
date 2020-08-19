<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AdminSeeder::class);
        $this->call(AccountSeeder::class);
        $this->call(FeeSeeder::class);
        $this->call(WithdrawSeeder::class);
        $this->call(PaymentSeeder::class);
    }
}