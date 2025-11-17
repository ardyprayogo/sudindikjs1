<?php

namespace App\Http\Controllers;

use App\Models\MainService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MainServiceController extends Controller
{
    public function index(Request $request): Response
    {
        $services = MainService::active()
            ->where('judul', 'like', "%$request->search%")
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('MainService/DashboardIndex', [
            'services' => $services,
        ]);
    }

    public function create(): Response
    {

        return Inertia::render('MainService/DashboardEdit');
    }

    public function update(MainService $service): Response
    {
        return Inertia::render('MainService/DashboardEdit', ['service' => $service]);
    }

    public function delete(MainService $service): RedirectResponse
    {
        $service->turnOff();

        return \redirect()->route('dashboard.service.index')->with('success', "$service->judul berhasil dihapus");
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'judul' => 'required|string|max:150',
            'sub_judul' => 'required|string|max:150',
            'deskripsi' => 'required|string',
            'dokumen' => 'required|string',
        ]);

        if ($request->has('id')) {
            $service = MainService::find($request->id);
            $service->update([
                'judul' => $request->judul,
                'sub_judul' => $request->sub_judul,
                'dokumen' => $request->dokumen,
                'deskripsi' => $request->deskripsi,
            ]);
            $message = "$request->judul berhasil diperbarui";
        } else {
            MainService::create([
                'judul' => $request->judul,
                'sub_judul' => $request->sub_judul,
                'dokumen' => $request->dokumen,
                'deskripsi' => $request->deskripsi,
            ]);
            $message = "$request->judul berhasil ditambahkan";
        }

        return \redirect()->route('dashboard.service.index')->with('success', $message);
    }
}
