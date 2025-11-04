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
        Schema::create('ms_berita', function (Blueprint $table) {
            $table->id();
            $table->string('judul')->comment('Judul Berita');
            $table->text('konten')->comment('Isi Berita');
            $table->text('desk_singkat')->comment('Deskripsi Singkat Berita');
            $table->string('gambar')->nullable()->comment('Gambar Berita');
            $table->tinyInteger('pilihan')->default(0)->comment('1: pilihan, 0: tidak')->index();
            $table->tinyInteger('status')->default(1)->comment('1: Aktif, 0: Tidak Aktif')->index();
            $table->string('penulis')->comment('Penulis Berita');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ms_berita');
    }
};
