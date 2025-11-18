<?php

namespace App\Models;

class MainServiceRepository
{
    public function getData($request)
    {
        $data = MainService::active()
            ->latest()
            ->where('judul', 'like', "%$request->search%")
            ->paginate(10);

        return $data;
    }

    public function getDetail($request)
    {
        $data = MainService::active()
            ->where('id', $request->id)
            ->first();

        return $data;
    }
}
