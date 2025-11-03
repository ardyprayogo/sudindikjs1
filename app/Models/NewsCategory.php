<?php

namespace App\Models;

class NewsCategory extends BaseModel
{
    protected $table = 'ms_kategori_berita';

    protected $fillable = [
        'kategori',
        'status',
    ];
}
