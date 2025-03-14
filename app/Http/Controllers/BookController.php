<?php
namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index()
    {
        return Inertia::render('Books/Index', [
            'books' => Book::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('Books/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'genre' => 'required',
            'author' => 'required',
            'isbn' => 'required|unique:books',
            'publish_date' => 'required|date',
            'file' => 'nullable|file',
            'image' => 'nullable|image'
        ]);

        $filePath = $request->file('file')?->store('files');
        $imagePath = $request->file('image')?->store('images');

        Book::create([
            'title' => $request->title,
            'genre' => $request->genre,
            'author' => $request->author,
            'isbn' => $request->isbn,
            'publish_date' => $request->publish_date,
            'file_path' => $filePath,
            'image_path' => $imagePath
        ]);

        return redirect()->route('books.index');
    }

    public function edit(Book $book)
    {
        return Inertia::render('Books/Edit', [
            'book' => $book
        ]);
    }

    public function update(Request $request, Book $book)
    {
        $request->validate([
            'title' => 'required',
            'genre' => 'required',
            'author' => 'required',
            'isbn' => 'required|unique:books,isbn,' . $book->id,
            'publish_date' => 'required|date',
            'file' => 'nullable|file',
            'image' => 'nullable|image'
        ]);

        $filePath = $request->file('file')?->store('files') ?? $book->file_path;
        $imagePath = $request->file('image')?->store('images') ?? $book->image_path;

        $book->update([
            'title' => $request->title,
            'genre' => $request->genre,
            'author' => $request->author,
            'isbn' => $request->isbn,
            'publish_date' => $request->publish_date,
            'file_path' => $filePath,
            'image_path' => $imagePath
        ]);

        return redirect()->route('books.index');
    }

    public function destroy(Book $book)
    {
        $book->delete();
        return redirect()->route('books.index');
    }
}