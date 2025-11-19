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
            'rekap_sekolah_negeri' => 'integer',
            'rekap_sekolah_swasta' => 'integer',
            'rekap_sekolah_total' => 'integer',
            'rekap_pd_negeri' => 'integer',
            'rekap_pd_swasta' => 'integer',
            'rekap_pd_total' => 'integer',
            'rekap_guru_negeri' => 'integer',
            'rekap_guru_swasta' => 'integer',
            'rekap_guru_total' => 'integer',
            'rekap_tendik_negeri' => 'integer',
            'rekap_tendik_swasta' => 'integer',
            'rekap_tendik_total' => 'integer',
            'rekap_rombel_negeri' => 'integer',
            'rekap_rombel_swasta' => 'integer',
            'rekap_rombel_total' => 'integer',
        ];
    }
}
