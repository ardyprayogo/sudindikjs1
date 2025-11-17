<?php

namespace App\Models;

class NewsRepository
{
    public function getData($request)
    {
        $data = News::active()
            ->join('ms_kategori_berita', 'ms_kategori_berita.id', 'ms_berita.kategori_id')
            ->where(function ($q) use ($request) {
                $isSelected = $request->boolean('pilihan');
                if (isset($request->kategori_id)) {
                    $q->where('kategori_id', $request->kategori_id);
                }
                if (isset($request->search)) {
                    $q->where('judul', 'like', "%$request->search%");
                }
                if ($isSelected) {
                    $q->where('pilihan', 1);
                }
            })
            ->select(
                'ms_berita.*',
                'ms_kategori_berita.kategori'
            )
            ->latest()
            ->paginate(10);

        return $data;
    }

    public function getDetail($request)
    {
        $data = News::active()
            ->where('ms_berita.id', $request->id)
            ->join('ms_kategori_berita', 'ms_kategori_berita.id', 'ms_berita.kategori_id')
            ->first();

        return $data;
    }
}
