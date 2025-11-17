<?php

namespace App\Models;

class Gallery extends BaseModel
{
    protected $table = 'ms_galeri';

    public $fillable = [
        'judul',
        'gambar',
        'deskripsi',
        'status',
    ];
}
