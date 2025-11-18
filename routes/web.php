<?php

use App\Http\Controllers\GalleryController;
use App\Http\Controllers\MainServiceController;
use App\Http\Controllers\NewsCategoryController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/Page');
})->name('home');

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

    Route::prefix('pengguna')->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('dashboard.user.index');
        Route::get('/create', [UserController::class, 'create'])->name('dashboard.user.create');
        Route::delete('/delete/{user}', [UserController::class, 'delete'])->name('dashboard.user.delete');
        Route::get('/update/{user}', [UserController::class, 'update'])->name('dashboard.user.update');
        Route::post('/store', [UserController::class, 'store'])->name('dashboard.user.store');
    });

    Route::prefix('galeri')->group(function () {
        Route::get('/', [GalleryController::class, 'index'])->name('dashboard.gallery.index');
        Route::get('/create', [GalleryController::class, 'create'])->name('dashboard.gallery.create');
        Route::delete('/delete/{gallery}', [GalleryController::class, 'delete'])->name('dashboard.gallery.delete');
        Route::get('/update/{gallery}', [GalleryController::class, 'update'])->name('dashboard.gallery.update');
        Route::post('/store', [GalleryController::class, 'store'])->name('dashboard.gallery.store');
    });

    Route::prefix('layanan-utama')->group(function () {
        Route::get('/', [MainServiceController::class, 'index'])->name('dashboard.service.index');
        Route::get('/create', [MainServiceController::class, 'create'])->name('dashboard.service.create');
        Route::delete('/delete/{service}', [MainServiceController::class, 'delete'])->name('dashboard.service.delete');
        Route::get('/update/{service}', [MainServiceController::class, 'update'])->name('dashboard.service.update');
        Route::post('/store', [MainServiceController::class, 'store'])->name('dashboard.service.store');
    });

    Route::prefix('profil')->group(function () {
        Route::get('/', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

});

require __DIR__.'/auth.php';
