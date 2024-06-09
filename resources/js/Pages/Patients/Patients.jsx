import { DataTable } from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { columns } from "./columns";
import { useState } from "react";

const PatientsPage = ({ auth, patients }) => {
    const [pagination, setPagination] = useState({
        pageIndex: 0, //initial page index
        pageSize: 10, //default page size
    });

    console.log(patients);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Patients
                </h2>
            }
        >
            <Head title="Patients" />
            <DataTable
                columns={columns}
                data={patients}
                pagination={pagination}
                setPagination={setPagination}
            />
        </AuthenticatedLayout>
    );
};

export default PatientsPage;
