<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


Route::get('/', function () {
    return Inertia::render('Home/Page2');
})->name('home');

Route::get('/organisasi', function () {
    return Inertia::render('Profile/Page');
})->name('organisasi');

Route::get('/berita', function () {
    return Inertia::render('Berita/Page');
})->name('berita');

Route::get('/kontak', function () {
    return Inertia::render('Kontak/Page');
})->name('kontak');

Route::get('/kjp', function () {
    return Inertia::render('Bantuan/KjpPage');
})->name('kjp');

Route::get('/kjmu', function () {
    return Inertia::render('Bantuan/KjmuPage');
})->name('kjmu');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
