<?php

namespace App\Http\Controllers;

use App\Models\Borrowing;
use App\Models\Book;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BorrowingController extends Controller
{
    public function index()
    {
        return Inertia::render('Borrowing/Index', [
            'borrowings' => Borrowing::with(['book', 'user'])->get(),
            'books' => Book::all(),
            'users' => User::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Borrowing/Create', [
            'books' => Book::all(),
            'users' => User::all(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'book_id' => 'required|exists:books,id',
            'user_id' => 'required|exists:users,id',
            'borrowed_date' => 'required|date',
            'return_date' => 'nullable|date|after_or_equal:borrowed_date',
        ]);

        Borrowing::create($request->all());
        return redirect()->route('borrowing.index')->with('success', 'Borrowing created successfully.');
    }

    public function edit(Borrowing $borrowing)
    {
        return Inertia::render('Borrowing/Edit', [
            'borrowing' => $borrowing->load(['book', 'user']),
            'books' => Book::all(),
            'users' => User::all(),
        ]);
    }

    public function update(Request $request, Borrowing $borrowing)
    {
        $request->validate([
            'book_id' => 'required|exists:books,id',
            'user_id' => 'required|exists:users,id',
            'borrowed_date' => 'required|date',
            'return_date' => 'nullable|date|after_or_equal:borrowed_date',
        ]);

        $borrowing->update($request->all());
        return redirect()->route('borrowing.index')->with('success', 'Borrowing updated successfully.');
    }

    public function destroy(Borrowing $borrowing)
    {
        $borrowing->delete();
        return redirect()->route('borrowing.index')->with('success', 'Borrowing deleted successfully.');
    }

    // New method to toggle return status
    public function toggleReturn(Request $request, Borrowing $borrowing)
    {
        $request->validate([
            'return_date' => 'nullable|date|after_or_equal:borrowed_date',
        ]);

        if ($borrowing->return_date) {
            $borrowing->update(['return_date' => null]); // Mark as not returned
            $message = 'Borrowing marked as not returned.';
        } else {
            $borrowing->update(['return_date' => $request->return_date ?: now()]); // Mark as returned
            $message = 'Borrowing marked as returned.';
        }

        return redirect()->route('borrowing.index')->with('success', $message);
    }
}