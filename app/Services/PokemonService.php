<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class PokemonService extends MyUrlService
{
    public function getFirst20()
    {
        $response = $this->searchURL("pokemon", '');
        $data = $response->getData();
        $pokemons = [];
        foreach ($data->results as $result) {
            $pokemons[] = Http::get($result->url)->object();
        }
        return response()->json($pokemons);
    }

    public function search(string $string)
    {
        return $this->searchURL("pokemon", $string);
    }
}
