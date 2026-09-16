<?php

namespace App\Services;

class AbilityService extends MyUrlService
{
    public function search(string $string)
    {
        return $this->searchURL("ability", $string);
    }
}
