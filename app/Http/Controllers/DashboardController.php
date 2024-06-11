<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display stats.
     */
    public function index(Request $request)
    {
        $userCount = User::count();
        $patientCount = Patient::count();

        return inertia('Dashboard', ['data' => [
            'users' => $userCount,
            'patients' => $patientCount
        ]]);
    }
}
