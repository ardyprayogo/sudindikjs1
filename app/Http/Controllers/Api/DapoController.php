<?php

namespace App\Http\Controllers\Api;

use App\Models\DapoRepository;
use Illuminate\Http\Request;

class DapoController extends BaseApiController
{
    private DapoRepository $_dapoRepository;

    public function __construct(DapoRepository $dapoRepository)
    {
        $this->_dapoRepository = $dapoRepository;
    }

    public function getKecamatan(Request $request)
    {
        $data = $this->_dapoRepository->getKecamatan();

        return $this->success($data);
    }
}
