import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const PatientCreatePage = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add Patient" />
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-medium text-gray-300">
                    Add Patient
                </h2>
            </div>
        </AuthenticatedLayout>
    );
};

export default PatientCreatePage;
