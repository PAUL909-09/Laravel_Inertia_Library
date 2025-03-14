<?php

// use App\Http\Controllers\BookController;
// use App\Http\Controllers\UserController;
// use App\Http\Controllers\BorrowingController;
// use App\Http\Controllers\DashboardController;
// use Illuminate\Support\Facades\Route;

// Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
// Route::resource('books', BookController::class);
// Route::resource('users', UserController::class);
// Route::get('/borrowing', [BorrowingController::class, 'index'])->name('borrowing.index');
// Route::post('/borrowing', [BorrowingController::class, 'store'])->name('borrowing.store');
// Route::put('/borrowing/{borrowing}', [BorrowingController::class, 'update'])->name('borrowing.update');


use App\Http\Controllers\BookController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BorrowingController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
Route::resource('books', BookController::class);
Route::resource('users', UserController::class);
Route::resource('borrowing', BorrowingController::class);
Route::post('/borrowing/{borrowing}/toggle-return', [BorrowingController::class, 'toggleReturn'])->name('borrowing.toggleReturn');
////

