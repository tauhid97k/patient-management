<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $users = User::query()->when($request->input('search'), function ($query, $search) {
            $query->where('name', 'like', "%{$search}%");
        })->where('role', 'user')->orderBy('created_at', 'DESC')->paginate()->withQueryString();

        return inertia('Users/Index', ['users' => $users, 'filters' => $request->only('search'), 'can' => [
            'create' => $request->user()->can('create', User::class),
            'edit' => $request->user()->can('update', User::class),
            'delete' => $request->user()->can('delete', User::class)
        ]]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        if ($request->user()->cannot('create', User::class)) {
            abort(403);
        }

        return inertia('Users/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'role' => 'required|in:user,admin'
        ]);

        User::create($validatedData);

        return redirect(route('users.index'))->with('message', 'User added');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        if ($request->user()->cannot('update', User::class)) {
            abort(403);
        }

        $user = User::findOrFail($id);
        return inertia('Users/Edit', ['user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'role' => 'required|in:user,admin'
        ]);

        $user = User::findOrFail($id);
        $user->update($validatedData);

        return redirect(route('users.index'))->with('message', 'User updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        if ($request->user()->cannot('delete', User::class)) {
            abort(403);
        }

        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->back()->with('message', 'User deleted');
    }
}
