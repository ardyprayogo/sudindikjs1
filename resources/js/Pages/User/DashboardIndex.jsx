import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import WarningButton from "@/Components/WarningButton";
import DangerButton from "@/Components/DangerButton";
import TextInput from "@/Components/TextInput";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function DashboardIndex({ users, query }) {
    const { delete: destroy } = useForm();
    const deleteUser = (e, id) => {
        e.preventDefault();

        destroy(route("dashboard.user.delete", id));
    };
    const { data, setData, get } = useForm({
        search: query.search || "",
    });
    return (
        <AuthenticatedLayout header={"Pengguna"}>
            <div className="overflow-x-auto flex flex-col gap-2">
                <div className="flex flex-row justify-end">
                    <Link
                        className="text-end"
                        href={route("dashboard.user.create")}
                    >
                        <PrimaryButton className="flex gap-2">
                            Tambah
                        </PrimaryButton>
                    </Link>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-1 w-full lg:w-96">
                        <TextInput
                            autoComplete="off"
                            id="search"
                            name="search"
                            className="w-full"
                            placeholder="Cari Pengguna"
                            value={data.search}
                            onChange={(e) => {
                                setData("search", e.target.value);
                            }}
                        />
                        <PrimaryButton
                            onClick={(e) => {
                                e.preventDefault();
                                get(route("dashboard.user.index", data));
                            }}
                        >
                            Cari
                        </PrimaryButton>
                    </div>
                </div>
                <table className="border border-gray-200 divide-y divide-gray-200">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.data.map((userItem, i) => {
                            return (
                                <tr key={i}>
                                    <td>{userItem.name}</td>
                                    <td>{userItem.email}</td>
                                    <td>
                                        <div className="flex gap-2">
                                            <Link
                                                href={route(
                                                    "dashboard.user.update",
                                                    userItem.id
                                                )}
                                            >
                                                <WarningButton className="btn-xs">
                                                    Edit
                                                </WarningButton>
                                            </Link>
                                            <DangerButton
                                                className="btn-xs"
                                                onClick={(e) => {
                                                    {
                                                        deleteUser(
                                                            e,
                                                            userItem.id
                                                        );
                                                    }
                                                }}
                                            >
                                                Hapus
                                            </DangerButton>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Pagination links={users.links} />
            </div>
        </AuthenticatedLayout>
    );
}
