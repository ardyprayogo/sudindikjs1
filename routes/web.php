<?php

use App\Http\Controllers\NewsCategoryController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/Page');
})->name('home');

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

    Route::prefix('berita')->group(function () {
        Route::get('/', [NewsController::class, 'index'])->name('dashboard.news.index');
        Route::get('/create', [NewsController::class, 'create'])->name('dashboard.news.create');
        Route::delete('/delete/{news}', [NewsController::class, 'delete'])->name('dashboard.news.delete');
        Route::get('/update/{news}', [NewsController::class, 'update'])->name('dashboard.news.update');
        Route::post('/store', [NewsController::class, 'store'])->name('dashboard.news.store');
    });
});

require __DIR__.'/auth.php';
