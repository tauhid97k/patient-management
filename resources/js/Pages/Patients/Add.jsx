import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";

const PatientCreatePage = ({ auth }) => {
    const { processing, post } = useForm({});

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add Patient" />
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-medium text-gray-300">
                    Add Patient
                </h2>
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
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Patient name"
                            className="input"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="gender" className="mb-2 text-gray-300">
                            Gender
                        </label>
                        <select id="gender" name="gender" className="input">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="blood_group"
                            className="mb-2 text-gray-300"
                        >
                            Blood Group
                        </label>
                        <select
                            id="blood_group"
                            name="blood_group"
                            className="input"
                        >
                            <option value="A_Positive">A Positive</option>
                            <option value="A_Negative">A Negative</option>
                            <option value="B_Positive">B Positive</option>
                            <option value="B_Negative">B Negative</option>
                            <option value="AB_Positive">AB Positive</option>
                            <option value="AB_Negative">AB Negative</option>
                            <option value="O_Positive">O Positive</option>
                            <option value="O_Negative">O Negative</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="marital_status"
                            className="mb-2 text-gray-300"
                        >
                            Marital Status
                        </label>
                        <select
                            id="marital_status"
                            name="marital_status"
                            className="input"
                        >
                            <option value="Married">Married</option>
                            <option value="Unmarried">Unmarried</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="mb-2 text-gray-300">
                            Phone
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Phone number"
                            className="input"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="address" className="mb-2 text-gray-300">
                            Address
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            placeholder="Address"
                            className="input"
                            rows={2}
                        ></textarea>
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
                            id="note"
                            name="note"
                            placeholder="Note"
                            className="input"
                            rows={3}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn mt-6">
                        {processing ? (
                            <span className="flex items-center gap-2">
                                <LoaderCircle className="size-5 animate-spin text-white" />{" "}
                                Add Patient
                            </span>
                        ) : (
                            "Add Patient"
                        )}
                    </button>
                </fieldset>
            </form>
        </AuthenticatedLayout>
    );
};

export default PatientCreatePage;
