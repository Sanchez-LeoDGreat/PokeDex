<?php

use App\Http\Controllers\PokeApiController;
use Illuminate\Support\Facades\Route;

Route::get('/pokemons', [PokeApiController::class, 'get'])->name('pokemons');
Route::get('/pokemons/more/{offset}/{limit}', [PokeApiController::class, 'more'])->name('pokemons.more');
