<?php

namespace App\Models;

class News extends BaseModel
{
    protected $table = 'ms_berita';

    protected $fillable = [
        'judul',
        'kategori_id',
        'konten',
        'desk_singkat',
        'gambar',
        'pilihan',
        'status',
        'penulis',
    ];
}
