<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Patient extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'gender',
        'age',
        'blood_group',
        'marital_status',
        'phone',
        'address',
        'note'
    ];

    /**
     * Get the histories of the patient.
     */
    public function histories(): HasMany
    {
        return $this->hasMany(PatientHistory::class);
    }
}
