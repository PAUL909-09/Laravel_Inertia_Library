<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Borrowing;

class BorrowingSeeder extends Seeder
{
    public function run()
    {
        Borrowing::create([
            'book_id' => 1,
            'user_id' => 1,
            'borrowed_date' => '2025-03-01',
            'return_date' => null,
        ]);

        Borrowing::create([
            'book_id' => 2,
            'user_id' => 2,
            'borrowed_date' => '2025-03-05',
            'return_date' => '2025-03-10',
        ]);

        Borrowing::create([
            'book_id' => 3,
            'user_id' => 3,
            'borrowed_date' => '2025-03-07',
            'return_date' => null,
        ]);
    }
}