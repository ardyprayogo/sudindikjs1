<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ms_grup_jenjang', function (Blueprint $table) {
            $table->id();
            $table->string('grup_jenjang', '15')->index();
            $table->tinyInteger('status')->default(1)->comment('1: Aktif, 0: Tidak Aktif')->index();
            $table->timestamps();
        });

        DB::table('ms_grup_jenjang')->insert(
            [['grup_jenjang' => 'TK & KB'],
                ['grup_jenjang' => 'SD'],
                ['grup_jenjang' => 'SMP'],
                ['grup_jenjang' => 'SMA'],
                ['grup_jenjang' => 'SMK'],
                ['grup_jenjang' => 'SPS'],
                ['grup_jenjang' => 'TPA'],
                ['grup_jenjang' => 'PKBM/SKB'],
                ['grup_jenjang' => 'SLB'], ]
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ms_grup_jenjang');
    }
};
