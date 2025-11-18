<?php

namespace App\Http\Controllers\Api;

use App\Models\GalleryRepository;
use Illuminate\Http\Request;

class GalleryController extends BaseApiController
{
    private GalleryRepository $_galleryRepository;

    public function __construct(GalleryRepository $galleryRepository)
    {
        $this->_galleryRepository = $galleryRepository;
    }

    public function getData(Request $request)
    {
        $data = $this->_galleryRepository->getData($request);

        return $this->success($data->getCollection(), [
            'current_page' => $data->currentPage(),
            'last_page' => $data->lastPage(),
            'per_page' => $data->perPage(),
            'total' => $data->total(),
        ]);
    }

    public function getDetail(Request $request)
    {
        $detail = $this->_galleryRepository->getDetail($request);

        return $this->success($detail);
    }
}
