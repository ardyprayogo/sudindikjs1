import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import WarningButton from "@/Components/WarningButton";
import DangerButton from "@/Components/DangerButton";
import TextInput from "@/Components/TextInput";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function DashboardIndex({ services, query }) {
    const { delete: destroy } = useForm();
    const deleteGallery = (id) => {
        destroy(route("dashboard.service.delete", id));
    };
    const { data, setData, get } = useForm({
        search: query.search || "",
    });
    return (
        <AuthenticatedLayout header={"Layanan Utama"}>
            <div className="overflow-x-auto flex flex-col gap-2">
                <div className="flex flex-row justify-end">
                    <Link
                        className="text-end"
                        href={route("dashboard.service.create")}
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
                            placeholder="Cari Galeri"
                            value={data.search}
                            onChange={(e) => {
                                setData("search", e.target.value);
                            }}
                        />
                        <PrimaryButton
                            onClick={(e) => {
                                e.preventDefault();
                                get(route("dashboard.service.index", data));
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
                            <th>Judul</th>
                            <th>Sub Judul</th>
                            <th>Link Dokumen</th>
                            <th>Deskripsi</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.data.map((category, i) => {
                            return (
                                <tr key={i}>
                                    <td>{category.judul}</td>
                                    <td>{category.sub_judul}</td>
                                    <td>{category.dokumen}</td>
                                    <td>{category.deskripsi}</td>
                                    <td>
                                        <div className="flex gap-2">
                                            <Link
                                                href={route(
                                                    "dashboard.service.update",
                                                    category.id
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
                                                        e.preventDefault();
                                                        deleteGallery(
                                                            category.id
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
                <Pagination links={services.links} />
            </div>
        </AuthenticatedLayout>
    );
}
