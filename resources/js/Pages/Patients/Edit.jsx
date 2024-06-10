import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";

const PatientEditPage = ({ auth, patient }) => {
    const { setData, processing, errors, put } = useForm({
        name: patient.name,
        age: patient.age,
        gender: patient.gender,
        blood_group: patient.blood_group,
        marital_status: patient.marital_status,
        phone: patient.phone,
        address: patient.address,
        note: patient.note,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("patients.update", { patient: patient.id }));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Patient" />
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-medium text-gray-300">
                    Edit Patient
                </h2>
                <Link href={route("patients.index")} className="btn-muted">
                    Go Back
                </Link>
            </div>

            <form onSubmit={handleSubmit} className="mx-auto max-w-md">
                <fieldset
                    className="space-y-4 disabled:opacity-70"
                    disabled={processing}
                >
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2 text-gray-300">
                            Name
                        </label>
                        <input
                            onChange={(e) => setData("name", e.target.value)}
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={patient.name}
                            placeholder="Patient name"
                            className="input"
                        />
                        {errors.name && (
                            <p className="mt-1 text-red-400">{errors.name}</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="age" className="mb-2 text-gray-300">
                            Age
                        </label>
                        <input
                            onChange={(e) => setData("age", e.target.value)}
                            type="number"
                            id="age"
                            name="age"
                            defaultValue={patient.age}
                            placeholder="Age"
                            className="input"
                        />
                        {errors.age && (
                            <p className="mt-1 text-red-400">{errors.age}</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="gender" className="mb-2 text-gray-300">
                            Gender
                        </label>
                        <select
                            onChange={(e) => setData("gender", e.target.value)}
                            id="gender"
                            name="gender"
                            defaultValue={patient.gender}
                            className="input"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && (
                            <p className="mt-1 text-red-400">{errors.gender}</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="blood_group"
                            className="mb-2 text-gray-300"
                        >
                            Blood Group
                        </label>
                        <select
                            onChange={(e) =>
                                setData("blood_group", e.target.value)
                            }
                            id="blood_group"
                            name="blood_group"
                            defaultValue={patient.blood_group}
                            className="input"
                        >
                            <option value="a_positive">A Positive</option>
                            <option value="a_negative">A Negative</option>
                            <option value="b_positive">B Positive</option>
                            <option value="b_negative">B Negative</option>
                            <option value="ab_positive">AB Positive</option>
                            <option value="ab_negative">AB Negative</option>
                            <option value="o_positive">O Positive</option>
                            <option value="o_negative">O Negative</option>
                        </select>
                        {errors.blood_group && (
                            <p className="mt-1 text-red-400">
                                {errors.blood_group}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="marital_status"
                            className="mb-2 text-gray-300"
                        >
                            Marital Status
                        </label>
                        <select
                            onChange={(e) =>
                                setData("marital_status", e.target.value)
                            }
                            id="marital_status"
                            name="marital_status"
                            defaultValue={patient.marital_status}
                            className="input"
                        >
                            <option value="married">Married</option>
                            <option value="unmarried">Unmarried</option>
                        </select>
                        {errors.marital_status && (
                            <p className="mt-1 text-red-400">
                                {errors.marital_status}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="mb-2 text-gray-300">
                            Phone
                        </label>
                        <input
                            onChange={(e) => setData("phone", e.target.value)}
                            type="text"
                            id="phone"
                            name="phone"
                            defaultValue={patient.phone}
                            placeholder="Phone number"
                            className="input"
                        />
                        {errors.phone && (
                            <p className="mt-1 text-red-400">{errors.phone}</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="address" className="mb-2 text-gray-300">
                            Address
                        </label>
                        <textarea
                            onChange={(e) => setData("address", e.target.value)}
                            id="address"
                            name="address"
                            defaultValue={patient.address}
                            placeholder="Address"
                            className="input"
                            rows={2}
                        ></textarea>
                        {errors.address && (
                            <p className="mt-1 text-red-400">
                                {errors.address}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="note"
                            className="flex gap-1 items-center mb-2 text-gray-300"
                        >
                            <span>Note</span>
                            <span className="text-sm text-gray-500">
                                (Optional)
                            </span>
                        </label>
                        <textarea
                            onChange={(e) => setData("note", e.target.value)}
                            id="note"
                            name="note"
                            defaultValue={patient.note}
                            placeholder="Note"
                            className="input"
                            rows={3}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn mt-6">
                        {processing ? (
                            <span className="flex items-center gap-2">
                                <LoaderCircle className="size-5 animate-spin text-white" />
                                Updating Patient
                            </span>
                        ) : (
                            "Update Patient"
                        )}
                    </button>
                </fieldset>
            </form>
        </AuthenticatedLayout>
    );
};

export default PatientEditPage;
