<?php

namespace App\Models;

class School extends BaseModel
{
    protected $table = 'ms_sekolah';

    public $fillable = [
        'nama',
        'kecamatan',
        'npsn',
        'id_grup_jenjang',
        'jenjang_sekolah',
        'status_sekolah',
        'peserta_didik',
        'rombel',
        'guru',
        'pegawai',
        'ruang_kelas',
        'ruang_lab',
        'ruang_perpus',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'total_negeri' => 'integer',
            'total_swasta' => 'integer',
            'total' => 'integer',
        ];
    }
}
