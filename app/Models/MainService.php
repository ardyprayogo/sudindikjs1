<?php

namespace App\Models;

class MainService extends BaseModel
{
    protected $table = 'ms_layanan_utama';

    public $fillable = [
        'judul',
        'sub_judul',
        'deskripsi',
        'dokumen',
        'status',
    ];
}
