<?php

namespace App\Http\Controllers\Api;

use App\Models\SchoolRepository;
use Illuminate\Http\Request;

class SchoolController extends BaseApiController
{
    private SchoolRepository $_schoolRepository;

    public function __construct(SchoolRepository $schoolRepository)
    {
        $this->_schoolRepository = $schoolRepository;
    }

    public function getJenjang(Request $request)
    {
        $data = $this->_schoolRepository->getJenjang();

        return $this->success($data);
    }

    public function getKecamatan(Request $request)
    {
        $data = $this->_schoolRepository->getKecamatan();

        return $this->success($data);
    }

    public function getTotal(Request $request)
    {
        $data = $this->_schoolRepository->getTotal();

        return $this->success($data);
    }
}
