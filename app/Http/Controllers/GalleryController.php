<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GalleryController extends Controller
{
    public function index(Request $request): Response
    {
        $galleries = Gallery::active()
            ->where('judul', 'like', "%$request->search%")
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Gallery/DashboardIndex', [
            'galleries' => $galleries,
        ]);
    }

    public function create(): Response
    {

        return Inertia::render('Gallery/DashboardEdit');
    }

    public function update(Gallery $gallery): Response
    {
        return Inertia::render('Gallery/DashboardEdit', ['gallery' => $gallery]);
    }

    public function delete(Gallery $gallery): RedirectResponse
    {
        $gallery->turnOff();

        return \redirect()->route('dashboard.gallery.index')->with('success', "$gallery->judul berhasil dihapus");
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'judul' => 'required|string|max:150',
            'gambar' => 'required|string',
            'deskripsi' => 'required|string',
        ]);

        if ($request->has('id')) {
            $gallery = Gallery::find($request->id);
            $gallery->update([
                'judul' => $request->judul,
                'gambar' => $request->gambar,
                'deskripsi' => $request->deskripsi,
            ]);
            $message = "$request->judul berhasil diperbarui";
        } else {
            Gallery::create([
                'judul' => $request->judul,
                'gambar' => $request->gambar,
                'deskripsi' => $request->deskripsi,
            ]);
            $message = "$request->judul berhasil ditambahkan";
        }

        return \redirect()->route('dashboard.gallery.index')->with('success', $message);
    }
}
