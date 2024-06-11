import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";

const UserCreatePage = ({ auth }) => {
    const { setData, processing, errors, post } = useForm({
        name: "",
        email: "",
        password: "",
        role: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("users.store"));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="User Patient" />
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-medium text-gray-300">Add User</h2>
                <Link href={route("patients.index")} className="btn-muted">
                    Go Back
                </Link>
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
                            onChange={(e) => setData("name", e.target.value)}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="User name"
                            className="input"
                        />
                        {errors.name && (
                            <p className="mt-1 text-red-400">{errors.name}</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 text-gray-300">
                            Email
                        </label>
                        <input
                            onChange={(e) => setData("email", e.target.value)}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="input"
                        />
                        {errors.email && (
                            <p className="mt-1 text-red-400">{errors.email}</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="password"
                            className="mb-2 text-gray-300"
                        >
                            Password
                        </label>
                        <input
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="input"
                        />
                        {errors.password && (
                            <p className="mt-1 text-red-400">
                                {errors.password}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="role" className="mb-2 text-gray-300">
                            Role
                        </label>
                        <select
                            onChange={(e) => setData("role", e.target.value)}
                            id="role"
                            name="role"
                            className="input"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                        {errors.role && (
                            <p className="mt-1 text-red-400">{errors.role}</p>
                        )}
                    </div>
                    <button type="submit" className="btn mt-6">
                        {processing ? (
                            <span className="flex items-center gap-2">
                                <LoaderCircle className="size-5 animate-spin text-white" />
                                Adding User
                            </span>
                        ) : (
                            "Add User"
                        )}
                    </button>
                </fieldset>
            </form>
        </AuthenticatedLayout>
    );
};

export default UserCreatePage;
