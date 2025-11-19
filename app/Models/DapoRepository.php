<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;

class DapoRepository
{
    public function getKecamatan()
    {
        $rekapSekolah = School::active()
            ->select(
                'ms_sekolah.kecamatan',
                DB::raw("sum(if(ms_sekolah.`status_sekolah` = 'negeri', 1, 0)) as total_negeri"),
                DB::raw("sum(if(ms_sekolah.`status_sekolah` = 'swasta', 1, 0)) as total_swasta"),
                DB::raw('count(*) as total')
            )
            ->groupBy('ms_sekolah.kecamatan');
        $rekapPd = School::active()
            ->select(
                'ms_sekolah.kecamatan',
                DB::raw("sum(if(ms_sekolah.`status_sekolah` = 'negeri', ms_sekolah.peserta_didik, 0)) as total_negeri"),
                DB::raw("sum(if(ms_sekolah.`status_sekolah` = 'swasta', ms_sekolah.peserta_didik, 0)) as total_swasta"),
                DB::raw('sum(ms_sekolah.peserta_didik) as total')
            )
            ->groupBy('ms_sekolah.kecamatan');
        $rekapGuru = School::active()
            ->select(
                'ms_sekolah.kecamatan',
                DB::raw("sum(if(ms_sekolah.`status_sekolah` = 'negeri', ms_sekolah.guru, 0)) as total_negeri"),
                DB::raw("sum(if(ms_sekolah.`status_sekolah` = 'swasta', ms_sekolah.guru, 0)) as total_swasta"),
                DB::raw('sum(ms_sekolah.guru) as total')
            )
            ->groupBy('ms_sekolah.kecamatan');
        $rekapTendik = School::active()
            ->select(
                'ms_sekolah.kecamatan',
                DB::raw("sum(if(ms_sekolah.`status_sekolah` = 'negeri', ms_sekolah.pegawai, 0)) as total_negeri"),
                DB::raw("sum(if(ms_sekolah.`status_sekolah` = 'swasta', ms_sekolah.pegawai, 0)) as total_swasta"),
                DB::raw('sum(ms_sekolah.pegawai) as total')
            )
            ->groupBy('ms_sekolah.kecamatan');
        $rekapRombel = School::active()
            ->select(
                'ms_sekolah.kecamatan',
                DB::raw("sum(if(ms_sekolah.`status_sekolah` = 'negeri', ms_sekolah.rombel, 0)) as total_negeri"),
                DB::raw("sum(if(ms_sekolah.`status_sekolah` = 'swasta', ms_sekolah.rombel, 0)) as total_swasta"),
                DB::raw('sum(ms_sekolah.rombel) as total')
            )
            ->groupBy('ms_sekolah.kecamatan');
        $data = School::select(
            DB::raw('DISTINCT ms_sekolah.kecamatan'),
            DB::raw('rekap_sekolah.total_negeri AS rekap_sekolah_negeri'),
            DB::raw('rekap_sekolah.total_swasta AS rekap_sekolah_swasta'),
            DB::raw('rekap_sekolah.total AS rekap_sekolah_total'),
            DB::raw('rekap_pd.total_negeri AS rekap_pd_negeri'),
            DB::raw('rekap_pd.total_swasta AS rekap_pd_swasta'),
            DB::raw('rekap_pd.total AS rekap_pd_total'),
            DB::raw('rekap_guru.total_negeri AS rekap_guru_negeri'),
            DB::raw('rekap_guru.total_swasta AS rekap_guru_swasta'),
            DB::raw('rekap_guru.total AS rekap_guru_total'),
            DB::raw('rekap_tendik.total_negeri AS rekap_tendik_negeri'),
            DB::raw('rekap_tendik.total_swasta AS rekap_tendik_swasta'),
            DB::raw('rekap_tendik.total AS rekap_tendik_total'),
            DB::raw('rekap_rombel.total_negeri AS rekap_rombel_negeri'),
            DB::raw('rekap_rombel.total_swasta AS rekap_rombel_swasta'),
            DB::raw('rekap_rombel.total AS rekap_rombel_total')
        )
            ->joinSub($rekapSekolah, 'rekap_sekolah', function ($join) {
                $join->on('rekap_sekolah.kecamatan', '=', 'ms_sekolah.kecamatan');
            })
            ->joinSub($rekapPd, 'rekap_pd', function ($join) {
                $join->on('rekap_pd.kecamatan', '=', 'ms_sekolah.kecamatan');
            })
            ->joinSub($rekapGuru, 'rekap_guru', function ($join) {
                $join->on('rekap_guru.kecamatan', '=', 'ms_sekolah.kecamatan');
            })
            ->joinSub($rekapTendik, 'rekap_tendik', function ($join) {
                $join->on('rekap_tendik.kecamatan', '=', 'ms_sekolah.kecamatan');
            })
            ->joinSub($rekapRombel, 'rekap_rombel', function ($join) {
                $join->on('rekap_rombel.kecamatan', '=', 'ms_sekolah.kecamatan');
            })
            ->get();

        return $data;
    }
}
