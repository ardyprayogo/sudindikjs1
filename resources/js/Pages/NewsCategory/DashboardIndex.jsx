import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import WarningButton from "@/Components/WarningButton";
import DangerButton from "@/Components/DangerButton";
import TextInput from "@/Components/TextInput";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Edit, Trash2Icon } from "lucide-react";

export default function DashboardIndex({ categories, query }) {
    const { delete: destroy } = useForm();
    const deleteNewsCategory = (id) => {
        destroy(route("dashboard.newsCategory.delete", id));
    };
    const { data, setData, get } = useForm({
        search: query.search || "",
    });
    return (
        <AuthenticatedLayout header={"Kategori Berita"}>
            <div className="overflow-x-auto flex flex-col gap-2">
                <div className="flex flex-row justify-end">
                    <Link
                        className="text-end"
                        href={route("dashboard.newsCategory.create")}
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
                            placeholder="Cari Kategori Berita"
                            value={data.search}
                            onChange={(e) => {
                                setData("search", e.target.value);
                            }}
                        />
                        <PrimaryButton
                            onClick={(e) => {
                                e.preventDefault();
                                get(
                                    route("dashboard.newsCategory.index", data)
                                );
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
                                <th className="p-3 font-semibold">Kategori</th>
                                <th className="p-3 font-semibold">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.data.map((category, i) => {
                                return (
                                    <tr
                                        key={i}
                                        className="hover:bg-gray-100 border-b"
                                    >
                                        <td className="p-3">
                                            {category.kategori}
                                        </td>
                                        <td className="p-3">
                                            <div className="flex gap-2">
                                                <Link
                                                    href={route(
                                                        "dashboard.newsCategory.update",
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
                                                            deleteNewsCategory(
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
                <Pagination links={categories.links} />
            </div>
        </AuthenticatedLayout>
    );
}
