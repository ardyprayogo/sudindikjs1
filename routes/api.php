<?php

use App\Http\Controllers\Api\NewsController;
use Illuminate\Support\Facades\Route;

Route::prefix('berita')->group(function () {
    Route::get('/data', [NewsController::class, 'getData']);
    Route::get('/detail', [NewsController::class, 'getDetail']);
});
