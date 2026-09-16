<?php

namespace App\Services;

class MoveService extends MyUrlService
{
    public function search(string $string)
    {
        return $this->searchURL("move", $string);
    }
}
