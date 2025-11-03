import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import WarningButton from "@/Components/WarningButton";
import DangerButton from "@/Components/DangerButton";
import TextInput from "@/Components/TextInput";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function DashboardIndex({ categories, query }) {
    const { delete: destroy } = useForm();
    const deleteNewsCategory = (id) => {
        destroy(route("dashboard.newsCategory.delete", id));
    };
    const { data, setData, get } = useForm({
        search: query.search || "",
    });
    return (
        <AuthenticatedLayout>
            <Head title="Label Berita" />
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
                            placeholder="Cari Label"
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
                <table className="border border-gray-200 divide-y divide-gray-200">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Kategori Berita</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.data.map((category, i) => {
                            return (
                                <tr key={i}>
                                    <td>{category.kategori}</td>
                                    <td>
                                        <div className="flex gap-2">
                                            <Link
                                                href={route(
                                                    "dashboard.newsCategory.update",
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
                                                        deleteNewsCategory(
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
                <Pagination links={categories.links} />
            </div>
        </AuthenticatedLayout>
    );
}
