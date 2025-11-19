<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;

class StudentRepository
{
    public function getJenjang()
    {
        $data = School::active()
            ->join('ms_grup_jenjang', function ($join) {
                $join->on('ms_sekolah.id_grup_jenjang', '=', 'ms_grup_jenjang.id');
            })
            ->select(
                'ms_grup_jenjang.grup_jenjang as jenjang',
                DB::raw("sum(if(ms_sekolah.status_sekolah = 'negeri', ms_sekolah.peserta_didik, 0)) as total_negeri"),
                DB::raw("sum(if(ms_sekolah.status_sekolah = 'swasta', ms_sekolah.peserta_didik, 0)) as total_swasta"),
                DB::raw('sum(ms_sekolah.peserta_didik) as total')
            )
            ->groupBy('ms_grup_jenjang.id')
            ->get();

        return $data;
    }

    public function getKecamatan()
    {
        $data = School::active()
            ->select(
                'ms_sekolah.kecamatan',
                DB::raw("sum(if(ms_sekolah.`status_sekolah` = 'negeri', ms_sekolah.peserta_didik, 0)) as total_negeri"),
                DB::raw("sum(if(ms_sekolah.`status_sekolah` = 'swasta', ms_sekolah.peserta_didik, 0)) as total_swasta"),
                DB::raw('sum(ms_sekolah.peserta_didik) as total')
            )
            ->groupBy('ms_sekolah.kecamatan')
            ->get();

        return $data;
    }

    public function getTotal()
    {
        $data = School::active()
            ->select(
                DB::raw('sum(ms_sekolah.peserta_didik) as total'),
                DB::raw("sum(if(ms_sekolah.`status_sekolah` = 'negeri', ms_sekolah.peserta_didik, 0)) as total_negeri"),
                DB::raw("sum(if(ms_sekolah.`status_sekolah` = 'swasta', ms_sekolah.peserta_didik, 0)) as total_swasta")
            )
            ->get();

        return $data;
    }
}
