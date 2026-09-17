<?php

use App\Http\Controllers\PokeApiController;
use Illuminate\Support\Facades\Route;

Route::get('/pokemons', [PokeApiController::class, 'get'])->name('pokemons');
