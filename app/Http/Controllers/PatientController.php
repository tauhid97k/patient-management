<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use App\Http\Requests\StorePatientRequest;
use App\Http\Requests\UpdatePatientRequest;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $patients = Patient::query()->when($request->input('search'), function ($query, $search) {
            $query->where('name', 'like', "%{$search}%");
        })->orderBy('created_at', 'DESC')->paginate()->withQueryString();

        return inertia('Patients/Index', ['patients' => $patients, 'filters' => $request->only('search'), 'can' => [
            'edit' => $request->user()->can('update', Patient::class),
            'delete' => $request->user()->can('delete', Patient::class)
        ]]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Patients/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePatientRequest $request)
    {
        Patient::create($request->validated());

        return redirect(route('patients.index'))->with('message', 'Patient added');
    }

    /**
     * Display the specified resource.
     */
    public function show(Patient $patient)
    {
        $patient = Patient::findOrFail($patient->id);
        $histories = $patient->histories()->latest()->paginate();
        return inertia('Patients/Show', ['patient' => $patient, 'histories' => $histories]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, Patient $patient)
    {
        if ($request->user()->cannot('update', Patient::class)) {
            abort(403);
        }

        $patient = Patient::findOrFail($patient->id);
        return inertia('Patients/Edit', ['patient' => $patient]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePatientRequest $request, Patient $patient)
    {
        if ($request->user()->cannot('update', Patient::class)) {
            abort(403);
        }

        $patient = Patient::findOrFail($patient->id);
        $patient->update($request->validated());

        return redirect(route('patients.index'))->with('message', 'Patient updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Patient $patient)
    {
        if ($request->user()->cannot('delete', Patient::class)) {
            abort(403);
        }

        $patient->delete();

        return redirect()->back()->with('message', 'Patient deleted');
    }
}
