<?php

namespace App\Models;

class GalleryRepository
{
    public function getData($request)
    {
        $data = Gallery::active()
            ->latest()
            ->where('judul', 'like', "%$request->search%")
            ->paginate(10);

        return $data;
    }

    public function getDetail($request)
    {
        $data = Gallery::active()
            ->where('id', $request->id)
            ->first();

        return $data;
    }
}
