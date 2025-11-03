<?php

use App\Http\Controllers\NewsCategoryController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->prefix('dashboard')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::prefix('kategori-berita')->group(function () {
        Route::get('/', [NewsCategoryController::class, 'index'])->name('dashboard.newsCategory.index');
        Route::get('/create', [NewsCategoryController::class, 'create'])->name('dashboard.newsCategory.create');
        Route::delete('/delete/{category}', [NewsCategoryController::class, 'delete'])->name('dashboard.newsCategory.delete');
        Route::get('/update/{category}', [NewsCategoryController::class, 'update'])->name('dashboard.newsCategory.update');
        Route::post('/store', [NewsCategoryController::class, 'store'])->name('dashboard.newsCategory.store');
    });
});

require __DIR__.'/auth.php';
