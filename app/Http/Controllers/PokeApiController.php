<?php

namespace App\Http\Controllers;

use App\Services\PokeApiService;

class PokeApiController extends Controller
{
    private $pokeApi;

    public function __construct()
    {
        $this->pokeApi = new PokeApiService();
    }

    public function get()
    {
        $pokemons = $this->pokeApi->pokemon->get();
        return response()->json($pokemons);
    }
}
