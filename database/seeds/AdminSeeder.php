<?php

use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\User::class)->create([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'address' => null,
            'type' => 0
        ]);
    }
}
