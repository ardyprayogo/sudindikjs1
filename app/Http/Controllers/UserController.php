<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(Request $request): Response
    {
        $users = User::where('name', 'like', "%$request->search%")
            ->where('status', 1)
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('User/DashboardIndex', [
            'users' => $users,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('User/DashboardEdit');
    }

    public function update(User $user): Response
    {
        return Inertia::render('User/DashboardEdit', ['user' => $user]);
    }

    public function delete(User $user): RedirectResponse
    {
        $user->status = 0;
        $user->save();

        return \redirect()->route('dashboard.user.index')->with('success', "$user->name berhasil dihapus");
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        if ($request->has('id')) {
            $request->validate([
                'email' => 'required|string|lowercase|email|max:255',
            ]);
            $user = User::find($request->id);
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            $message = "$request->name berhasil diperbarui";
        } else {
            $request->validate([
                'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            ]);
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            $message = "$request->name berhasil ditambahkan";
        }

        return \redirect()->route('dashboard.user.index')->with('success', $message);
    }
}
