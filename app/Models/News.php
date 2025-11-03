<?php

namespace App\Models;

class News extends BaseModel
{
    protected $table = 'ms_berita';

    protected $fillable = [
        'judul',
        'konten',
        'desk_singkat',
        'gambar',
        'pilihan',
        'status',
        'penulis',
    ];
}
