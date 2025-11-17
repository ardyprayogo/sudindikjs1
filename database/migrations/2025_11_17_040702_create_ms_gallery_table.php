<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ms_galeri', function (Blueprint $table) {
            $table->id();
            $table->string('judul')->comment('Judul')->index();
            $table->string('gambar')->comment('Url Gambar')->nullable();
            $table->string('deskripsi')->comment('Deskripsi')->nullable();
            $table->tinyInteger('status')->default(1)->comment('1: Aktif, 0: Tidak Aktif')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ms_galeri');
    }
};
