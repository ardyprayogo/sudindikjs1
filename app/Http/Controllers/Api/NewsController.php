<?php

namespace App\Http\Controllers\Api;

use App\Models\NewsRepository;
use Illuminate\Http\Request;

class NewsController extends BaseApiController
{
    private NewsRepository $_newsRepository;

    public function __construct(NewsRepository $newsRepository)
    {
        $this->_newsRepository = $newsRepository;
    }

    public function getData(Request $request)
    {
        $data = $this->_newsRepository->getData($request);

        return $this->success($data->getCollection(), [
            'current_page' => $data->currentPage(),
            'last_page' => $data->lastPage(),
            'per_page' => $data->perPage(),
            'total' => $data->total(),
        ]);
    }

    public function getDetail(Request $request)
    {
        $detail = $this->_newsRepository->getDetail($request);

        return $this->success($detail);
    }
}
