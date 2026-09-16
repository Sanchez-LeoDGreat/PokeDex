<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class MyUrlService
{
    public function addPathToURL(string ...$path)
    {
        return config("api.PokeApi") . '/' . implode("/", $path);
    }

    public function searchURL(string $path, string $search)
    {
        $url = $this->addPathToURL($path, $search);
        $response = Http::get($url);
        return response()->json($response->object());
    }
}
