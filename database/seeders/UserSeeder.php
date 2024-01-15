<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'id'   => 1,
            'name' => 'Do Van Huy',
            'email' => 'huydv04@gmail.com',
            'role_id' => 1, // admin
            'password' => Hash::make('dovanhuy'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
