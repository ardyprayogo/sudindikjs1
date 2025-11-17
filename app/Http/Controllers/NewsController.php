<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\NewsCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class NewsController extends Controller
{
    public function index(Request $request): Response
    {
        $news = News::active()
            ->where('judul', 'like', "%$request->search%")
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render(
            'News/DashboardIndex',
            [
                'news' => $news,
            ]
        );
    }

    public function create(): Response
    {
        $categories = NewsCategory::active()->orderBy('kategori')->get();

        return Inertia::render('News/DashboardEdit', ['categories' => $categories]);
    }

    public function update(News $news): Response
    {
        $categories = NewsCategory::active()->orderBy('kategori')->get();

        return Inertia::render('News/DashboardEdit', ['categories' => $categories, 'news' => $news]);
    }

    public function delete(News $news): RedirectResponse
    {
        $news->turnOff();

        return \redirect()->route('dashboard.news.index')->with('success', "$news->title berhasil dihapus");
    }

    public function headline(News $news): RedirectResponse
    {
        $news->headline = $news->headline ? 0 : 1;
        $news->save();
        $message = $news->headline ? 'menjadi berita utama' : 'tidak menjadi berita utama';

        return \redirect()->route('dashboard.news.index')->with('success', "$news->title $message");
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'judul' => 'required|string|max:150',
            'kategori_id' => 'required',
            'konten' => 'required|string',
            'gambar' => 'required|string',
            'desk_singkat' => 'required|string|max:250',
        ]);

        if ($request->has('id')) {
            $news = News::find($request->id);
            $news->update([
                'judul' => $request->judul,
                'kategori_id' => $request->kategori_id,
                'konten' => $request->konten,
                'gambar' => $request->gambar,
                'penulis' => Auth::user()->name,
                'desk_singkat' => $request->desk_singkat,
            ]);
            $message = "$request->judul berhasil diperbarui";
        } else {
            // $request->validate([
            //     'gambar' => 'required|max:1024',
            // ]);
            // $path = config('app.path_gambar_berita');
            // $coverFileName = uniqid('cover-').'.'.$request->gambar->extension();
            // $request->gambar->move(public_path($path), $coverFileName);
            News::create([
                'judul' => $request->judul,
                'kategori_id' => $request->kategori_id,
                'konten' => $request->konten,
                'gambar' => $request->gambar,
                'penulis' => Auth::user()->name,
                'desk_singkat' => $request->desk_singkat,
                // 'gambar' => $path.'/'.$coverFileName,
            ]);
            $message = "$request->title berhasil ditambahkan";
        }

        return \redirect()->route('dashboard.news.index')->with('success', $message);
    }
}
