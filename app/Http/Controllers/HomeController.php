<?php

namespace App\Http\Controllers;

use App\Services\PokeApiService;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function show()
    {
        $pokeApi = new PokeApiService();
        $pokemons = $pokeApi->pokemon->getFirst20();
        return Inertia::render("Home", [
            'pokemons' => $pokemons
        ]);
    }
}
