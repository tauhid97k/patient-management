import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { usePage } from "@inertiajs/react";

export const columns = [
    {
        header: "Name",
        accessorKey: "name",
    },
    {
        header: "Email",
        accessorKey: "email",
    },
    {
        header: "Role",
        accessorKey: "role",
        cell: ({ row }) => {
            const { role } = row.original;
            return (
                <>
                    {role === "admin" ? (
                        <span className="px-3 py-1 capitalize rounded-full bg-red-800 text-red-300 font-medium">
                            {role}
                        </span>
                    ) : (
                        <span className="px-3 py-1 capitalize rounded-full bg-gray-700 text-gray-300 font-medium">
                            {role}
                        </span>
                    )}
                </>
            );
        },
    },
    {
        header: "Created At",
        accessorKey: "created_at",
    },
    {
        header: "Action",
        cell: ({ row }) => {
            const { id } = row.original;
            const { can } = usePage().props;

            const [confirmUserDelete, setConfirmUserDelete] = useState(false);
            const { processing, delete: destroy } = useForm();

            const closeModal = () => {
                setConfirmUserDelete(false);
            };

            const handleUserDelete = (e) => {
                e.preventDefault();
                destroy(route("users.destroy", { id }), {
                    preserveScroll: true,
                    onSuccess: () => closeModal(),
                });
            };

            return (
                <div className="flex gap-4 items-center">
                    {can?.edit && (
                        <Link
                            href={route("users.edit", { id })}
                            className="text-blue-500"
                        >
                            Edit
                        </Link>
                    )}
                    {can?.delete && (
                        <button
                            onClick={() => setConfirmUserDelete(true)}
                            className="text-red-500"
                        >
                            Delete
                        </button>
                    )}
                    <Modal show={confirmUserDelete} onClose={closeModal}>
                        <section className="space-y-6 p-6">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                    Delete Account
                                </h2>

                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    Once user is deleted, all of its resources
                                    and data will be permanently deleted.
                                </p>
                            </header>
                            <form
                                onSubmit={handleUserDelete}
                                className="flex justify-end"
                            >
                                <div className="mt-6 flex justify-end">
                                    <SecondaryButton onClick={closeModal}>
                                        Cancel
                                    </SecondaryButton>

                                    <DangerButton
                                        className="ms-3"
                                        disabled={processing}
                                    >
                                        Delete Account
                                    </DangerButton>
                                </div>
                            </form>
                        </section>
                    </Modal>
                </div>
            );
        },
    },
];
