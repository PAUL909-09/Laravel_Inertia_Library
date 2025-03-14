<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
        ]);

        User::create([
            'name' => 'Jane Smith',
            'email' => 'jane@example.com',
        ]);

        User::create([
            'name' => 'Alice Johnson',
            'email' => 'alice@example.com',
        ]);
    }
}