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
        Schema::create('ms_sekolah', function (Blueprint $table) {
            $table->id();
            $table->string('nama', '150')->index();
            $table->string('kecamatan', '50')->index();
            $table->string('npsn', '12')->index();
            $table->integer('id_grup_jenjang')->index();
            $table->string('jenjang_sekolah', '15')->index();
            $table->string('status_sekolah', '10')->index();
            $table->integer('peserta_didik')->default(0);
            $table->integer('rombel')->default(0);
            $table->integer('guru')->default(0);
            $table->integer('pegawai')->default(0);
            $table->integer('ruang_kelas')->default(0);
            $table->integer('ruang_lab')->default(0);
            $table->integer('ruang_perpus')->default(0);
            $table->tinyInteger('status')->default(1)->comment('1: Aktif, 0: Tidak Aktif')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ms_sekolah');
    }
};
