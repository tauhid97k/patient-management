import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <h2 className="text-xl font-medium text-gray-300">Dashboard</h2>
        </AuthenticatedLayout>
    );
}
