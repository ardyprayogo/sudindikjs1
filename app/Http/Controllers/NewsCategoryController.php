<?php

namespace App\Http\Controllers;

use App\Models\NewsCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class NewsCategoryController extends Controller
{
    public function index(Request $request): Response
    {
        $categories = NewsCategory::active()
            ->where('kategori', 'like', "%$request->search%")
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('NewsCategory/DashboardIndex', [
            'categories' => $categories,
        ]);
    }

    public function create(): Response
    {

        return Inertia::render('NewsCategory/DashboardEdit');
    }

    public function update(NewsCategory $category): Response
    {
        return Inertia::render('NewsCategory/DashboardEdit', ['category' => $category]);
    }

    public function delete(NewsCategory $category): RedirectResponse
    {
        $category->turnOff();

        return \redirect()->route('dashboard.newsCategory.index')->with('success', "$category->kategori berhasil dihapus");
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'kategori' => 'required|string|max:150|unique:ms_kategori_berita',
        ]);

        if ($request->has('id')) {
            $itemType = NewsCategory::find($request->id);
            $itemType->update([
                'kategori' => $request->kategori,
            ]);
            $message = "$request->kategori berhasil diperbarui";
        } else {
            NewsCategory::create([
                'kategori' => $request->kategori,
            ]);
            $message = "$request->kategori berhasil ditambahkan";
        }

        return \redirect()->route('dashboard.newsCategory.index')->with('success', $message);
    }
}
