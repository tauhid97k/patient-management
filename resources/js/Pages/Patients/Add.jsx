import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const PatientCreatePage = () => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Add Patient
                </h2>
            }
        >
            <Head title="Add Patient" />
        </AuthenticatedLayout>
    );
};

export default PatientCreatePage;
