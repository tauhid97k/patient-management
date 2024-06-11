import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, data }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <h2 className="text-xl font-medium text-gray-300">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="text-2xl text-gray-100 p-4 rounded-lg border border-gray-700 flex justify-between">
                    <h2>Users</h2>
                    <span>{data.users}</span>
                </div>
                <div className="text-2xl text-gray-100 p-4 rounded-lg border border-gray-700 flex justify-between">
                    <h2>Patients</h2>
                    <span>{data.patients}</span>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
