import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { DataTable } from "@/Components/Table";
import { columns } from "./Histories/columns";

const ShowPatientPage = ({ auth, patient, histories }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Patient Details" />
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-medium text-gray-300">
                    Patient Details
                </h2>
                <Link href={route("patients.index")} className="btn-muted">
                    Go Back
                </Link>
            </div>

            <div className="flex gap-5">
                <img
                    src="https://i.pravatar.cc/230"
                    width={230}
                    height={230}
                    alt=""
                />

                <div>
                    <h2 className="text-lg">
                        <span className="text-gray-400 font-medium">Name:</span>
                        <span className="text-gray-500"> {patient.name}</span>
                    </h2>
                    <h3 className="text-lg">
                        <span className="text-gray-400 font-medium">Age:</span>
                        <span className="text-gray-500"> {patient.age}</span>
                    </h3>
                    <p className="text-lg">
                        <span className="text-gray-400 font-medium">
                            Gender:
                        </span>
                        <span className="text-gray-500 capitalize">
                            {" "}
                            {patient.gender}
                        </span>
                    </p>
                    <p className="text-lg">
                        <span className="text-gray-400 font-medium">
                            Blood Group:
                        </span>
                        <span className="text-gray-500 uppercase">
                            {" "}
                            {patient.blood_group.split("_").join(" ")}
                        </span>
                    </p>
                    <p className="text-lg">
                        <span className="text-gray-400 font-medium">
                            Marital Status:
                        </span>
                        <span className="text-gray-500 capitalize">
                            {" "}
                            {patient.marital_status}
                        </span>
                    </p>
                    <p className="text-lg">
                        <span className="text-gray-400 font-medium">
                            Phone:
                        </span>
                        <span className="text-gray-500 capitalize">
                            {" "}
                            {patient.phone}
                        </span>
                    </p>
                    <p className="text-lg">
                        <span className="text-gray-400 font-medium">
                            Address:
                        </span>
                        <span className="text-gray-500 capitalize">
                            {" "}
                            {patient.address}
                        </span>
                    </p>
                    <p className="text-lg">
                        <span className="text-gray-400 font-medium">Note:</span>
                        <span className="text-gray-500 capitalize">
                            {" "}
                            {patient.note}
                        </span>
                    </p>
                </div>
            </div>

            <div className="mt-10 space-y-4">
                <h4 className="text-lg text-gray-300">Patient Histories</h4>
                <DataTable columns={columns} data={histories} />
            </div>
        </AuthenticatedLayout>
    );
};

export default ShowPatientPage;
