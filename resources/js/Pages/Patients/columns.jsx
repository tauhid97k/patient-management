import { Link } from "@inertiajs/react";

export const columns = [
    {
        header: "Name",
        accessorKey: "name",
    },
    {
        header: "Age",
        accessorKey: "age",
    },
    {
        header: "Blood Group",
        accessorKey: "blood_group",
    },
    {
        header: "Marital Status",
        accessorKey: "marital_status",
    },
    {
        header: "Phone",
        accessorKey: "phone",
    },
    {
        header: "Created At",
        accessorKey: "created_at",
    },
    {
        header: "Action",
        cell: ({ row }) => {
            const { id } = row.original;
            return (
                <div className="flex gap-4 items-center">
                    <Link
                        href={route("patients.edit", { id })}
                        className="text-blue-500"
                    >
                        Edit
                    </Link>
                    <button className="text-red-500">Delete</button>
                </div>
            );
        },
    },
];
