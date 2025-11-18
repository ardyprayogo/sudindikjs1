<?php

namespace App\Http\Controllers\Api;

use App\Models\MainServiceRepository;
use Illuminate\Http\Request;

class MainServiceController extends BaseApiController
{
    private MainServiceRepository $_mainServiceRepository;

    public function __construct(MainServiceRepository $mainServiceRepository)
    {
        $this->_mainServiceRepository = $mainServiceRepository;
    }

    public function getData(Request $request)
    {
        $data = $this->_mainServiceRepository->getData($request);

        return $this->success($data->getCollection(), [
            'current_page' => $data->currentPage(),
            'last_page' => $data->lastPage(),
            'per_page' => $data->perPage(),
            'total' => $data->total(),
        ]);
    }

    public function getDetail(Request $request)
    {
        $detail = $this->_mainServiceRepository->getDetail($request);

        return $this->success($detail);
    }
}
