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
        Schema::create('ms_kategori_berita', function (Blueprint $table) {
            $table->id();
            $table->string('kategori')->comment('Kategori')->unique();
            $table->tinyInteger('status')->default(1)->comment('1: Aktif, 0: Tidak Aktif')->index();
            $table->timestamps();
        });
        Schema::table('ms_berita', function (Blueprint $table) {
            $table->integer('kategori_id')->comment('ID Kategori')->index()->nullable()->after('id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ms_kategori_berita');
        Schema::table('ms_news', function (Blueprint $table) {
            $table->dropColumn('kategori_id');
        });
    }
};
