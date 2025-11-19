<?php

use App\Http\Controllers\Api\GalleryController;
use App\Http\Controllers\Api\MainServiceController;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\SchoolController;
use App\Http\Controllers\Api\StudentController;
use Illuminate\Support\Facades\Route;

Route::prefix('berita')->group(function () {
    Route::get('/data', [NewsController::class, 'getData']);
    Route::get('/detail', [NewsController::class, 'getDetail']);
});

Route::prefix('galeri')->group(function () {
    Route::get('/data', [GalleryController::class, 'getData']);
    Route::get('/detail', [GalleryController::class, 'getDetail']);
});

Route::prefix('layanan-utama')->group(function () {
    Route::get('/data', [MainServiceController::class, 'getData']);
    Route::get('/detail', [MainServiceController::class, 'getDetail']);
});

Route::prefix('sekolah')->group(function () {
    Route::get('/jenjang', [SchoolController::class, 'getJenjang']);
    Route::get('/kecamatan', [SchoolController::class, 'getKecamatan']);
    Route::get('/total', [SchoolController::class, 'getTotal']);
});

Route::prefix('peserta-didik')->group(function () {
    Route::get('/jenjang', [StudentController::class, 'getJenjang']);
    Route::get('/kecamatan', [StudentController::class, 'getKecamatan']);
    Route::get('/total', [StudentController::class, 'getTotal']);
});
