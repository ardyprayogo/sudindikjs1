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
            ->where('title', 'like', "%$request->search%")
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

        return \redirect()->route('admin.news.index')->with('success', "$news->title berhasil dihapus");
    }

    public function headline(News $news): RedirectResponse
    {
        $news->headline = $news->headline ? 0 : 1;
        $news->save();
        $message = $news->headline ? 'menjadi berita utama' : 'tidak menjadi berita utama';

        return \redirect()->route('admin.news.index')->with('success', "$news->title $message");
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'title' => 'required|string|max:150',
            'news_label_id' => 'required',
            'content' => 'required|string',
            'desc' => 'required|string|max:250',
        ]);

        if ($request->has('id')) {
            $itemType = News::find($request->id);
            $itemType->update([
                'title' => $request->title,
                'content' => $request->content,
                'desc' => $request->desc,
                'author' => Auth::user()->name,
                'news_label_id' => $request->news_label_id,
            ]);
            $message = "$request->title berhasil diperbarui";
        } else {
            $request->validate([
                'image' => 'required|max:1024',
            ]);
            $path = config('app.berita_content_path');
            $coverFileName = uniqid('cover-').'.'.$request->image->extension();
            $request->image->move(public_path($path), $coverFileName);
            News::create([
                'title' => $request->title,
                'content' => $request->content,
                'desc' => $request->desc,
                'author' => Auth::user()->name,
                'news_label_id' => $request->news_label_id,
                'image' => $path.'/'.$coverFileName,
            ]);
            $message = "$request->title berhasil ditambahkan";
        }

        return \redirect()->route('admin.news.index')->with('success', $message);
    }
}
