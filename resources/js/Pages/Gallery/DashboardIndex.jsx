import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import WarningButton from "@/Components/WarningButton";
import DangerButton from "@/Components/DangerButton";
import TextInput from "@/Components/TextInput";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Edit, Trash2Icon } from "lucide-react";

export default function DashboardIndex({ galleries, query }) {
    const { delete: destroy } = useForm();
    const deleteGallery = (id) => {
        destroy(route("dashboard.gallery.delete", id));
    };
    const { data, setData, get } = useForm({
        search: query.search || "",
    });
    return (
        <AuthenticatedLayout header={"Galeri"}>
            <div className="overflow-x-auto flex flex-col gap-2">
                <div className="flex flex-row justify-end">
                    <Link
                        className="text-end"
                        href={route("dashboard.gallery.create")}
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
                                get(route("dashboard.gallery.index", data));
                            }}
                        >
                            Cari
                        </PrimaryButton>
                    </div>
                </div>
                {/* Table Wrapper */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="p-3 font-semibold">Judul</th>
                                <th className="p-3 font-semibold">Gambar</th>
                                <th className="p-3 font-semibold">Deskripsi</th>
                                <th className="p-3 font-semibold">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {galleries.data.map((category, i) => {
                                return (
                                    <tr
                                        key={i}
                                        className="hover:bg-gray-100 border-b"
                                    >
                                        <td className="p-3">
                                            {category.judul}
                                        </td>
                                        <td className="p-3">
                                            {category.gambar}
                                        </td>
                                        <td className="p-3">
                                            {category.deskripsi}
                                        </td>
                                        <td className="p-3">
                                            <div className="flex gap-2">
                                                <Link
                                                    href={route(
                                                        "dashboard.gallery.update",
                                                        category.id
                                                    )}
                                                >
                                                    <WarningButton className="btn-xs flex gap-2">
                                                        <Edit size={18} />
                                                        <span>Edit</span>
                                                    </WarningButton>
                                                </Link>
                                                <DangerButton
                                                    className="btn-xs flex gap-2"
                                                    onClick={(e) => {
                                                        {
                                                            e.preventDefault();
                                                            deleteGallery(
                                                                category.id
                                                            );
                                                        }
                                                    }}
                                                >
                                                    <Trash2Icon size={18} />
                                                    <span>Hapus</span>
                                                </DangerButton>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <Pagination links={galleries.links} />
            </div>
        </AuthenticatedLayout>
    );
}
