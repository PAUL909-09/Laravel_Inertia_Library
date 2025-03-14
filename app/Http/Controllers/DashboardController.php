<?php

namespace App\Http\Controllers;

use App\Models\Borrowing;
use App\Models\User;
use App\Models\Book;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard', [
            'borrowings' => Borrowing::with(['book', 'user'])->get(),
            'totalUsers' => User::count(),
            'totalBooks' => Book::count(),
            'totalBorrowedBooks' => Borrowing::whereNull('return_date')->count(), // Count of books currently borrowed (not returned)
        ]);
    }
}