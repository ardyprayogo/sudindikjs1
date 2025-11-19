<?php

namespace App\Http\Controllers\Api;

use App\Models\StudentRepository;
use Illuminate\Http\Request;

class StudentController extends BaseApiController
{
    private StudentRepository $_studentRepository;

    public function __construct(StudentRepository $studentRepository)
    {
        $this->_studentRepository = $studentRepository;
    }

    public function getJenjang(Request $request)
    {
        $data = $this->_studentRepository->getJenjang();

        return $this->success($data);
    }

    public function getKecamatan(Request $request)
    {
        $data = $this->_studentRepository->getKecamatan();

        return $this->success($data);
    }

    public function getTotal(Request $request)
    {
        $data = $this->_studentRepository->getTotal();

        return $this->success($data);
    }
}
