import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";

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

            const [confirmPatientDelete, setConfirmPatientDelete] =
                useState(false);
            const { processing, delete: destroy } = useForm();

            const closeModal = () => {
                setConfirmPatientDelete(false);
            };

            const handlePatientDelete = (e) => {
                e.preventDefault();
                destroy(route("patients.destroy", { id }), {
                    preserveScroll: true,
                    onSuccess: () => closeModal(),
                });
            };

            return (
                <div className="flex gap-4 items-center">
                    <Link
                        href={route("patients.edit", { id })}
                        className="text-blue-500"
                    >
                        Edit
                    </Link>
                    <button
                        onClick={() => setConfirmPatientDelete(true)}
                        className="text-red-500"
                    >
                        Delete
                    </button>
                    <Modal show={confirmPatientDelete} onClose={closeModal}>
                        <section className="space-y-6 p-6">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                    Delete Account
                                </h2>

                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    Once patient is deleted, all of its
                                    resources and data will be permanently
                                    deleted.
                                </p>
                            </header>
                            <form
                                onSubmit={handlePatientDelete}
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
