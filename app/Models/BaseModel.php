<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{
    public function scopeActive()
    {
        return $this->where("$this->table.status", 1);
    }

    public function scopeTurnOff()
    {
        $this->status = 0;
        $this->save();
    }

    public function scopeTurnOn()
    {
        $this->status = 1;
        $this->save();
    }

    protected function casts(): array
    {
        return [
            'created_at' => 'datetime:Y-m-d H:i:s',
            'updated_at' => 'datetime:Y-m-d H:i:s',
        ];
    }
}
