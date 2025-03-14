<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    public function run()
    {
        Book::create([
            'title' => 'The Great Gatsby',
            'genre' => 'Fiction',
            'author' => 'F. Scott Fitzgerald',
            'isbn' => '978-0743273565',
            'publish_date' => '1925-04-10',
        ]);

        Book::create([
            'title' => 'To Kill a Mockingbird',
            'genre' => 'Fiction',
            'author' => 'Harper Lee',
            'isbn' => '978-0446310789',
            'publish_date' => '1960-07-11',
        ]);

        Book::create([
            'title' => '1984',
            'genre' => 'Dystopia',
            'author' => 'George Orwell',
            'isbn' => '978-0451524935',
            'publish_date' => '1949-06-08',
        ]);
    }
}