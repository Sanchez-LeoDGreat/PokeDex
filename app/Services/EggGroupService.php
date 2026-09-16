<?php

namespace App\Services;

class EggGroupService extends MyUrlService
{
    public function search(string $string)
    {
        return $this->searchURL("egg-group", $string);
    }
}
