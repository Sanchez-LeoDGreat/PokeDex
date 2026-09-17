<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class PokemonService extends MyUrlService
{
    public function get(int $offset = 0, int $limit = 20)
    {
        $response = $this->searchURL("pokemon/?offset={$offset}&limit={$limit}", '');
        $data = $response->getData();
        $pokemons = [];
        foreach ($data->results as $result) {
            $pokemons[] = Http::get($result->url)->object();
        }
        return response()->json([
            'next' => $data->next,
            'previous' => $data->previous,
            'pokemons' => $pokemons
        ]);
    }

    public function search(string $string)
    {
        return $this->searchURL("pokemon", $string);
    }
}
