<?php

namespace App\Http\Controllers;

use App\Services\PokeApiService;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function show()
    {
        return Inertia::render("Home");
    }
}
