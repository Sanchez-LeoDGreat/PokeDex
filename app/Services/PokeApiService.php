<?php

namespace App\Services;

use App\Services\AbilityService;
use App\Services\EggGroupService;
use App\Services\MoveService;
use App\Services\PokemonService;

class PokeApiService
{
    public $pokemon;
    public $ability;
    public $eggGroup;
    public $move;

    public function __construct()
    {
        $this->pokemon = new PokemonService();
        $this->ability = new AbilityService();
        $this->eggGroup = new EggGroupService();
        $this->move = new MoveService();
    }
}
