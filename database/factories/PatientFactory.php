<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Patient>
 */
class PatientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $gender = fake()->randomElement(['male', 'female']);
        return [
            'name' => fake()->name($gender),
            'gender' => $gender,
            'age' => rand(15, 70),
            'blood_group' => fake()->randomElement(['A_Positive', 'A_Negative', 'B_Positive', 'B_Negative', 'AB_Positive', 'AB_Negative', 'O_Positive', 'O_Negative']),
            'marital_status' => fake()->randomElement(['Married', 'Unmarried']),
            'phone' => fake()->phoneNumber(),
            'address' => fake()->address()
        ];
    }
}
